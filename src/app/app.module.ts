import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PumpingComponent } from './pumping/pumping.component';
import { FeedingComponent } from './feeding/feeding.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
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
import { WineTastingComponent } from './wine-tasting/wine-tasting.component';
import { WineryComponent } from './winery/winery.component';
import { DialogWineryAddComponent } from './dialog-winery-add/dialog-winery-add.component';
import { DialogWineAddComponent } from './dialog-wine-add/dialog-wine-add.component';
import { DialogWineRatingAddComponent } from './dialog-wine-rating-add/dialog-wine-rating-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogWineImageAddComponent } from './dialog-wine-image-add/dialog-wine-image-add.component';
import { WineHeaderComponent } from './wine-tastings/wine-header/wine-header.component';
import { WineCardXListComponent } from './wine-tastings/wine-card-xlist/wine-card-xlist.component';
import { GasComponent } from './gas/gas.component';
import { DialogWineRatingEditComponent } from './dialog-wine-rating-edit/dialog-wine-rating-edit.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GasStatsComponent } from './gas-stats/gas-stats.component';
import { GasFormComponent } from './gas-form/gas-form.component';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';
import { RequestInterceptor } from './shared/RequestInterceptor';
import { FilterByPipe } from './util/filter-by.pipe';
import { RatingIconComponent } from './wine-tastings/rating-icon/rating-icon.component';
import { WineryListComponent } from './wine-tastings/winery-list/winery-list.component';

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
    FunkoComponent,
    WineTastingComponent,
    WineryComponent,
    DialogWineryAddComponent,
    DialogWineAddComponent,
    DialogWineRatingAddComponent,
    DialogWineImageAddComponent,
    WineHeaderComponent,
    WineCardXListComponent,
    GasComponent,
    DialogWineRatingEditComponent,
    GasStatsComponent,
    GasFormComponent,
    RecipeViewComponent,
    FilterByPipe,
    RatingIconComponent,
    WineryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    GoogleChartsModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    MatToolbarModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    NgxChartsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
