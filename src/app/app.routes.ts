import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { homeRoutes } from './pages/home/home.routes';


export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: homeRoutes,
  },
];
