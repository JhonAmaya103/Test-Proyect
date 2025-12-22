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
    //terror
    { id: 1, nombre: 'Resident Evil 4 Remake', categoriaId: 1, imagen: 'assets/imagenes/RE4.jpg', precio: 60000, descripcion: 'Juego de terror y accion ,es una reimaginación del clásico de terror donde el agente Leon S. Kennedy es enviado a un pueblo europeo para rescatar a la hija del presidente, encontrándose con una secta posesionada por un parásito, las "Plagas"' },
    { id: 2, nombre: 'Silent Hill 2', categoriaId: 1, imagen: 'assets/imagenes/SH2.jpg', precio: 102000, descripcion: 'Obra maestra del terror psicológico donde James Sunderland viaja al misterioso pueblo de Silent Hill tras recibir una carta de su esposa fallecida, Mary, invitándolo a reencontrarse; allí, se enfrenta a una niebla densa, monstruos perturbadores que reflejan su culpa y trauma, y personajes enigmáticos como la misteriosa María, explorando temas de pérdida, memoria y castigo en un viaje visualmente impactante y emocionalmente profundo. ' },
    { id: 3, nombre: 'The Evil Within', categoriaId: 1, imagen: 'assets/imagenes/EvilWithin.jpg', precio: 30000, descripcion: 'Es un videojuego de survival horror desarrollado por Tango Gameworks y dirigido por Shinji Mikami. La historia sigue al detective Sebastián Castellanos, quien investiga una masacre en un hospital y termina atrapado en un mundo retorcido lleno de criaturas grotescas y escenarios perturbadores. El juego se caracteriza por su atmósfera opresiva, narrativa psicológica, escasez de recursos y un enfoque constante en la supervivencia y el terror.' },
    { id: 4, nombre: 'Arc Raiders', categoriaId: 1, imagen: 'assets/imagenes/ArcRaiders.jpg', precio: 120000, descripcion: 'Es un videojuego de disparos cooperativo en tercera persona desarrollado por Embark Studios. Está ambientado en un futuro posapocalíptico donde la humanidad se refugia bajo tierra para sobrevivir a la amenaza de máquinas hostiles conocidas como ARC. Los jugadores asumen el rol de Raiders, combatientes que salen a la superficie para obtener recursos, enfrentarse a enemigos mecánicos y proteger a su comunidad, combinando acción táctica, exploración y trabajo en equipo.' },
    //Aventura
    { id: 5, nombre: 'Crash Bandicoot', categoriaId: 2, imagen: 'assets/imagenes/crash-bandicoot.jpg', precio: 40000, descripcion: 'Crash Bandicoot es un bandicoot mutante y travieso, mascota de PlayStation, creado genéticamente por el malvado Dr. Neo Cortex para su ejército, pero que escapa y frustra sus planes de dominación mundial usando su famoso giro en espiral y saltos en juegos de plataformas llenos de cajas de frutas Wumpa y enemigos. ' },
    { id: 6, nombre: 'Spyro', categoriaId: 2, imagen: 'assets/imagenes/Spyro.jpg', precio: 30000, descripcion: 'opular serie de videojuegos de plataformas, conocido por su valentía, testarudez y habilidades para embestir, planear y escupir fuego' },
    //Estrategia 
    { id: 7, nombre: 'Halo Wars', categoriaId: 3, imagen: 'assets/imagenes/Halo-W.jpg', precio: 12000, descripcion: 'Halo Wars es un juego de estrategia en tiempo real (RTS) ambientado en el universo de Halo, ambientado en el año 2531, antes de los eventos de Halo: Combat Evolved, donde lideras la nave UNSC Spirit of Fire para combatir al Covenant en el planeta Harvest, controlando ejércitos de Marines, Warthogs y Spartans en épicas batallas que marcan el inicio del conflicto humano-Covenant. ' },
    { id: 8, nombre: 'Halo Wars 2', categoriaId: 3, imagen: 'assets/imagenes/Halo-W2.jpg', precio: 50000, descripcion: 'Halo Wars 2 es un juego de estrategia en tiempo real (RTS) para Xbox One y PC, secuela de Halo Wars, que sitúa a la tripulación de la nave Spirit of Fire enfrentándose a una nueva facción, Los Desterrados, liderada por el Brute Atriox, en el legendario Arca, con una campaña narrativa' },
    { id: 9, nombre: 'Clair Obscur:Expedition 33', categoriaId: 3, imagen: 'assets/imagenes/Exp33.jpg', precio: 190000, descripcion: 'es un videojuego de rol (RPG) de fantasía oscura desarrollado por la francesa Sandfall Interactive y publicado por Kepler Interactive en 2025. El título combina combate por turnos con elementos en tiempo real y está ambientado en un mundo inspirado en la Belle Époque, donde un grupo de voluntarios llamado Expedición 33 se aventura fuera de la aislada isla de Lumière para enfrentar a La Pintora, una entidad que cada año provoca un fenómeno que borra de la realidad a las personas mayores de cierta edad.' },
  ];


  constructor() { }

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
