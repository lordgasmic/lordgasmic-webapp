import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PumpingComponent } from './pumping/pumping.component';
import { FeedingComponent } from './feeding/feeding.component';
import { FeedingHistoryComponent } from './feeding-history/feeding-history.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PortalComponent } from './portal/portal.component';
import { ApprovedCountersComponent } from './approved-counters/approved-counters.component';
import { MemeComponent } from './meme/meme.component';
import { WineComponent } from './wine/wine.component';
import { FunkoComponent } from './funko/funko.component';
import { WineTastingComponent } from './wine-tasting/wine-tasting.component';
import { WineryComponent } from './winery/winery.component';
import { GasComponent } from './gas/gas.component';

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
  },
  {
    path: 'wineTasting',
    component: WineTastingComponent
  },
  {
    path: 'wineTasting/winery/:id',
    component: WineryComponent
  },
  {
    path: 'wineTasting/wine/:id',
    component: WineComponent
  },
  {
    path: 'funko',
    component: FunkoComponent
  },
  {
    path: 'gas',
    component: GasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
