export class DateandTime {
  constructor() {
    this.currentTime = this.displayTime
    this.currentDate = this.displayDate
    console.log(this.currentTime, this.currentDate)
  }
  get displayTime() {
    return new Date().toLocaleTimeString('en-us', { hour: "numeric", minute: '2-digit' })
  }
  get displayDate() {
    return new Date().toLocaleDateString('en-us', { month: 'short', day: '2-digit', year: 'numeric' })
  }
  get timeTemplate() {
    return `
    <section class=" ">
      <div class=" container text-light ">
        <div class="row text-center bg-dark bg-gradient shadow ">
          <div class="col-12">
          <p class="fs-6 pt-3">${this.currentDate}</p>
          </div>
          <div class="col-12 p-3">
            <h1>${this.currentTime}</h1>
          </div>
        </div>
      </div>
    </section>`
  }
}