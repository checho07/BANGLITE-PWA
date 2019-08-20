import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegFormsComponent } from './reg-forms.component';

const routes: Routes = [{
  path:'',
  component:RegFormsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegFormsRoutingModule { }
