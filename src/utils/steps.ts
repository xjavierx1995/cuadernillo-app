import { StepI } from "src/insterfaces/step-store.interface";

export const STEPS: StepI[] = [
  {
    id: 'step-1',
    page: 1,
    title: 'Introduction',
    description: 'Learn the basics of our application.',
    completed: false,
    words: [
      {
        id: 'word-1',
        completeWord: 'Welcome',
        incompleteWord: 'Wel_ome',
        sugestions: ['c', 'd', 'l'],
        completed: false,
        imageUrl: 'https://example.com/welcome-image.jpg'
      },
      {
        id: 'word-2',
        completeWord: 'Application',
        incompleteWord: 'App_ic_tion',
        sugestions: ['l', 'r', 's'],
        completed: false
      }
    ]
  },
  {
    id: 'step-2',
    page: 2,
    title: 'Features',
    description: 'Discover the features we offer.',
    completed: false,
    words: [
      {
        id: 'word-3',
        completeWord: 'Features',
        incompleteWord: 'Fe_tures',
        sugestions: ['a', 'e', 'i'],
        completed: false
      },
      {
        id: 'word-4',
        completeWord: 'Functionality',
        incompleteWord: 'Functi_nality',
        sugestions: ['o', 'u', 'a'],
        completed: false
      }
    ]
  }
];
