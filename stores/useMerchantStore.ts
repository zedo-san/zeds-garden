import type { IMerchant } from "~/types";

const useMerchantStore = defineStore("merchant", {
  state: (): IMerchant => {
    return {
      firstName: "",
      lastName: "",
      email: "",
      photo: "",
    };
  },
});

export default useMerchantStore;
