import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"

class PagesServices {
  async backGround() {
    const response = await api.get(`/api/images?category=rain&animal`)
    AppState.background = response.data.largeImgUrl
  }

}
export const pagesServices = new PagesServices()