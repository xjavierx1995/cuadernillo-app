import { defineStore } from "pinia";
import { StepI, StepsStoreInterface } from "src/insterfaces/step-store.interface";

const initialConfig: StepsStoreInterface = {
  steps: []
};

export const useStepsStore = defineStore('steps', {
  state: (): StepsStoreInterface => (initialConfig),
  getters: {
    getSteps(state) {
      return state.steps;
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
