import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlidesRoutingModule } from './slides-routing.module';
import { SlidesComponent } from './slides.component';

@NgModule({
  declarations: [SlidesComponent],
  imports: [
    CommonModule,
    SlidesRoutingModule
  ]
})
export class SlidesModule { }
