import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PumpingComponent } from './pumping/pumping.component';
import { FeedingComponent } from './feeding/feeding.component';
import { FeedingHistoryComponent } from './feeding-history/feeding-history.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PortalComponent } from './portal/portal.component';
import { ApprovedCountersComponent } from './approved-counters/approved-counters.component';
import { MemeComponent } from './meme/meme.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pumping',
    component: PumpingComponent
  },
  {
    path: 'feeding',
    component: FeedingComponent
  },
  {
    path: 'feeding/history',
    component: FeedingHistoryComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'portal',
    component: PortalComponent
  },
  {
    path: 'approved-counters',
    component: ApprovedCountersComponent
  },
  {
    path: 'memes',
    component: MemeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
