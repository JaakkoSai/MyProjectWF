import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { BarListComponent } from './bar-list/bar-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [BarListComponent, OrderListComponent],
  imports: [BrowserModule],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [BarListComponent],
})
export class AppModule {}
