import { Component } from '@angular/core';
import { AuthSocialService } from '../../services/auth-social.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.css']
})
export class SocialLoginComponent {
  constructor(
    private readonly authSocialMediaService: AuthSocialService,
    private readonly router:Router,
    private readonly authService:AuthService
){}
signInWithGoogle() {
  this.authSocialMediaService
    .signInWithGoogle()
    .then((result) => {
      console.log('User signed in:', result.user);
      this.authService.login()
      this.router.navigate(['/private/user/news'])
    })
    .catch((error) => {
      console.error('Error signing in with Google:', error);
      });
  }
loginWithFacebook() {
  this.authSocialMediaService.signInWithFacebook()
    .then((result) => {
      console.log('Logged in with Facebook:', result);
      this.authService.login()
      this.router.navigate(['/private/user/news'])
    })
    .catch((error) => {
      console.error('Error logging in with Facebook:', error);
      });
  }
}
