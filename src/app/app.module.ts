import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponents, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@app-core';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as highstock from 'highcharts/modules/stock.src';

// import * as more from 'highcharts/highcharts-more.src';

@NgModule({
  declarations: [
    AppComponent,
    ...AppComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ChartModule
  ],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [highstock] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
