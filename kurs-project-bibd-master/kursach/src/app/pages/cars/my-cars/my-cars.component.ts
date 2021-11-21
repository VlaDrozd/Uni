import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { urls } from 'src/app/core/static/urls';

@Component({
  selector: 'app-my-cars',
  templateUrl: './my-cars.component.html',
  styleUrls: ['./my-cars.component.scss']
})
export class MyCarsComponent implements OnInit {

  public list: any = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.httpService.sendGet(urls.GET_MY_CARS).subscribe((res: any) => {
      this.list = res.cars;
    })
  }

}
