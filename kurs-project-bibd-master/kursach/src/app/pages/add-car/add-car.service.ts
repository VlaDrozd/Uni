import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { urls } from 'src/app/core/static/urls';

@Injectable()
export class AddCarService {

  constructor(private httpService: HttpService, private toastr: ToastrService) { }

  addCar(controlls: any, photo: File): void {
    const formData: FormData = new FormData();
    formData.append('concern', controlls.concern.value);
    formData.append('model', controlls.model.value);
    formData.append('fuel', controlls.fuel.value);
    formData.append('year', controlls.year.value);
    formData.append('mileage', controlls.mileage.value);
    formData.append('info', controlls.info.value);
    formData.append('price', controlls.price.value);
    formData.append('photo', photo, photo.name);

    this.httpService.sendPost(urls.POST_ADD_NEW_CAR, true, formData, null, null).subscribe(res => this.toastr.success("Success"));
  }
}
