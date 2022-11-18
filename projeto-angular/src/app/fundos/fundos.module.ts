import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { FundosRoutingModule } from './fundos-routing.module';
import { FundosComponent } from './fundos/fundos.component';


@NgModule({
  declarations: [
    FundosComponent
  ],
  imports: [
    CommonModule,
    FundosRoutingModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    FormsModule
  ]
})
export class FundosModule { }
