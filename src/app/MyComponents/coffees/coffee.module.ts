import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';

import { StoreModule } from '@ngrx/store';
import { NgxPaginationModule } from 'ngx-pagination';
import { ApiserviceService } from '../services/apiservice.service';
import { CoffeeEffects } from '../store/effects';
import { reducers } from '../store/reducers';
import { CoffeesComponent } from './coffees.component';

@NgModule({
  imports: [
    CommonModule,
     StoreModule.forFeature('coffees', reducers),
     EffectsModule.forFeature([CoffeeEffects]),
     BrowserModule, NgxPaginationModule,
   
  ],
  providers:  [ApiserviceService],
  declarations:  [CoffeesComponent],
  exports:  [CoffeesComponent],
})
export class CoffeeModule {}