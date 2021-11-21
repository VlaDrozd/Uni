import { MyOrdersComponent } from './my-orders/my-orders.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsManagementComponent } from './cars-management/cars-management.component';

import { CarsComponent } from './cars.component';
import { MyCarsComponent } from './my-cars/my-cars.component';

const routes: Routes = [
  {
    path: '', component: CarsComponent, children: [
      {
        path: '', component: CarsManagementComponent, children: [
          {path: '', redirectTo: 'favourites'},
          {path: 'favourites', component: FavouritesComponent },
          {path: 'myCars', component: MyCarsComponent},
          {path: 'myOrders', component: MyOrdersComponent}
        ]
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
