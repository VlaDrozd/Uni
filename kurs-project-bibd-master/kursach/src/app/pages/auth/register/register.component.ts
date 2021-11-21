import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output() changeForm: EventEmitter<string> = new EventEmitter<string>();

  Form: FormGroup = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirm: new FormControl('', [Validators.required, Validators.minLength(8)]),
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required])
    }
  );

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.Form.valid) {
      const controls = this.Form.controls;
      this.authService.register(
        controls.email.value,
        controls.password.value,
        controls.name.value,
        controls.surname.value
      );
    }
  }

  checkConfirm(): boolean {
    return this.Form.controls.password.touched && this.Form.controls.confirm.touched &&
      this.Form.controls.password.value === this.Form.controls.confirm.value;
  }

}
