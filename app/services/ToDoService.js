import { AppState } from "../AppState.js"
import { ToDo } from "../models/ToDo.js"
import { api } from "./AxiosService.js"

class ToDosService {
  async getToDos() {
    const response = await api.get('/api/todos')
    const gatheredData = response.data.map(POJO => new ToDo(POJO))
    AppState.todoList = gatheredData
    console.log(AppState.todoList)
  }

  async addToDo(data) {
    let response = await api.post('/api/todos', data)
    let newToDo = new ToDo(response.data)
    AppState.todoList.push(newToDo)
    console.log(AppState.todoList)
  }
  async deleteTodo(id) {
    await api.delete(`/api/todos/${id}`)
    let todos = AppState.todoList
    let foundIndex = todos.findIndex(todo => todo.id == id)
    todos.splice(foundIndex, 1)


  }
  completeTodo(id) {
    const todos = AppState.todoList
    const foundTodo = todos.find(todo => todo.id == id)
    if (!foundTodo.completed) {
      foundTodo.completed = true
    }
    else {
      foundTodo.completed = false
    }
    api.put(`/api/todos/${id}`, foundTodo)
    console.log(foundTodo)
  }
}
export const toDosService = new ToDosService()