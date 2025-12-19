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
  juegosResultado: Juegos[] = [];

  miFormulario!: FormGroup;
  categorias: Categoria[] = [];
  sugerencias: Juegos[] = [];

  // Resultados
  juegoEncontrado?: Juegos;

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

  // 🔹 Autocompletado por nombre + categoría
  this.miFormulario.get('nombre')?.valueChanges.subscribe(valor => {

    const categoriaId = Number(this.miFormulario.get('categoria_juego')?.value);

    if (!valor || !categoriaId) {
      this.sugerencias = [];
      return;
    }

    const texto = valor.toLowerCase();

    this.sugerencias = this.listaService
      .getJuegos()
      .filter(j =>
        j.categoriaId === categoriaId &&
        j.nombre.toLowerCase().includes(texto)
      );
  });
}


  seleccionarJuego(juego: Juegos) {
    this.miFormulario.get('nombre')?.setValue(juego.nombre);
    this.sugerencias = [];
  }

  submitForm() {

  console.log('Submit ejecutado');

  if (this.miFormulario.invalid) {
    return;
  }

  const { nombre, categoria_juego } = this.miFormulario.value;

  const categoriaId = Number(categoria_juego);

  console.log('Categoría:', categoriaId);
  console.log('Nombre:', nombre);

  this.juegosResultado = [];

  // 🔹 CON NOMBRE → SOLO ESE JUEGO
  if (nombre && nombre.trim() !== '') {

    const juego = this.listaService.getJuego(nombre, categoriaId);

    console.log('Juego encontrado:', juego);

    if (juego) {
      this.juegosResultado = [juego];
    }

    return;
  }

  // 🔹 SIN NOMBRE → TODOS LOS DE LA CATEGORÍA
  this.juegosResultado = this.listaService
    .getJuegos()
    .filter(j => j.categoriaId === categoriaId);

  console.log('Juegos por categoría:', this.juegosResultado);
}



}
