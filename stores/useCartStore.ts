import type { ICartItem, ICartStore, IProduct } from "~/types";

export const useCartStore = defineStore("cart", {
  state: (): ICartStore => {
    return { cart: [], cartListCount: 0 };
  },
  getters: {
    cartCount: (state) => state.cartListCount,
    cartItems: (state) => {
      const cart: Record<number, ICartItem> = {};
      for (const product of state.cart) {
        const productId = product.id;

        if (cart[productId]) {
          // Product already exists in the cart, increment quantity
          cart[productId].quantity += 1;
        } else {
          // Product doesn't exist in the cart, add it with quantity 1
          cart[productId] = {
            product,
            quantity: 1,
          };
        }
      }

      return cart;
    },
  },
  actions: {
    addToCart(product: IProduct) {
      this.cartListCount++;
      this.cart = [...this.cart, product];
    },
  },
});
