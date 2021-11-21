import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { FilterComponent } from './filter/filter.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import { CoreModule } from 'src/app/core/core.module';
import { MainService } from './main.service';
import { FormsModule } from '@angular/forms';
import { PricePipe } from 'src/app/core/pipes/price.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [MainComponent, FilterComponent, ListComponent, ListItemComponent],
  imports: [
    FormsModule,
    CommonModule,
    CoreModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatIconModule
  ],
  exports: [
    MainComponent
  ],
  providers: [
    MainService,
    PricePipe
  ]
})
export class MainModule { }
