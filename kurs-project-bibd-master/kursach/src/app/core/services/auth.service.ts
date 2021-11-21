import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { Credits } from '../interfaces/Credits.interface';
import { urls } from '../static/urls';
import { HttpService } from './http.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuth: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isAdmin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private httpService: HttpService, private router: Router, private toastr: ToastrService) {
    const creds = this.getCredits();
    this.setCredits(creds);
  }

  login(email: string, password: string): void {
    const status: Observable<string> = new Observable<string>();
    const body = {
      email,
      password
    };
    this.httpService.sendPost<{ token: string, isAdmin: boolean }>(urls.POST_LOGIN, false, body).subscribe((res) => {
      if (res) {
        const creds: Credits = { token: res.token, isAdmin: res.isAdmin };
        this.setCredits(creds);
      }
      this.toastr.success('Success!');
      this.router.navigate(['main']);
    });
  }

  register(email: string, password: string, name: string, surname: string): void {
    const body = {
      email,
      password,
      name,
      surname
    };
    this.httpService.sendPost(urls.POST_REGISTER, false, body).subscribe((res) => {
      this.toastr.success('Success!');
      this.router.navigate(['auth'], {
        queryParams: {form: 'login'}
      });
    });
  }

  logout(): void {
    this.setCredits(null);
  }

  checkAdmin(): Observable<any> {
    return this.httpService.sendGet<any>(urls.GET_IS_ADMIN);
  }

  setCredits(creds?: Credits): void {
    if (!creds) {
      localStorage.removeItem('credits');
      this.isAuth.next(false);
      this.isAdmin.next(false);
    } else {
      localStorage.setItem('credits', JSON.stringify(creds));
      this.isAuth.next(!!creds.token);
      this.isAdmin.next(!!creds.isAdmin);
    }
  }

  getCredits(): Credits {
    const creds = localStorage.getItem('credits');
    return !!creds ? JSON.parse(creds) : null;
  }
}
