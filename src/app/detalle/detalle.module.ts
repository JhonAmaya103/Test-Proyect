import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetalleRoutingModule } from './detalle-routing.module';
import { ListaCategoriasComponent } from './lista-categorias/lista-categorias.component';



@NgModule({
  declarations: [
    ListaCategoriasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DetalleRoutingModule
  ]
})
export class DetalleModule { }
