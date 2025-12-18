export interface Categoria {
  id: number;
  nombre: string;
  imagen?: string;
}

export interface Juegos {
  id:number;
  nombre:string;
  categoriaId: number;
  imagen:string;
  precio:number;
  descripcion:string;
}


