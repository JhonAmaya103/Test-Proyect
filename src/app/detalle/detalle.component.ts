import { Component, Input } from '@angular/core';
import { Juegos } from '../Servicios/categoria.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {

  @Input() juegosCategoria: Juegos[] = [];

}
