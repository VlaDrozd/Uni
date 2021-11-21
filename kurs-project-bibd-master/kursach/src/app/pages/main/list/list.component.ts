import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CarListItem } from 'src/app/core/interfaces/CarsLlist.interface';
import { MainService } from '../main.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list: Subscription;
  carsList: CarListItem[] = [];


  constructor(private mainService: MainService) {
    this.list = this.mainService.getList().subscribe(data => {
      this.carsList = data;
    });
  }

  ngOnInit(): void {
    this.mainService.loadCars(true);
  }

  loadMore(): void {
    this.mainService.loadCars();
  }

  loadList() {
    this.mainService.loadCars(true);
  }

}
