import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabNavPageRoutingModule } from './tab-nav-routing.module';

import { TabNavPage } from './tab-nav.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabNavPageRoutingModule
  ],
  declarations: [TabNavPage]
})
export class TabNavPageModule {}
