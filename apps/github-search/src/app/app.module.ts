import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, EffectsModule.forRoot([]), StoreRouterConnectingModule.forRoot(), StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
