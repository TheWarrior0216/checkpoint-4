import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { setHTML } from "../utils/Writer.js";

export class WeatherController {
  constructor() {
    this.getWeather()
    AppState.on('weather', this.drawTemp)
  }
  async getWeather() {
    await weatherService.getWeather()
  }
  drawTemp() {
    let weather = AppState.weather
    setHTML('temp', weather.fTempTemplate)
  }
  switchTempF() {
    let weather = AppState.weather
    console.log('switching Temp')
    debugger
    setHTML('temp', weather.fTempTemplate)
  }
  switchTempC() {
    let weather = AppState.weather
    console.log('switching Temp')
    debugger
    setHTML('temp', weather.cTempTemplate)
  }
}