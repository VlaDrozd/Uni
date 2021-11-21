import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CarListItem } from 'src/app/core/interfaces/CarsLlist.interface';
import { HttpService } from 'src/app/core/services/http.service';
import { urls } from 'src/app/core/static/urls';

@Injectable()
export class MainService {

  private carsList: BehaviorSubject<CarListItem[]> = new BehaviorSubject<CarListItem[]>([]);
  private filters: BehaviorSubject<any> = new BehaviorSubject<any>({
    concern: '',
    fuel: '',
    minYear: '',
    maxYear: '',
    minMileage: '',
    maxMileage: '',
    minPrice: '',
    maxPrice: ''
  });

  constructor(private httpService: HttpService) {
  }

  loadCars(reset = false): void {
    if (reset === true) {
      this.carsList.next([]);
    }
    console.log(this.filters.value);
    const params = new HttpParams()
      .set('offset', this.carsList.value.length.toString() ?? '')
      .set('concern', this.filters.value.concern ?? '')
      .set('fuel', this.filters.value.fuel ?? '')
      .set('minYear', this.filters.value.minYear ?? '')
      .set('maxYear', this.filters.value.maxYear ?? '')
      .set('minMileage', this.filters.value.minMileage ?? '')
      .set('maxMileage', this.filters.value.maxMileage ?? '')
      .set('minPrice', this.filters.value.minPrice ?? '')
      .set('maxPrice', this.filters.value.maxPrice ?? '');
    this.httpService.sendGet<{ cars: CarListItem[] }>(urls.GET_CARS_LIST, null, params)
      .subscribe(res => {
        this.carsList.next([...this.carsList.value, ...res.cars]);
      });
  }

  addFilters(filters): void {
    this.filters.next(filters);
    this.loadCars(true);
  }


  getList(): BehaviorSubject<any[]> {
    return this.carsList;
  }

}
