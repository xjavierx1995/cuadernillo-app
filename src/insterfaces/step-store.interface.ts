export interface StepsStoreInterface {
  steps: StepI[];
  selectedStep: StepI | null;
  selectedPage: number;
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
  imageUrl?: string;
  answer: string;
}
