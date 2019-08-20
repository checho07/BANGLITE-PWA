
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatDividerModule,
  MatProgressSpinnerModule,  
  MatSnackBarModule,
  MatFormFieldModule,
  MatInputModule} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';
import { NgxUiLoaderModule} from 'ngx-ui-loader';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginDialogComponent } from './Modals/login-dialog/login-dialog.component';
import { RegisterDialogComponent } from './Modals/register-dialog/register-dialog.component';
import { AngularFireModule } from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from 'src/environments/environment';

  // PATHS
const routes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'slides', loadChildren: './slides/slides.module#SlidesModule'},
    { path: 'forms',loadChildren:'./reg-forms/reg-forms.module#RegFormsModule'}
  ];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginDialogComponent,
    RegisterDialogComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    RouterModule.forRoot(routes, {useHash: true}),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,    
    AngularFirestoreModule.enablePersistence(),
    FlexLayoutModule,
    FormsModule, ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    MatFormFieldModule,
    MatDividerModule,
    MatDialogModule,
    MatInputModule,
    MatProgressSpinnerModule,
    LayoutModule,
    NgxUiLoaderModule,
    
  ],
  providers: [],
  entryComponents: [LoginDialogComponent,RegisterDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
