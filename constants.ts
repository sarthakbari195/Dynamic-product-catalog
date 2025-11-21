import { Product, Category } from './types';

export const SAMPLE_PRODUCTS: Product[] = [
  { 
    id: 1, 
    name: 'MacBook Pro M3', 
    description: 'Supercharged by M3. The most powerful laptop for pros.',
    category: Category.Electronics, 
    price: 1599, 
    inStock: true, 
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&q=80&w=800',
    rating: 5
  },
  { 
    id: 2, 
    name: 'Classic Cotton Tee', 
    description: 'Premium heavyweight cotton t-shirt in charcoal grey.',
    category: Category.Clothing, 
    price: 29, 
    inStock: false, 
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
    rating: 4
  },
  { 
    id: 3, 
    name: 'Advanced React Patterns', 
    description: 'Master the art of building scalable React applications.',
    category: Category.Books, 
    price: 45, 
    inStock: true, 
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800',
    rating: 5
  },
  { 
    id: 4, 
    name: 'Sony WH-1000XM5', 
    description: 'Industry-leading noise canceling headphones.',
    category: Category.Electronics, 
    price: 349, 
    inStock: true, 
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
    rating: 5
  },
  { 
    id: 5, 
    name: 'Vintage Denim Jacket', 
    description: 'Authentic washed denim with a relaxed fit.',
    category: Category.Clothing, 
    price: 89, 
    inStock: true, 
    image: 'https://images.unsplash.com/photo-1601333762779-83bf81ea6133?auto=format&fit=crop&q=80&w=800',
    rating: 4
  },
  { 
    id: 6, 
    name: 'Minimalist Desk Lamp', 
    description: 'Adjustable LED lamp with warm and cool tones.',
    category: Category.Home, 
    price: 65, 
    inStock: false, 
    image: 'https://images.unsplash.com/photo-1507473888900-52e1adad5481?auto=format&fit=crop&q=80&w=800',
    rating: 3
  },
  { 
    id: 7, 
    name: 'Clean Code', 
    description: 'A Handbook of Agile Software Craftsmanship.',
    category: Category.Books, 
    price: 35, 
    inStock: true, 
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
    rating: 5
  },
  { 
    id: 8, 
    name: 'Smart Coffee Maker', 
    description: 'WiFi enabled coffee maker compatible with voice assistants.',
    category: Category.Home, 
    price: 129, 
    inStock: true, 
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
    rating: 4
  },
  {
    id: 9,
    name: 'Mechanical Keyboard',
    description: 'Tactile switches with RGB backlighting.',
    category: Category.Electronics,
    price: 149,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b91a603?auto=format&fit=crop&q=80&w=800',
    rating: 5
  },
  {
    id: 10,
    name: 'Leather Wallet',
    description: 'Hand-stitched full grain leather wallet.',
    category: Category.Clothing,
    price: 55,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1627123424574-181ce5171c98?auto=format&fit=crop&q=80&w=800',
    rating: 4
  }
];

export const CATEGORIES = [
  Category.All,
  Category.Electronics,
  Category.Clothing,
  Category.Books,
  Category.Home
];