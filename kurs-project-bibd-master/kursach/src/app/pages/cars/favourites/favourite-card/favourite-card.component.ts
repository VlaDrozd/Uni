import { PricePipe } from 'src/app/core/pipes/price.pipe';
import { HttpParams } from '@angular/common/http';
import { urls } from 'src/app/core/static/urls';
import { HttpService } from 'src/app/core/services/http.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { OrderPopupComponent } from 'src/app/core/components/order-popup/order-popup.component';
@Component({
  selector: 'app-favourite-card',
  templateUrl: './favourite-card.component.html',
  styleUrls: ['./favourite-card.component.scss']
})
export class FavouriteCardComponent implements OnInit {

  @Input() item: any;
  @Output() onDelete: EventEmitter<string> = new EventEmitter<string>();
  public car;

  constructor(private dialig: MatDialog,private httpService: HttpService, private toastr: ToastrService) { }

  ngOnInit(): void {
    const params = new HttpParams().set('carId', this.item.carId)
    this.httpService.sendGet(urls.GET_CAR, null, params).subscribe((res: any) => {
      this.car = res.car;
    });
  }

  getImageUrl(photoUrl: string): string {
    return `${urls.GET_CAR_PHOTO}?path=${photoUrl}`;
  }

  deleteItem() {
    this.httpService.sendPost(urls.DELETE_FAVOURITE, false, {favId: this.item._id}).subscribe(res => {
      console.log(res);
      this.toastr.success("Success")
    });
    this.onDelete.emit('');
  }

  togglePopup() {
    const dialogRef = this.dialig.open(OrderPopupComponent, {
      data: { carId: this.car.id }
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res.phone && res.price) {
        const body = {
          price: res.price,
          phone: res.phone,
          carId: this.car.id
        }
        this.httpService.sendPost(urls.POST_ADD_ORDER, false, body).subscribe(res => {
          console.log(res);
          this.toastr.success("Success")
        });
      }
    });
  }

}
