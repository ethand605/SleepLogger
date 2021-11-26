import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  {
    path: 'log-overnight-sleep',
    loadChildren: () => import('./log-overnight-sleep/log-overnight-sleep.module').then( m => m.LogOvernightSleepPageModule)
  },
  {
    path: 'log-sleepiness-page',
    loadChildren: () => import('./log-sleepiness-page/log-sleepiness-page.module').then( m => m.LogSleepinessPagePageModule)
  },
  {
    path: 'view-overnight',
    loadChildren: () => import('./view-overnight/view-overnight.module').then( m => m.ViewOvernightPageModule)
  },
  {
    path: 'view-sleepiness',
    loadChildren: () => import('./view-sleepiness/view-sleepiness.module').then( m => m.ViewSleepinessPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tab-nav/tab-nav.module').then( m => m.TabNavPageModule)
  },
  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
