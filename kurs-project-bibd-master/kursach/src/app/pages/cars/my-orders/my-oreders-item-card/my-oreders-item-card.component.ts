import { PricePipe } from 'src/app/core/pipes/price.pipe';
import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/core/services/http.service';
import { urls } from 'src/app/core/static/urls';

@Component({
  selector: 'app-my-oreders-item-card',
  templateUrl: './my-oreders-item-card.component.html',
  styleUrls: ['./my-oreders-item-card.component.scss']
})
export class MyOredersItemCardComponent implements OnInit {

  @Input() order;
  @Output() onDelete: EventEmitter<string> = new EventEmitter<string>();
  public car;

  constructor(private httpService: HttpService, private toastr: ToastrService) { }

  ngOnInit(): void {
    const params = new HttpParams().set('carId', this.order.carId)
    this.httpService.sendGet(urls.GET_CAR, null, params).subscribe((res: any) => {
      this.car = res.car;
    });
  }

  getImageUrl(photoUrl: string): string {
    return `${urls.GET_CAR_PHOTO}?path=${photoUrl}`;
  }

  deleteItem() {
    this.httpService.sendPost(urls.DELETE_ORDER, false, {orderId: this.order._id}).subscribe(res => {
      console.log(res);
      this.toastr.success("Success")
    });
    this.onDelete.emit('');
  }

}
