import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormuComponent } from '../formu/formu.component';

const routes: Routes = [
  // {
  //   path: '', redirectTo: '/inicio', pathMatch: 'full' 
  // },
  // {
  //   path: '',
  //   component: PruebaComponent
  // },
  {
    path: 'detalle',
    component: FormuComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleRoutingModule { }
