import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegFormsRoutingModule } from './reg-forms-routing.module';
import { RegFormsComponent } from './reg-forms.component';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [RegFormsComponent],
  imports: [
    CommonModule,
    RegFormsRoutingModule,
    NgxUiLoaderModule,
    MatFormFieldModule,MatIconModule,
    MatInputModule,MatCardModule
  ]
})
export class RegFormsModule { }
