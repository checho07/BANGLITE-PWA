import { loginData } from 'src/app/interfaces/loginData';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase";
import { userData } from '../interfaces/userData';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  public authState: AngularFireAuth;

  userData:userData ={name:'',uid:''};
  constructor(
    public afAuth: AngularFireAuth,
    private router:Router
  ) { 
    this.afAuth.authState.subscribe((user: firebase.User) => {
      if (user) {        
        this.userData.uid = user.uid;        
        user.updateProfile({displayName:this.userData.name})
        localStorage.setItem('userData',JSON.stringify(this.userData))
        this.router.navigateByUrl('forms');
      } else {
        this.userData.uid = null;
      }
    });
  };

  signIn(userData:loginData) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(userData.email, userData.password).then(res =>{
        return res;        
      }).catch(error =>{
        throw error   
       })
   
  };

  registerUser(userData:loginData,name:string) {
    this.userData.name = name;
    return this.afAuth.auth
      .createUserWithEmailAndPassword(userData.email, userData.password)
      .then(res => {   
      
          return res;    
        
      })
      .catch(error => {        
        throw error;
      });
  };

  forgotPassword(email) {
    return firebase
      .app()
      .auth()
      .sendPasswordResetEmail(email)
      .then(res =>{
        return res;
      })
      .catch(error => {
        throw error;     
      
      });
  }

  signOut(): void {
    firebase.auth().signOut();
  }
}
