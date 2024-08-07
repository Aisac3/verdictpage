import { Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/verdict', pathMatch: 'full' },
  { path: 'verdict', loadComponent: () => import('./search/search.component').then(m => m.SearchComponent) },
  { path: 'verdict', loadComponent: () => import('./results/results.component').then(m => m.ResultsComponent) },
];

export const AppRoutes = [
  provideRouter(routes),
  importProvidersFrom(RouterModule.forRoot(routes)),
];

