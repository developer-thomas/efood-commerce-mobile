import { Routes } from "@angular/router";
import { AuthPage } from "./auth/auth.page";

export const homeRoutes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: AuthPage,
  },
];