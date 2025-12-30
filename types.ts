
import React from 'react';

// Added React import to satisfy namespace requirement for React.ReactNode
export interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface EarningProjection {
  month: string;
  earnings: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}
