import { Component } from '@angular/core';
import { HttpLoginService } from '../../services/http-login.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  email = '';
  password = '';

  constructor(
    private readonly httpLoginService: HttpLoginService,
    private readonly router:Router,  
    private readonly authService:AuthService
  ) {}

  login() {
    this.httpLoginService.authenticate(this.email, this.password).subscribe({
      next: (res:any) => {
        console.log(res);
        const token = res.token
        sessionStorage.setItem("token",token);
        if (res.role[0].id == 2) {
          this.router.navigate(['/private/admin/config'])
          this.authService.login()
        }else{
         this.router.navigate(["/private/user/news"])
         this.authService.login()
        }
      },
      error: (error) => {
        this.authService.logOut()
        console.log(error);
      },
    });
  }
}
