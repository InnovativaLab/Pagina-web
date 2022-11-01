export interface Course {
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
export interface User {
  Nombre: string
  Apellido: string
  Genero: string
  Contraseña: string
  Email: string
  NombreDeUsuario: string
  Preferencias: string
  Estado: string
}
export interface CartItemProps {
  onAdd?: () => void
  onRemove?: () => void
}
