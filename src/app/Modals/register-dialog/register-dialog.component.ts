import { MatDialogRef } from '@angular/material';
import { AuthServiceService } from './../../Services/auth-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {
  error: string;
  RegisterForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder ,
    private authService:AuthServiceService,
    public dialogRef: MatDialogRef<RegisterDialogComponent>,
    private ngxService: NgxUiLoaderService
  ) {
    this.RegisterForm = this.formBuilder.group({
      name:['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password2:['',Validators.required]
    },{validator:this.checkPasswords});

   }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  checkPasswords(group: FormGroup) { 
    let pass = group.controls.password.value;
    let confirmPass = group.controls.password2.value;
  
      return pass === confirmPass ? true : { notSame: true }     
    };

    register(){
      this.authService.registerUser(this.RegisterForm.value,this.RegisterForm.controls.name.value)
      .then(()=>{
        this.RegisterForm.reset();
      }).catch(err=>{
        switch (err.code) {
          case 'auth/invalid-email':
          this.error ='Revisa el formato del correo.' 
          break;
            case 'auth/email-already-in-use':
            this.error ='Este correo ya se encuentra registrado'
            break;
           case 'auth/operation-not-allowed':
            this.error ='Este usuario se encuetra inactivo. '
            break;
          case 'auth/weak-password':
            this.error ='Esta contraseña no cumple con los requerimientos de seguridad .'
            break;        
          default:
            break;
        }
      })
    }

}
