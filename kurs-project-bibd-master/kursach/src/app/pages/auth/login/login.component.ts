import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() changeForm: EventEmitter<string> = new EventEmitter<string>();

  Form: FormGroup = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    }
  );

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.Form.valid) {
      const controls = this.Form.controls;
      this.authService.login(controls.email.value, controls.password.value);
    }
  }


}
