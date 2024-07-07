import { DateandTime } from "./models/DateandTime.js"
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
}

export const AppState = createObservableProxy(new ObservableAppState())