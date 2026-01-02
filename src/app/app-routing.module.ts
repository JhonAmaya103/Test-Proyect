import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCompraComponent } from './lista-compra/lista-compra.component';


const routes: Routes = [
  // Ruta para el componente ListaCompra
  {
    path: 'lista-compra',
    component: ListaCompraComponent
  },
  // Ruta para el módulo Detalle 
  {
    path: 'detalle',
    loadChildren: () => import('./detalle/detalle.module').then(m => m.DetalleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


