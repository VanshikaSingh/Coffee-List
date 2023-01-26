import { isDevMode, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './MyComponents/store/reducers';
import { CoffeeModule } from './MyComponents/coffees/coffee.module';
import { EffectsModule } from '@ngrx/effects';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoffeeModule,
    EffectsModule.forRoot([]),
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('coffees', reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
