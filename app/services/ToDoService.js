import { api } from "./AxiosService.js"

class ToDosService {
  async getToDos() {
    const response = await api.get('/api/todos')
    console.log(response.data)
  }

}
export const toDosService = new ToDosService()