// src/app/tabla/tabla.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablaRoutingModule } from './tabla-routing.module';
import { TablaComponent } from '../tabla/tabla/tabla.component';

@NgModule({
  declarations: [
    TablaComponent
  ],
  imports: [
    CommonModule,
    TablaRoutingModule
  ]
})
export class TablaModule { }