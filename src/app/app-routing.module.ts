import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PumpingComponent} from './pumping/pumping.component';
import {FeedingComponent} from './feeding/feeding.component';

const routes: Routes = [
  {
    path: 'pumping',
    component: PumpingComponent
  },
  {
    path: 'feeding',
    component: FeedingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
