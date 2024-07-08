import { AppState } from "../AppState.js";
import { toDosService } from "../services/ToDoService.js";

export class ToDosController {
  constructor() {
    AppState.on('account', this.getToDos)
    AppState.on('todoList', this.drawToDos)
  }
  async getToDos() {
    await toDosService.getToDos()
  }
  drawToDos() {

  }
}