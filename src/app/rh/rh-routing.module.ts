import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RHPage } from './rh.page';

const routes: Routes = [
  {
    path: '',
    component: RHPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RHPageRoutingModule {}
