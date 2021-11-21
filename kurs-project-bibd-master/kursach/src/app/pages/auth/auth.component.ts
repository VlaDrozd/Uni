import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscriber, Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  currentForm: BehaviorSubject<string> = new BehaviorSubject<string>('login');
  subscription: Subscription;

  constructor(public authService: AuthService, private activateRoute: ActivatedRoute) {
    this.subscription = activateRoute.queryParams.subscribe(params => {
      this.currentForm.next(params.form);
    });
  }

  ngOnInit(): void {
  }

  register(): void {
    this.authService.register('test@gmail.com', '12345678', 'Name', 'Surname');
  }

  login(): void {
    this.authService.login('test@gmail.com', '12345678');
  }

  logout(): void {
    this.authService.logout();
  }

  checkAdmin(): void {
    this.authService.checkAdmin().subscribe(res => console.log(res));
  }

}
