import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VerificationComponent } from './verification/verification.component';
import { AgentSoaComponent } from './agent-soa/agent-soa.component';
import { SignSoaFormComponent } from './sign-soa-form/sign-soa-form.component';


const appRoutes: Routes = [
  { path: '', component: VerificationComponent },
  { path: 'agent-soa', component:AgentSoaComponent },
  { path: 'soa-form', component:SignSoaFormComponent}
];

@NgModule({
  imports:      [ 
    BrowserModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes,
      { enableTracing: true }
      )
  ],
  declarations: [ 
    AppComponent, 
    HeaderComponent, VerificationComponent, AgentSoaComponent, SignSoaFormComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
