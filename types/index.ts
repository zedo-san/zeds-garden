export interface IMerchant {
  firstName: string;
  lastName: string;
  email: string;
  photo?: string;
}

export interface ICategory {
  id: number;
  name: string;
  image: string;
  creationAt: Date;
  updatedAt: Date;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: Date;
  updatedAt: Date;
  category: ICategory;
}

export interface IProductsStore {
  products: IProduct[];
  categories: ICategory[];
}

export interface ICartStore {
  cart: IProduct[];
  cartListCount: number;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}
