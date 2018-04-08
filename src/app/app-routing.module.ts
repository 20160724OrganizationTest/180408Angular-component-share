import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParentComponent } from './parent/parent.component';
import { Chaild01Component } from './parent/chaild01/chaild01.component';

const routes: Routes = [
  { path: '', component: ParentComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
