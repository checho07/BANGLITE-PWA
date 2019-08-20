import { Styleloginproperties } from './../interfaces/styleloginproperties';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import anime from 'animejs/lib/anime.es';
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from '../Modals/login-dialog/login-dialog.component';
import { RegisterDialogComponent } from '../Modals/register-dialog/register-dialog.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  private isOnScreen: any;
  spinner = SPINNER.squareJellyBox;
  styleproperties: Styleloginproperties = {left: '', position: '', width: '', height: '', translate: ''};
  btnLoginProperties: Styleloginproperties = {};
  btnRegisterProperties: Styleloginproperties = {};


  constructor(
    private ngxService: NgxUiLoaderService,
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog) {

    /**
     *     BREAKPOINTS
     * Medium --> IPAD PRO
     * Small --> Tablet
     * XSmall --> phones
     * WebLandscape --> web full open
     * TabletPortrait --> tablet ipad
     */
    breakpointObserver.observe([Breakpoints.XSmall]).subscribe(match =>   {
      if (match.matches) {
        // Phone
        this.setProperties({width: '100%', position: 'absolute', left: '0', translate: '-50%', height: 'auto'},
        {top: '50%', width: '45%'},
        {top: '60%', width: '45%'});
      }
    });
        // Tablet
    breakpointObserver.observe([Breakpoints.Small]).subscribe(match =>  {
      if (match.matches) { this.setProperties({width: '100%', position: 'absolute', left: '', translate: '-55%', height: 'auto'},
      {top: '50%', width: '40%'},
      {top: '65%', width: '40%'});
     }
    });
        // Web
    breakpointObserver.observe([Breakpoints.WebLandscape]).subscribe(match => {
      if (match.matches) { this.setProperties({width: '40%', position: 'relative', left: '30%', translate: '-55%', height: '2000px'},
      {top: '40%', width: '20%'},
      {top: '55%', width: '20%'});
     }
      });
   }

  ngOnInit() {

  }

  /**
   * Function to set properties to DOM elementes and launch first animations.
   * @param properties objet of properties to set to the main image
   * @param btnLogin  objet with properties to set the btnlogin in different screens
   * @param btnRegister objet with properties to set the btnRegister in different screens
   */
  setProperties(properties: Styleloginproperties, btnLogin: Styleloginproperties, btnRegister: Styleloginproperties) {
    this.styleproperties.width = properties.width;
    this.styleproperties.position = properties.position;
    this.styleproperties.left = properties.left;
    this.styleproperties.height = properties.height;
    this.btnLoginProperties.top = btnLogin.top;
    this.btnLoginProperties.width = btnLogin.width;
    this.btnRegisterProperties.top = btnRegister.top;
    this.btnRegisterProperties.width = btnRegister.width;

    this.ngxService.start();
    setTimeout(() => {
      this.ngxService.stop();
      anime({
        targets: '#principalimgDiv .el',
        translateY: [0, properties.translate],
        delay: 800,
        duration: 3000,
        easing: 'easeInOutSine'
      });
      anime({
        targets: '#divLogin , #divRegister',
        opacity: 1,
        delay: 3500,
        duration: 1500,
        easing: 'easeInOutSine'

      });

    }, 1000);
  }

  loginFn(ev: Event): void {
    ev.preventDefault();
    ev.stopPropagation();
    const dialogRef = this.dialog.open(LoginDialogComponent);
  }

  RegisterFn(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    const dialogRef = this.dialog.open(RegisterDialogComponent);
  }

}


