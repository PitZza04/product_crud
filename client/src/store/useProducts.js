import axios from "axios";
import { create } from "zustand";

const BASE_URL = "http://localhost:3000"

export const useProductStore = create((set) => ({
    products: [],
    loading: false,
    fetch:  async () => {
        try {
          set({ loading: true })
          const response =  await axios.get(`${BASE_URL}/products`)
      
          set({products: response.data})
          return { data, success: true }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Something went wrong."
            return { data: errorMessage, success: false }
        } finally {
              set({ loading: false })
        }
    },
    add: async ({products}) => {
         try {
          set({ loading: true })
          const response =  await axios.post(`${BASE_URL}/products`, products)
      
          set({products: response.data})
          return { data, success: true }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Something went wrong."
            return { data: errorMessage, success: false }
        } finally {
              set({ loading: false })
        }
    }
}))