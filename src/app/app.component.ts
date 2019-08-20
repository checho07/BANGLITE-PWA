import { AuthServiceService } from './Services/auth-service.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BangLite';

  constructor( private authService: AuthServiceService) {
    // this.authService.afAuth.authState.subscribe((user: firebase.User) => {
    //   if(user){
        
    //   }
    // })
  }

}
