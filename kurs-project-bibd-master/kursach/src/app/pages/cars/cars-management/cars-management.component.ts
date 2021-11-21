import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './cars-management.component.html',
  styleUrls: ['./cars-management.component.scss']
})
export class CarsManagementComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openFavourites() {
    this.router.navigate(['cars/favourites']);
  }

  openMyCars() {
    this.router.navigate(['cars/myCars']);
  }

  openMyOrders() {
    this.router.navigate(['cars/myOrders']);
  }

}
