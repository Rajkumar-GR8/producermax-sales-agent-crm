import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { VerificationComponent } from './verification/verification.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HelloComponent },
    ])
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    HeaderComponent, VerificationComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
