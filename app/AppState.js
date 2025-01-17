import { DateandTime } from "./models/DateandTime.js"
import { Quote } from "./models/Quote.js"
import { ToDo } from "./models/ToDo.js"
import { Weather } from "./models/Weather.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null
  /**@type {DateandTime} */
  background = null
  /**@type {DateandTime} */
  newDate = null
  /**@type {Weather} */
  weather = null
  /**@type {Quote} */
  quote = null
  /**@type {ToDo []} */
  todoList = []
}

export const AppState = createObservableProxy(new ObservableAppState())