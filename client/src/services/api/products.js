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

  async createProduct(product) {
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.PRODUCTS}`
      const response = await axios.post(url, product)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  async updateProduct(product, id) {
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.PRODUCTS}/${id}`
      const response = await axios.put(url, product)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  async deleteProduct(id) {
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.PRODUCTS}/${id}`
      const response = await axios.delete(url)
      return response
    } catch (error) {
      console.error(error)
    }
  }
}