import { DateandTime } from "../models/DateandTime.js"

class ClockService {
  currentTime() {
    new DateandTime()
  }

}
export const clockService = new ClockService()