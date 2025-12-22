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
  juegosResultado: Juegos[] = [];

  constructor(
    private fb: FormBuilder,
    private listaService: ListasService
  ) {
    this.miFormulario = this.fb.group({
      categoria_juego: [''], // ❗ ya NO es required
      nombre: ['']
    });
  }

  ngOnInit(): void {
    this.categorias = this.listaService.getCategorias();

    // Autocompletado (solo si hay categoría)
    this.miFormulario.get('nombre')?.valueChanges.subscribe(valor => {

      const texto = valor?.toLowerCase().trim();
      const categoriaId = Number(this.miFormulario.get('categoria_juego')?.value);

      if (!texto || texto.length < 2 || !categoriaId) {
        this.sugerencias = [];
        return;
      }

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

    const { nombre, categoria_juego } = this.miFormulario.value;

    const texto = nombre?.toLowerCase().trim();
    const categoriaId = Number(categoria_juego);

    this.juegosResultado = [];

    // 🔹 TEXTO (con o sin categoría)
    if (texto && texto.length >= 2) {
      this.juegosResultado = this.listaService
        .getJuegos()
        .filter(j =>
          j.nombre.toLowerCase().includes(texto) &&
          (categoriaId ? j.categoriaId === categoriaId : true)
        );
      return;
    }

    // 🔹 SOLO categoría (sin texto)
    if (categoriaId) {
      this.juegosResultado = this.listaService
        .getJuegos()
        .filter(j => j.categoriaId === categoriaId);
    }
  }
}
