import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { api } from "./AxiosService.js"

class WeatherService {
  async getWeather() {
    const response = await api.get('/api/weather')
    console.log(response.data.main.temp)
    let currentTemp = new Weather(response.data.main)
    AppState.weather = currentTemp
    console.log(AppState.weather)
  }

}
export const weatherService = new WeatherService()