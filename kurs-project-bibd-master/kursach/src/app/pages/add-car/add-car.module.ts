import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCarComponent } from './addcar.component';
import { AddCarFormComponent } from './add-car-form/add-car-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCarService } from './add-car.service';
import { CoreModule } from 'src/app/core/core.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';



@NgModule({
  declarations: [AddCarComponent, AddCarFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSliderModule
  ],
  providers: [AddCarService],
  exports: [AddCarComponent]
})
export class AddCarModule { }
