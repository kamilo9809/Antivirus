import { Component, AfterViewInit, Renderer2, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './services/register.service';
import { registerResponse } from 'src/interfaces/user.interface';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.css'],
})
export class FormSectionComponent implements AfterViewInit {
  public formSession: FormGroup;
  public confirmPassword = '';

  constructor(
    private readonly renderer: Renderer2,
    private readonly el: ElementRef,
    private readonly fb: FormBuilder,
    private readonly rs: RegisterService
  ) {
    this.formSession = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      dateBirth: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(
            /^(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?=.*[0-9a-zA-Z]).{6,}$/
          ),
        ],
      ],
    });
  }

  ngAfterViewInit(): void {
    this.removeSplineLogo();
  }

  private removeSplineLogo(): void {
    const splineViewer = this.el.nativeElement.querySelector('spline-viewer');

    if (splineViewer) {
      const interval = setInterval(() => {
        const shadowRoot = splineViewer.shadowRoot;
        const logoElement = shadowRoot?.querySelector('#logo');

        if (logoElement) {
          this.renderer.removeChild(shadowRoot, logoElement);
          clearInterval(interval); // Detén la verificación una vez que el logo se haya eliminado
        }
      }, 500); // Verifica cada 500ms
    }
  }

  onSubmit(): void {
    if (this.formSession.valid) {
      if (this.formSession.value.password == this.confirmPassword) {
        console.log('Formulario enviado:', this.formSession.value);
        this.rs.registerUser(this.formSession.value).subscribe({
          next: (response: registerResponse) => {
            const message = response.message;
            alert(message)
            this.formSession.reset()
            this.confirmPassword=''            
          },
          error: (e: object) => {
            console.log('se ha generado un error', e);
          },
        });
      } else {
        console.log('porfavor confirme el password', this.confirmPassword);
        alert('las contraseñas no coinciden verifiquelas');
      }
    }
  }
}
