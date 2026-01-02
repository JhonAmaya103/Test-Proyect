import { Component, OnInit } from '@angular/core';
import { ListasService } from '../Servicios/listas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  cantidadCarrito = 0;

  constructor(private listaService: ListasService) { }

  //
  ngOnInit(): void {
    this.listaService.cantidadCarrito$
      .subscribe(cantidad => {
        this.cantidadCarrito = cantidad;
      });
  }
}
