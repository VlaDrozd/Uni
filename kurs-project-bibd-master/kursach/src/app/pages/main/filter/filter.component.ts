import { Component, OnInit } from '@angular/core';
import { data } from 'src/assets/carbrands';
import { PricePipe } from '../../../core/pipes/price.pipe';
import { MainService } from '../main.service';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  carBrands = data;

  filters: any = {
    concern: '',
    fuel: '',
    minYear: '',
    maxYear: '',
    minMileage: '',
    maxMileage: '',
    minPrice: '',
    maxPrice: '',
  };

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
  }

  getYears(): string[] {
    let year = new Date().getFullYear();
    const years = [];
    for (; year > 1885; year--) {
      years.push(year);
    }
    return years;
  }

  addFilters(): void {
    this.mainService.addFilters(this.filters);
  }

}
