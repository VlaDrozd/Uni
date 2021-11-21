import { HttpService } from 'src/app/core/services/http.service';
import { OrderPopupComponent } from './../../../../core/components/order-popup/order-popup.component';
import { CarListItem } from 'src/app/core/interfaces/CarsLlist.interface';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { urls } from 'src/app/core/static/urls';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() car: CarListItem;
  @Output() onDelete: EventEmitter<string> = new EventEmitter<string>();
  isShowOrder: boolean = false;
  public isDeleted: boolean = false;

  constructor(private dialig: MatDialog, private HttpService: HttpService, private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  isAuth() {
    return this.authService.isAuth.value;
  }

  isAdmin() {
    return this.authService.isAdmin.value;
  }

  getImageUrl(photoUrl: string): string {
    return `${urls.GET_CAR_PHOTO}?path=${photoUrl}`;
  }

  addToFavourites(): void {
    this.HttpService.sendPost(urls.POST_ADD_FAVOURITE, false, { carId: this.car.id }).subscribe(res => {
      console.log(res);
      this.toastr.success("Success")
    });
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
        this.HttpService.sendPost(urls.POST_ADD_ORDER, false, body).subscribe(res => {
          console.log(res);
          this.toastr.success("Success")
        });
      }
    });
  }

  deleteItem() {
    this.HttpService.sendPost(urls.DELETE_CAR, false, {carId: this.car.id}).subscribe(res => {
      console.log(res);
      this.toastr.success("Success")
      this.onDelete.emit('');
    });
  }

}
