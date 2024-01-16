import ProductsAPI, { type IUseGetProductsParams } from "~/api/products";
import type { IProductsStore } from "~/types";

export const useProductsStore = defineStore("products", {
  state: (): IProductsStore => {
    return {
      products: [],
      categories: [],
    };
  },
  getters: {
    productsList: (state) => state.products,
    categoriesList: (state) => state.categories,
  },
  actions: {
    async fetchProducts({ limit, skip, search, category }: IUseGetProductsParams) {
      try {
        const products = await ProductsAPI.getProducts({ limit, skip, search, category });
        this.products = products;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchCategories() {
      try {
        const categories = await ProductsAPI.getCategories();
        this.categories = categories;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
