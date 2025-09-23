import { ENV } from "../../utils/constants";
import axios from 'axios'

export class Products {
  baseApi = ENV.BASE_API

  async getProducts() {
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.PRODUCTS}`
      const response = await axios.get(url)
      return response.data
    } catch (error) {
      console.error('Error al obtner productos:', error)
      throw error
    }
  }
}