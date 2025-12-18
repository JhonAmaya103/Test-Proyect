import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categoria, Juegos } from '../Servicios/categoria.model';
import { ListasService } from '../Servicios/listas.service';

@Component({
  selector: 'app-formu',
  templateUrl: './formu.component.html',
  styleUrls: ['./formu.component.css']
})
export class FormuComponent implements OnInit {

  nombreUsuario = 'Angular 14';
  idCategoria: number = 0;

  miFormulario!: FormGroup;
  categorias: Categoria[] = [];
  sugerencias: Juegos[] = [];

  // Resultados
  juegoEncontrado?: Juegos;
  juegosResultado: Juegos[] = [];

  constructor(
    private fb: FormBuilder,
    private listaService: ListasService
  ) {
    this.miFormulario = this.fb.group({
      categoria_juego: ['', Validators.required],
      nombre: ['']
    });
  }

  ngOnInit(): void {

    this.categorias = this.listaService.getCategorias();

    // Detecta cambio de categoría
    this.miFormulario.get('categoria_juego')?.valueChanges.subscribe(id => {
      this.idCategoria = Number(id);
      this.sugerencias = [];
      this.miFormulario.get('nombre')?.setValue('');
      console.log(Number(id))
    });

    // Autocompletado
    this.miFormulario.get('nombre')?.valueChanges.subscribe(valor => {

      if (!valor || !this.idCategoria) {
        this.sugerencias = [];
        return;
      }

      const texto = valor.toLowerCase();

      this.sugerencias = this.listaService
        .getJuegos()
        .filter(j =>
          j.categoriaId === this.idCategoria &&
          j.nombre.toLowerCase().includes(texto)
        );
    });
  }

  seleccionarJuego(juego: Juegos) {
    this.miFormulario.get('nombre')?.setValue(juego.nombre);
    this.sugerencias = [];
  }

  submitForm() {

    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    const { nombre } = this.miFormulario.value;

    this.juegoEncontrado = undefined;
    this.juegosResultado = [];

    // 1️⃣ Nombre + categoría
    if (nombre && nombre.trim() !== '') {
      const juego = this.listaService.getJuego(nombre, this.idCategoria);

      if (juego) {
        this.juegoEncontrado = juego;
        this.juegosResultado = [juego];
      }
      return;
    }

    // 2️⃣ Solo categoría
    this.juegosResultado = this.listaService
      .getJuegos()
      .filter(j => j.categoriaId === this.idCategoria);
  }
}
