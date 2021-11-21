import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { data } from 'src/assets/carbrands';
import { AddCarService } from '../add-car.service';
import { PricePipe } from '../../../core/pipes/price.pipe';
@Component({
  selector: 'app-add-car-form',
  templateUrl: './add-car-form.component.html',
  styleUrls: ['./add-car-form.component.scss']
})
export class AddCarFormComponent implements OnInit {

  fileToUpload: File = null;
  carBrands = data;
  isSended = false;

  constructor(private addCarService: AddCarService, private pricePipe: PricePipe) {
  }

  Form: FormGroup = new FormGroup(
    {
      concern: new FormControl('', [Validators.required]),
      model: new FormControl('', [Validators.required]),
      fuel: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
      mileage: new FormControl('', [Validators.required]),
      info: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
    }
  );

  ngOnInit(): void {
  }

  handleFileInput(files: FileList): void {
    this.fileToUpload = files.item(0);
  }
  getYears(): string[] {
    let year = new Date().getFullYear();
    const years = [];
    for (; year > 1885; year--) {
      years.push(year);
    }
    return years;
  }

  sendForm(): void {
    console.log(this.Form.controls.price.value);
    if (this.Form.valid) {
      const controls = this.Form.controls;
      this.addCarService.addCar(controls, this.fileToUpload);
    }
    this.isSended = true;
  }

}
