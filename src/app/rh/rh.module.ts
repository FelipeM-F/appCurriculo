import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RHPageRoutingModule } from './rh-routing.module';

import { RHPage } from './rh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RHPageRoutingModule
  ],
  declarations: [RHPage]
})
export class RHPageModule {}
