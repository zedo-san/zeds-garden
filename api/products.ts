import type { ICategory, IProduct } from "~/types";

export interface IUseGetProductsParams {
  limit?: number;
  skip?: number;
  search?: string;
  category?: string | number;
}

const getProducts = async ({ limit, skip, search, category }: IUseGetProductsParams) => {
  limit = limit ? limit : 10;
  const offset = skip ? skip : 0;
  const title = search ? search : "";

  const query = { limit, offset } as { [key: string]: any };
  if (title) {
    query.title = search;
  }
  if (category) {
    query.categoryId = category;
  }
  const productsResponse = await $fetch<IProduct[]>("https://api.escuelajs.co/api/v1/products/", {
    query,
  });
  return productsResponse;
};

const getCategories = async () => {
  const categories = await $fetch<ICategory[]>("https://api.escuelajs.co/api/v1/categories");
  return categories;
};

const getSingleProduct = async (productId: string) => {
  const product = await $fetch<IProduct>("https://api.escuelajs.co/api/v1/products/" + productId);
  return product;
};

const ProductsAPI = {
  getProducts,
  getCategories,
  getSingleProduct,
};
export default ProductsAPI;
