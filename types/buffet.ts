export type Buffet = {
    id: number;
    name: string;
    price: number;
    image: string;
    categories: {
      title: string;
      items: string[];
    }[];
  };