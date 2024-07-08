import { AppState } from "../AppState.js";
import { quotesService } from "../services/QuotesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class QuotesController {
  constructor() {
    this.getQuote()
    AppState.on('quote', this.drawQuote)
  }
  async getQuote() {
    try {
      await quotesService.getQuote()
    } catch (error) {
      Pop.error(error)
    }
  }
  drawQuote() {
    let quote = AppState.quote
    setHTML('quote', quote.quoteHtmlTemplate)
  }
}