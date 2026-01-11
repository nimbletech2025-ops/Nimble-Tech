import { Routes } from '@angular/router';
import { MainComponent } from '../pages/main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('../pages/home/home.component').then((m) => m.HomeComponent),
      },
    ],
  },
];
