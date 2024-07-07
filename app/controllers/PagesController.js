import { AppState } from "../AppState.js";
import { pagesServices } from "../services/PagesServices.js";
import { Pop } from "../utils/Pop.js";

export class PagesController {
  constructor() {
    this.backGround()
  }
  async backGround() {
    try {
      await pagesServices.backGround()
      const backGroundImg = AppState.background
      document.body.style.backgroundImage = `url(${backGroundImg})`
    } catch (error) {
      Pop.error(error)
    }
  }
}