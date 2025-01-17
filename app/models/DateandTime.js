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
    <section class="mt-5">
      <div class=" container text-light ">
        <div class="row text-center bg-dark bg-gradient shadow rounded bg-opacity">
          <div class="col-12 ">
          <p class="fs-6 pt-3 opacity-fix">${this.currentDate}</p>
          </div>
          <div class="col-12 p-3">
            <h1 opacity-fix>${this.currentTime}</h1>
          </div>
        </div>
      </div>
    </section>`
  }
}