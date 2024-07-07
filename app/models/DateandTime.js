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
}