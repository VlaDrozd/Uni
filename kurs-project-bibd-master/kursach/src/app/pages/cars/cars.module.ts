import { MatButtonModule } from '@angular/material/button';
import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars.component';
import { CarsManagementComponent } from './cars-management/cars-management.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { MyCarsComponent } from './my-cars/my-cars.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { FavouriteCardComponent } from './favourites/favourite-card/favourite-card.component';
import { MyCarsItemCardComponent } from './my-cars/my-cars-item-card/my-cars-item-card.component';
import { MyOredersItemCardComponent } from './my-orders/my-oreders-item-card/my-oreders-item-card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [CarsComponent, CarsManagementComponent, FavouritesComponent, MyCarsComponent, MyOrdersComponent, FavouriteCardComponent, MyCarsItemCardComponent, MyOredersItemCardComponent],
  imports: [
    CommonModule,
    CarsRoutingModule,
    CoreModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule
  ]
})
export class CarsModule { }
