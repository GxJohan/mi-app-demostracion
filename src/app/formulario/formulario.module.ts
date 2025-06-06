// src/app/formulario/formulario.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { FormularioComponent } from '../formulario/formulario/formulario.component';

@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [
    CommonModule,
    FormularioRoutingModule
  ]
})
export class FormularioModule { }