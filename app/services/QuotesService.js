import { AppState } from "../AppState.js"
import { Quote } from "../models/Quote.js"
import { api } from "./AxiosService.js"

class QuotesService {
  async getQuote() {
    const response = await api.get('/api/quotes')
    AppState.quote = new Quote(response.data)
    console.log(AppState.quote)
  }

}
export const quotesService = new QuotesService()