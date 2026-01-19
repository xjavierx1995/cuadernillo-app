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
    }
  }
});
