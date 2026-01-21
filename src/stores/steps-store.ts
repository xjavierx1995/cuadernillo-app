import { defineStore } from "pinia";
import { StepI, StepsStoreInterface } from "src/insterfaces/step-store.interface";
import { STEPS } from "src/utils/steps";

const initialConfig: StepsStoreInterface = {
  steps: STEPS,
  selectedStep: null,
  selectedPage: 1
};

export const useStepsStore = defineStore('steps', {
  state: (): StepsStoreInterface => (initialConfig),
  getters: {
    getSteps(state) {
      return state.steps;
    },
    getWordsByStep: (state) => {
      return (stepId: string) => {
        const step = state.steps.find(s => s.id === stepId);
        console.log(state.steps);
        console.log(step);

        return step ? step.words : [];
      };
    },
    getWordsByPage: (state) => {
      return (page: number) => {
        const step = state.steps.find(s => s.page === page);
        return step ? step.words : [];
      };
    }
  },
  actions: {
    addStep(step: StepI) {
      this.steps.push(step);
    },
    setCompleted(stepId: string, completed: boolean) {
      const step = this.steps.find(s => s.id === stepId);
      if (step) {
        step.completed = completed;
      }
    },
    setCompletedWord(stepId: string, wordId: string, completed: boolean) {
      const step = this.steps.find(s => s.id === stepId);
      if (step) {
        const word = step.words.find(w => w.id === wordId);
        if (word) {
          word.completed = completed;
          // After changing a word, update the step completion status
          const allCompleted = step.words.length > 0 && step.words.every(w => w.completed === true);
          step.completed = allCompleted;
        }
      }
    },
    // Ensure a step's `completed` is true only when all its words are completed
    updateStepCompletion(stepId: string) {
      const step = this.steps.find(s => s.id === stepId);
      if (step) {
        step.completed = step.words.length > 0 && step.words.every(w => w.completed === true);
      }
    },
    selectStep(stepId: string) {
      const step = this.steps.find(s => s.id === stepId);
      if (step) {
        this.selectedStep = step;
        this.selectedPage = step.page;
      }
    },
    setSelectedPage(page: number) {
      this.selectedPage = page;
    },
    setNextStepAndSelectedStep (next: boolean) {
      next ? this.selectedPage++ : this.selectedPage--;
      this.selectedStep = this.steps.find(
        (step) => step.page === this.selectedPage,
      )!;
    }
  }
});
