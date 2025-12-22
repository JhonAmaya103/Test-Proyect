import { Component } from '@angular/core';
import { ListasService } from '../../Servicios/listas.service';
import { Categoria, Juegos } from '../../Servicios/categoria.model';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.css']
})
export class ListaCategoriasComponent {

  categorias: Categoria[] = [];
  juegos: Juegos[] = [];

  categoriaSeleccionada: number | null = null;
  juegosFiltrados: Juegos[] = [];
  mostrarJuegos = false;

  juegoSeleccionado: number | null = null;
  imagenSeleccionada: string | null = null;

  constructor(private listasService: ListasService) { }

  ngOnInit() {
    this.categorias = this.listasService.getCategorias();
    this.juegos = this.listasService.getJuegos();
  }

  filtrar() {
    this.mostrarJuegos = !this.mostrarJuegos;

    if (this.categoriaSeleccionada && this.mostrarJuegos) {
      this.juegosFiltrados = this.juegos.filter(
        j => j.categoriaId === this.categoriaSeleccionada
      );

    } else {
      this.juegosFiltrados = [];
    }

    this.juegoSeleccionado = null;
    this.imagenSeleccionada = null;
  }

  seleccionarJuego() {
    const juego = this.juegosFiltrados.find(j => j.id === this.juegoSeleccionado);
    this.imagenSeleccionada = juego ? juego.imagen : null;
  }
}

