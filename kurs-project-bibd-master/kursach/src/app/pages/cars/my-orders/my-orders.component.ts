import { PricePipe } from 'src/app/core/pipes/price.pipe';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { urls } from 'src/app/core/static/urls';
@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  public list: any = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.httpService.sendGet(urls.GET_ORDERS_LIST).subscribe((res: any) => {
      this.list = res.list;
    })
  }

}
