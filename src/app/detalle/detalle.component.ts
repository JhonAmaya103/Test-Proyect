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

    // Filtro 
    if (!this.idCategoria && (!texto || texto.length < 3)) {
      this.juegosCategoria = [];
      return;
    }

    this.juegosCategoria = this.listaService.getJuegos().filter(j => {

      const coincideCategoria =
        this.idCategoria ? j.categoriaId === this.idCategoria : true;

      const coincideTexto =
        texto && texto.length >= 3
          ? j.nombre.toLowerCase().includes(texto)
          : true;

      return coincideCategoria && coincideTexto;
    });
  }
}
