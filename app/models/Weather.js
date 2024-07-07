export class Weather {
  constructor(data) {

    this.temperatureF = ((data.temp - 273.15) * 1.8) + 32
    this.temperatureC = (data.temp - 273.15)
  }
  get fTempTemplate() {
    return `<section id="temp" class="d-flex">
      <div class="container">
        <div class="row justify-content-end">
          <div class="col-2">
            <h1 role="button" onclick="app.WeatherController.switchTempC()">${(this.temperatureF).toFixed(2)}°F</h1>
          </div>
        </div>
      </div>
    </section>`
  }
  get cTempTemplate() {
    return `<section id="temp" class="d-flex">
      <div class="container">
        <div class="row justify-content-end">
          <div class="col-2">
            <h1 role="button" onclick="app.WeatherController.switchTempF()">${(this.temperatureC).toFixed(2)}°C</h1>
          </div>
        </div>
      </div>
    </section>`
  }
}