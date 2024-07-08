import { AppState } from "../AppState.js";
import { toDosService } from "../services/ToDoService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class ToDosController {
  constructor() {
    AppState.on('account', this.getToDos)
    AppState.on('todoList', this.drawToDos)
  }
  async getToDos() {
    await toDosService.getToDos()
  }
  drawToDos() {
    let todos = AppState.todoList
    let htmlString = ""
    todos.forEach(todo => htmlString += todo.todoTemplate)
    setHTML('todo', htmlString)
  }
  async addToDo() {
    try {
      event.preventDefault()
      let form = event.target
      let description = getFormData(form)
      await toDosService.addToDo(description)
      // @ts-ignore
      form.reset()
    } catch (error) {
      Pop.error(error)
    }

  }
  async deleteTodo(id) {
    try {
      const confirm = await Pop.confirm('Are you sure you want to delete?')
      if (!confirm) {
        return
      }
      await toDosService.deleteTodo(id)
    } catch (error) {
      Pop.error(error)
    }
  }
  async completeTodo(id) {
    try {
      await toDosService.completeTodo(id)
    } catch (error) {
      Pop.error()
    }
  }
}