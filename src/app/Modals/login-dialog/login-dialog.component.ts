import { SPINNER, NgxUiLoaderService } from 'ngx-ui-loader';
import { AuthServiceService } from './../../Services/auth-service.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { loginData } from 'src/app/interfaces/loginData';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {
  hide = true;
  showRecoveryPass = false;
  error: string;
  loginForm: FormGroup;
  recoverEmail:string;
  constructor(
    private formBuilder: FormBuilder ,
    private authService:AuthServiceService,
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    private _snackBar: MatSnackBar,
    private ngxService: NgxUiLoaderService,
    @Inject(MAT_DIALOG_DATA) public data: loginData)
     {

      const emailPattern = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$';
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.pattern(emailPattern)]],
        password: ['', Validators.required],
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  login(e:Event) {
    e.preventDefault();
    e.stopPropagation();
    this.ngxService.start();
    this.authService.signIn(this.loginForm.value).then(res=>{
      console.log(res)
      this.ngxService.stop();
    }).catch(err=>{
      this.ngxService.stop();
      switch (err.code) {
        case 'auth/invalid-email':
         this.error='Revisa el formato del correo ejemplo@dominio.com'
         break;
        case 'auth/user-disabled':
         this.error='Este usuario esta suspendido.'
         break;
         case 'auth/user-not-found':
         this.error='No encontramos este usuario en nuestros registros. '
         break;
         case 'auth/wrong-password':
         this.error='La contraseña escrita es incorrecta. '
         break;
     
       default:
         break;
     }
      
    })
  };

  recoverPass(){
    this.ngxService.start()
    
    this.authService.forgotPassword(this.recoverEmail)
    .then(res=>{
      this,this.ngxService.stop()
      this._snackBar.open('Revisa el correo para cambiar tu contraseña.','ok')
      this.error = '';
      this.showRecoveryPass = false;
    }).catch(error=>{
      this,this.ngxService.stop()
      switch (error.code) {
        case 'auth/invalid-email':
          this.error = 'El correo no tiene el formato correcto.'
          break;
        case 'auth/user-not-found':
          this.error = 'Este usuario no existe en nuestros registros.'
          break;
        default:
          break;
      }
    })
  }

}
