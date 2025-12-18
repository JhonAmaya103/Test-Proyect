import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Juegos } from '../Servicios/categoria.model';
import { ListasService } from '../Servicios/listas.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnChanges {

  @Input() idCategoria: number = 0;

  juegosCategoria: Juegos[] = [];

  constructor(private listaService: ListasService) {}

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['idCategoria'] && this.idCategoria > 0) {
      this.cargarJuegosPorCategoria(this.idCategoria);
    }
  }

  private cargarJuegosPorCategoria(categoriaId: number): void {
    this.juegosCategoria = this.listaService
      .getJuegos()
      .filter(j => j.categoriaId === categoriaId);

    console.log('ID categoría recibido:', categoriaId);
    console.log('Juegos heredados:', this.juegosCategoria);
  }
}
