import axios from "axios";
import { create } from "zustand";

const BASE_URL = "http://localhost:3001";

export const useProductStore = create((set) => ({
  products: [],
  loading: false,
  fetch: async () => {
    try {
      set({ loading: true });
      const response = await axios.get(`${BASE_URL}/products`);

      set({ products: response.data });
      return { data, success: true };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Something went wrong.";
      return { data: errorMessage, success: false };
    } finally {
      set({ loading: false });
    }
  },
  add: async (newProduct) => {
    try {
      console.log({ newProduct });
      set({ loading: true });
      const response = await axios.post(`${BASE_URL}/products`, newProduct);

      return { data: response, success: true };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Something went wrong.";

      return { data: errorMessage, success: false };
    } finally {
      set({ loading: false });
    }
  },
  delete: async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/products/${id}`);
      set((prev) => ({
        products: prev.products.filter((product) => product.id !== id),
      }));
      return { data: response, success: true };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Something went wrong.";
      return { data: errorMessage, success: false };
    }
  },
  update: async ({ id, updatedProduct }) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/products/${id}`,
        updatedProduct
      );
      return { data: response, success: true };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Something went wrong.";
      return { data: errorMessage, success: false };
    }
  },
}));
