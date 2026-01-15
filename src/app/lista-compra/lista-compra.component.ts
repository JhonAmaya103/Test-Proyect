import { Component, Input, OnInit } from '@angular/core';
import { Juegos } from '../Servicios/categoria.model';
import { ListasService } from '../Servicios/listas.service';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.component.html',
  styleUrls: ['./lista-compra.component.css']
})
export class ListaCompraComponent implements OnInit {

  @Input() idCategoria = 0;
  juegosCarrito: Juegos[] = [];
  total = 0;

  constructor(private listaService: ListasService) { }
  // Suscripción al observable del carrito de compras // 
  ngOnInit(): void {
    this.listaService.carrito$.subscribe(carrito => {

      // filtrar por categoría si aplica
      if (this.idCategoria > 0) {
        this.juegosCarrito = carrito.filter(
          juego => juego.categoriaId === this.idCategoria
        );
      } else {
        this.juegosCarrito = carrito;
      }

      this.calcularTotal();
    });
  }

  // Método para calcular el total del carrito
  calcularTotal(): void {
    this.total = this.juegosCarrito.reduce(
      (suma, juego) => suma + juego.precio,
      0
    );
  }
  //metodo para eliminar del carrito
  eliminarDelCarrito(juegoId: number): void {
    const index = this.juegosCarrito.findIndex(juego => juego.id === juegoId);
    if (index !== -1) {
      this.juegosCarrito.splice(index, 1);
      this.calcularTotal();
    }
  }
}
