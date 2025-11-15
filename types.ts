
export interface Discovery {
  year: number;
  title: string;
  summary: string;
  details: string;
  category: 'Theoretical Breakthrough' | 'Engineering Advance' | 'Biotechnology' | 'Materials Science' | 'Energy' | 'Computer Science' | 'Physics' | 'Space Exploration' | string;
}
