export interface StepsStoreInterface {
  steps: StepI[];
}

export interface StepI {
  id: string;
  page: number;
  title?: string;
  description?: string;
  completed: boolean;
  words: WordI[];
}

export interface WordI {
  id: string;
  completeWord: string;
  incompleteWord: string;
  sugestions: string[];
  completed: boolean;
}
