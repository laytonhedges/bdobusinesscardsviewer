import { Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [
  {
    path: 'card',
    component: App,
  },
  {
    path: '**',
    redirectTo: 'card',
  },
];
