import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PricePipe } from './pipes/price.pipe';
import { OrderPopupComponent } from './components/order-popup/order-popup.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [HeaderComponent, NotFoundComponent, PricePipe, OrderPopupComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    ToastrModule.forRoot()
  ],
  exports: [
    HeaderComponent,
    PricePipe,
    OrderPopupComponent
  ],
  providers: [PricePipe]
})
export class CoreModule { }
