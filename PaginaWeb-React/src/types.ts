export type Course ={
  Id: number
  Titulo: string
  Subtitulo: string
  Nivel: string
  Categoria: string
  Subcategoria: string
  Descripcion: string
  Estado: string
  Idioma: string
  TiempoDePublicacion: number
  PrecioEnPesos: number
  PrecioEnDolares: number
  ImagenDePortada: string
  VideoPromocional: string
  MensajeDeBienvenida: string
  MensajeDeFelicitaciones: string
}
export type Usuario= {
  NombreDeUsuario: string
  Email: string
  Nombre: string
  Apellido: string
  Genero: string
  Contraseña: string
  Preferencias: string
  Estado: string
  RolID?: string
  RolNombre?:string
  Permisos?: Permiso[]
}
export type Permiso ={
  Id: string
  Nombre: string
}
export type DataAnalisis ={
  Fecha: string
  Titulo: string
  NumeroDeReservas: string
}
export interface CartItemProps {
  onAdd?: () => void
  onRemove?: () => void
}
