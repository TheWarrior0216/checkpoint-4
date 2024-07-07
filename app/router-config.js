import { AccountController } from "./controllers/AccountController.js";
import { ClockController } from "./controllers/ClockController.js";
import { PagesController } from "./controllers/PagesController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [PagesController, ClockController],
    view: ``
  },

  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




