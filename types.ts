export enum Category {
  All = 'All',
  Electronics = 'Electronics',
  Clothing = 'Clothing',
  Books = 'Books',
  Home = 'Home'
}

export interface Product {
  id: number;
  name: string;
  description: string;
  category: Category | string;
  price: number;
  inStock: boolean;
  image: string;
  rating: number;
}
