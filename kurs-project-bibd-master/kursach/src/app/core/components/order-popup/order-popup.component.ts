import { urls } from 'src/app/core/static/urls';
import { HttpService } from './../../services/http.service';
import { Component, Input, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-order-popup',
  templateUrl: './order-popup.component.html',
  styleUrls: ['./order-popup.component.scss']
})
export class OrderPopupComponent implements OnInit {

  @Output() onClose: EventEmitter<string> = new EventEmitter();
  public inputs = {
    phone: '',
    price: 0
  }

  constructor(private HttpService: HttpService, @Inject(MAT_DIALOG_DATA) public data: {carId: string}) { }

  ngOnInit(): void {
  }

  // sendOrder() {
  //   console.log('order');

  //   if(this.phone && this.price) {
  //     console.log(this.data.carId);
  //     const body = {
  //       price: this.price,
  //       phone: this.phone,
  //       carId: this.data.carId
  //     }
  //     this.HttpService.sendPost(urls.POST_ADD_ORDER, false, body).subscribe(res => {
  //       console.log(res);
  //     });
  //   }
  // }

  close() {
    this.onClose.emit('');
  }

}
