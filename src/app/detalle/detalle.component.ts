import { Component, Input, OnChanges } from '@angular/core';
import { Juegos } from '../Servicios/categoria.model';
import { ListasService } from '../Servicios/listas.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnChanges {

  @Input() idCategoria = 0;
  @Input() textoBusqueda = '';

  juegosCategoria: Juegos[] = [];

  constructor(private listaService: ListasService) { }

  ngOnChanges(): void {

    const texto = this.textoBusqueda?.toLowerCase().trim();

    // Mostrar todos los juegos al inicio
    let juegos = this.listaService.getJuegos();

    // filtro por categoria (si no es 0)
    if (this.idCategoria > 0) {
      juegos = juegos.filter(
        j => j.categoriaId === this.idCategoria
      );
      console.log('idCategoria', this.idCategoria)
    }

    // Filtro por texto (si hay texto válido)
    if (texto && texto.length >= 2) {
      juegos = juegos.filter(j =>
        j.nombre.toLowerCase().includes(texto) ||
        j.descripcion.toLowerCase().includes(texto)
      );
    }

    this.juegosCategoria = juegos;
  }
}
