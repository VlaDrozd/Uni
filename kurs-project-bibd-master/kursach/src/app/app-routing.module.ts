import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AddCarComponent } from './pages/add-car/addcar.component';
import { AuthComponent } from './pages/auth/auth.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'auth', component: AuthComponent},
  {path: '404', component: NotFoundComponent},
  {path: 'addCar', component: AddCarComponent},
  { path: 'cars', loadChildren: () => import('./pages/cars/cars.module').then(m => m.CarsModule) },
  {path: '**', redirectTo: '404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
