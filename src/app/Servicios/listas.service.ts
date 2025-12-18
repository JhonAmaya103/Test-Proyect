import { Injectable } from '@angular/core';
import { Categoria, Juegos } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class ListasService {

  private categorias: Categoria[] = [
    { id: 1, nombre: 'Terror' },
    { id: 2, nombre: 'Aventura' },
    { id: 3, nombre: 'Estrategia' }
  ];

  private juegos: Juegos[] = [
    { id: 1, nombre: 'Resident Evil 4 Remake', categoriaId: 1, imagen: 'assets/imagenes/RE4.jpg' , precio: 60000 , descripcion: 'Juego de terror y accion ,es una reimaginación del clásico de terror donde el agente Leon S. Kennedy es enviado a un pueblo europeo para rescatar a la hija del presidente, encontrándose con una secta posesionada por un parásito, las "Plagas"' },
    { id: 2, nombre: 'Silent Hill 2', categoriaId: 1, imagen: 'assets/imagenes/SH2.jpg' , precio:102000 , descripcion: 'obra maestra del terror psicológico donde James Sunderland viaja al misterioso pueblo de Silent Hill tras recibir una carta de su esposa fallecida, Mary, invitándolo a reencontrarse; allí, se enfrenta a una niebla densa, monstruos perturbadores que reflejan su culpa y trauma, y personajes enigmáticos como la misteriosa María, explorando temas de pérdida, memoria y castigo en un viaje visualmente impactante y emocionalmente profundo. '},
    { id: 3, nombre: 'Crash Bandicoot', categoriaId: 2, imagen: 'assets/imagenes/crash-bandicoot.jpg', precio:40000 , descripcion: 'Crash Bandicoot es un bandicoot mutante y travieso, mascota de PlayStation, creado genéticamente por el malvado Dr. Neo Cortex para su ejército, pero que escapa y frustra sus planes de dominación mundial usando su famoso giro en espiral y saltos en juegos de plataformas llenos de cajas de frutas Wumpa y enemigos. ' },
    { id: 4, nombre: 'Spyro', categoriaId: 2, imagen: 'assets/imagenes/Spyro.jpg', precio:30000 , descripcion: 'opular serie de videojuegos de plataformas, conocido por su valentía, testarudez y habilidades para embestir, planear y escupir fuego'},
    { id: 5, nombre: 'Halo Wars', categoriaId: 3, imagen: 'assets/imagenes/Halo-W.jpg' , precio : 12000, descripcion: 'Halo Wars es un juego de estrategia en tiempo real (RTS) ambientado en el universo de Halo, ambientado en el año 2531, antes de los eventos de Halo: Combat Evolved, donde lideras la nave UNSC Spirit of Fire para combatir al Covenant en el planeta Harvest, controlando ejércitos de Marines, Warthogs y Spartans en épicas batallas que marcan el inicio del conflicto humano-Covenant. '},
    { id: 6, nombre: 'Halo Wars 2', categoriaId: 3, imagen: 'assets/imagenes/Halo-W2.jpg' , precio: 50000, descripcion: 'Halo Wars 2 es un juego de estrategia en tiempo real (RTS) para Xbox One y PC, secuela de Halo Wars, que sitúa a la tripulación de la nave Spirit of Fire enfrentándose a una nueva facción, Los Desterrados, liderada por el Brute Atriox, en el legendario Arca, con una campaña narrativa'}
  ];

  constructor() {}

  getCategorias(): Categoria[] {
    return this.categorias;
  }

  getJuegos(): Juegos[] {
    return this.juegos;
  }

 getJuego(nombre: string, categoriaId: number): Juegos | undefined {
  return this.juegos.find(j =>
    j.nombre.toLowerCase() === nombre.toLowerCase() &&
    j.categoriaId === categoriaId
  );
}



}
