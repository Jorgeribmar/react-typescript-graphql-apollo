export interface Chocolate {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export interface Chocolates {
  getChocolates: Chocolate[];
}

export type ChocolateMutation = {
  addChocolate: Chocolate;
};
