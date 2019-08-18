import { Styleloginproperties } from './../interfaces/styleloginproperties';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import anime from 'animejs/lib/anime.es';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  private isOnScreen: any;
  spinner = SPINNER.squareJellyBox
  styleproperties: Styleloginproperties = {left: '', position: '', width: '', height: '', translate: ''};
  btnLoginProperties:Styleloginproperties = {};
  btnRegisterProperties:Styleloginproperties = {};


  constructor(private ngxService: NgxUiLoaderService,private breakpointObserver: BreakpointObserver) {    

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
        this.setProperties({width: '100%', position: 'absolute', left: '0', translate: '-50%', height: 'auto'},
        {top:'50%',width:'45%'},
        {top:'60%',width:'45%'}); 
      }
    });
    breakpointObserver.observe([Breakpoints.Small]).subscribe(match =>  {
      if (match.matches) { this.setProperties({width: '100%', position: 'absolute', left: '0', translate: '-55%', height: 'auto'},
      {top:'50%',width:'40%'},
      {top:'65%',width:'40%'});
     }
    });
    breakpointObserver.observe([Breakpoints.WebLandscape]).subscribe(match => {
      if (match.matches) { this.setProperties({width: '40%', position: 'relative', left: '30%', translate: '-55%', height: '2000px'},
      {top:'40%',width:'20%'},
      {top:'55%',width:'20%'});
     }
      });
   }

  ngOnInit() {

  }

  setProperties(properties: Styleloginproperties,btnLogin:Styleloginproperties,btnRegister:Styleloginproperties) {
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
        targets:'#divLogin .el',
        opacity:1,
        
        // translateX:-150
      })

    }, 1000);

   
  }

}
