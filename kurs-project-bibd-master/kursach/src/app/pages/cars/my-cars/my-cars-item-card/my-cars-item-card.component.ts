import { PricePipe } from 'src/app/core/pipes/price.pipe';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/core/services/http.service';
import { urls } from 'src/app/core/static/urls';

@Component({
  selector: 'app-my-cars-item-card',
  templateUrl: './my-cars-item-card.component.html',
  styleUrls: ['./my-cars-item-card.component.scss']
})
export class MyCarsItemCardComponent implements OnInit {

  @Input() car;
  @Output() onDelete: EventEmitter<string> = new EventEmitter<string>();
  constructor(private httpService: HttpService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  getImageUrl(photoUrl: string): string {
    return `${urls.GET_CAR_PHOTO}?path=${photoUrl}`;
  }

  deleteItem() {
    this.httpService.sendPost(urls.DELETE_CAR, false, {carId: this.car._id}).subscribe(res => {
      console.log(res);
      this.toastr.success("Success")
    });
    this.onDelete.emit('');
  }

}
