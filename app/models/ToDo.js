import { AppState } from "../AppState.js"
let numberData = 0
export class ToDo {
  constructor(data) {
    this.description = data.description
    this.id = data.id
    this.completed = data.completed
  }
  get todoTemplate() {
    return `<div class="d-flex justify-content-between my-3">
    <div>
    <input type="checkbox" onclick="app.ToDosController.completeTodo('${this.id}')"${this.completed ? 'checked' : ''} > ${this.description}</input>
    </div>
    <button class="btn btn-danger" onclick="app.ToDosController.deleteTodo('${this.id}')">X</button>
    </div>`
  }
  // get todoTrackerTemplate(){
  //   return`
  //   To Do ${}`
  // }
}