import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabNavPage } from './tab-nav.page';

const routes: Routes = [
  {
    path: 'tab-nav',
    component: TabNavPage,
    children:[
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'view-page',
        loadChildren: () => import('../view-page/view-page.module').then( m => m.ViewPagePageModule)
      },
      {
        path:'',
        redirectTo: '/tab-nav/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path:'',
    redirectTo: '/tab-nav/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabNavPageRoutingModule {}
