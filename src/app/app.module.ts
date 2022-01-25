import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PumpingComponent } from './pumping/pumping.component';
import { FeedingComponent } from './feeding/feeding.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GoogleChartsModule } from 'angular-google-charts';
import { FeedingHistoryComponent } from './feeding-history/feeding-history.component';
import { FeedingHistoryTypeComponent } from './feeding-history-type/feeding-history-type.component';
import { FeedingHistoryQuantityComponent } from './feeding-history-quantity/feeding-history-quantity.component';
import { FeedingHistoryBottlesComponent } from './feeding-history-bottles/feeding-history-bottles.component';
import { FeedingHistoryFeedsComponent } from './feeding-history-feeds/feeding-history-feeds.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PortalComponent } from './portal/portal.component';
import { ApprovedCountersComponent } from './approved-counters/approved-counters.component';
import { RecipeHomeComponent } from './recipe-home/recipe-home.component';
import { MemeComponent } from './meme/meme.component';
import { HttpErrorInterceptor } from './shared/http-error.interceptor';
import { HeaderComponent } from './header/header.component';
import { WineComponent } from './wine/wine.component';
import { FunkoComponent } from './funko/funko.component';

@NgModule({
  declarations: [
    AppComponent,
    PumpingComponent,
    FeedingComponent,
    FeedingHistoryComponent,
    FeedingHistoryTypeComponent,
    FeedingHistoryQuantityComponent,
    FeedingHistoryBottlesComponent,
    FeedingHistoryFeedsComponent,
    LoginComponent,
    HomeComponent,
    PortalComponent,
    ApprovedCountersComponent,
    RecipeHomeComponent,
    MemeComponent,
    HeaderComponent,
    WineComponent,
    FunkoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    GoogleChartsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
