import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VerificationComponent } from './verification/verification.component';
import { AgentSoaComponent } from './agent-soa/agent-soa.component';

const routes: Routes = [
  { path: '', component: VerificationComponent },
  { path: 'agent-soa', component:AgentSoaComponent },
  { path:  '', redirectTo:  'contacts', pathMatch:  'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }