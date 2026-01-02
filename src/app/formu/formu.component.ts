import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Categoria, Juegos } from '../Servicios/categoria.model';
import { ListasService } from '../Servicios/listas.service';

@Component({
  selector: 'app-formu',
  templateUrl: './formu.component.html',
  styleUrls: ['./formu.component.css']
})
export class FormuComponent implements OnInit {

  miFormulario!: FormGroup;
  categorias: Categoria[] = [];
  sugerencias: Juegos[] = [];

  // TODOS LOS JUEGOS
  idCategoria: number = 0;

  constructor(
    private fb: FormBuilder,
    private listaService: ListasService
  ) {
    this.miFormulario = this.fb.group({
      categoria_juego: [''],
      nombre: ['']
    });
  }

  ngOnInit(): void {

    this.categorias = this.listaService.getCategorias();

    this.miFormulario.valueChanges.subscribe(({ categoria_juego, nombre }) => {

      const texto = nombre?.toLowerCase().trim();
      const categoriaId = Number(categoria_juego);

      /* MOSTRAR TODOS LOS JUEGOS*/

      if (!categoria_juego) {
        this.idCategoria = 0;
        this.sugerencias = [];
        return;
      }

      // Filtro de categoria 
      this.idCategoria = categoriaId;

      // Autocompletado
      if (texto && texto.length >= 2) {
        this.sugerencias = this.listaService
          .getJuegos()
          .filter(j =>
            j.categoriaId === categoriaId &&
            j.nombre.toLowerCase().includes(texto)
          );
      } else {
        this.sugerencias = [];
      }
    });
  }

  seleccionarJuego(juego: Juegos) {
    this.miFormulario.get('nombre')?.setValue(juego.nombre);
    this.sugerencias = [];
  }
}
