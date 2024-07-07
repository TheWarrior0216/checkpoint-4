import { AppState } from "../AppState.js";
import { clockService } from "../services/ClockService.js";
import { setHTML } from "../utils/Writer.js";

export class ClockController {
  constructor() {
    this.currentTime()
    setInterval(this.currentTime, 1000)
  }
  currentTime() {
    clockService.currentTime()
    setHTML('Time', AppState.newDate.timeTemplate)

  }
}