import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
import {Store} from '@ngrx/store'
import * as CoffeeActions from '../store/actions'

import { Coffee } from '../types/coffee.interface';
import { CoffeeStateInterface } from '../types/coffeeState.interface';

@Component({
  selector: 'app-coffees',
  templateUrl: './coffees.component.html',
  styleUrls: ['./coffees.component.css']
})
export class CoffeesComponent implements OnInit{
  title = 'Coffee';
  newData: any;
  coffeeList: Coffee[]=[];
  currentPage= 1;
  pageSize = 10;

  constructor(private _apiservice: ApiserviceService,private store: Store ){
  }

  ngOnInit(){
    this._apiservice.getdata().subscribe( res =>{ 
      this.newData = res; 
        this.newData &&
         this.store.dispatch(CoffeeActions.setCoffeeList({coffeeList:this.newData}))
    })
     this.store.subscribe((list:any)=>{

      this.coffeeList=(<CoffeeStateInterface>list['coffees']).coffeeList;

     });
  }
}
