import { clockService } from "../services/ClockService.js";

export class ClockController {
  constructor() {
    this.currentTime()
  }
  currentTime() {
    clockService.currentTime()

  }
}