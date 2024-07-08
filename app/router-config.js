import { AccountController } from "./controllers/AccountController.js";
import { ClockController } from "./controllers/ClockController.js";
import { PagesController } from "./controllers/PagesController.js";
import { QuotesController } from "./controllers/QuotesController.js";
import { ToDosController } from "./controllers/ToDosController.js";
import { WeatherController } from "./controllers/WeatherController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [PagesController, ClockController, WeatherController, QuotesController, ToDosController],
    view: ``
  },

  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




