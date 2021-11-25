import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogSleepinessPagePage } from './log-sleepiness-page.page';

const routes: Routes = [
  {
    path: '',
    component: LogSleepinessPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogSleepinessPagePageRoutingModule {}
