import { island1 } from './islands/island1';
import { island2 } from './islands/island2';
import { island3 } from './islands/island3';
import { island4 } from './islands/island4';
import { island5 } from './islands/island5';
import { island6 } from './islands/island6';
import { island7 } from './islands/island7';
import { island8 } from './islands/island8';

export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
};

export type TOCItem = {
  id: string;
  title: string;
};

// @ts-ignore
export const courses: any[] = [
  island1,
  island2,
  island3,
  island4,
  island5,
  island6,
  island7,
  island8
];
