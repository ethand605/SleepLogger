import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogSleepinessPagePageRoutingModule } from './log-sleepiness-page-routing.module';

import { LogSleepinessPagePage } from './log-sleepiness-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogSleepinessPagePageRoutingModule
  ],
  declarations: [LogSleepinessPagePage]
})
export class LogSleepinessPagePageModule {}
