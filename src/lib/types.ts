export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  images: string[];
  category: ProductCategory;
  sizes: number[];
  colors: string[];
  description: string;
  details: {
    material: string;
    sole: string;
    warranty: string;
  };
  rating: number;
  reviews: number;
  featured?: boolean;
}

export type ProductCategory = 'esportivos' | 'casuais' | 'corrida' | 'infantis';

export interface CartItem {
  product: Product;
  size: number;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface TrustSignal {
  icon: string;
  title: string;
  description: string;
}
