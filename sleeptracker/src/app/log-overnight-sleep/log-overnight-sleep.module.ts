import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogOvernightSleepPageRoutingModule } from './log-overnight-sleep-routing.module';

import { LogOvernightSleepPage } from './log-overnight-sleep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogOvernightSleepPageRoutingModule
  ],
  declarations: [LogOvernightSleepPage]
})
export class LogOvernightSleepPageModule {}
