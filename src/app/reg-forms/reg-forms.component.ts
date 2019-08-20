import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Styleloginproperties } from '../interfaces/styleloginproperties';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';

@Component({
  selector: 'app-reg-forms',
  templateUrl: './reg-forms.component.html',
  styleUrls: ['./reg-forms.component.css']
})
export class RegFormsComponent implements OnInit {
  styleproperties: Styleloginproperties = {left: '', position: '', width: '', height: '', translate: ''};
  spinner = SPINNER.squareJellyBox;
  constructor(
    private ngxService: NgxUiLoaderService,
    private breakpointObserver: BreakpointObserver
  ) { 

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
        this.setProperties({width: '100%', position: 'absolute', left: '0', translate: '-50%', height: '100%'},
        );
      }
    });
        // Tablet
    breakpointObserver.observe([Breakpoints.Small]).subscribe(match =>  {
      if (match.matches) { this.setProperties({width: '100%', position: 'absolute', left: '', translate: '-55%', height: 'auto'},
      );
     }
    });
        // Web
    breakpointObserver.observe([Breakpoints.WebLandscape]).subscribe(match => {
      if (match.matches) { this.setProperties({width: '40%', position: 'relative', left: '30%', translate: '-55%', height: '100%',top:'-100px'},
      );
     }
      });
   };

   
  ngOnInit() {
  }
   setProperties(properties: Styleloginproperties, ) {
    this.styleproperties.width = properties.width;
    this.styleproperties.position = properties.position;
    this.styleproperties.left = properties.left;
    this.styleproperties.height = properties.height;
    this.styleproperties.top = properties.top;

    this.ngxService.start();
    setTimeout(() => {
      this.ngxService.stop();   

    }, 1000);
  }
  


}
