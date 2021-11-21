import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuth = false;

  constructor(private router: Router, public authService: AuthService) {
    authService.isAuth.subscribe(value => {
      this.isAuth = value;
    });
  }

  ngOnInit(): void {
  }

  openAuth(action: string): void {
    this.router.navigate(['auth'], {
      queryParams: {
        form: action
      }
    });
  }

  openAddCar() {
    this.router.navigate(['addCar']);
  }

  openCars() {
    this.router.navigate(['cars'])
  }

  logout(): void {
    this.authService.logout();
  }

  titleClick(): void {
    this.router.navigate(['main']);
  }

}
