import { AppState } from "../AppState.js"
import { DateandTime } from "../models/DateandTime.js"
import { setHTML } from "../utils/Writer.js"

class ClockService {
  currentTime() {
    AppState.newDate = new DateandTime()

  }

}
export const clockService = new ClockService()