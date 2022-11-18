import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundosComponent } from './fundos/fundos.component';

const routes: Routes = [
  { path: '', component: FundosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundosRoutingModule { }
