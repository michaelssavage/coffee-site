export type CoffeeType = "Arabic" | "Robusta";

export type Coffee = {
  name: string;
  price: number;
  type: CoffeeType;
  description: string;
  imageUrl: string;
};

type ID = {
  id: string;
};

export type CoffeeEntity = Coffee & ID;
