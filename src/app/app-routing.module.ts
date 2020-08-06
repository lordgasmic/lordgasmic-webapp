import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PumpingComponent} from './pumping/pumping.component';

const routes: Routes = [
  {
    path: 'pumping',
    component: PumpingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
