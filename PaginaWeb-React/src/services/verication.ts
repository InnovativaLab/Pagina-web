import { Usuario, Course } from '../types'

const regExpEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
const regExpIsString = new RegExp('[a-zA-Z ]{2,}')
const regExpIsNum = new RegExp('\d+$')

export const checkLogInData = (pEmail: string, pPws: string) => {
  if (pEmail !== '' || pPws !== '') {
    if (pEmail.match(regExpEmail) != null) {
      return true
    }
    return 'Alguno de los datos ingresados es incorrecto'
  }
  return 'Tiene que ingresar todos los datos.'
}
export const checkSignInData = (pUser: Usuario, pConfirmacion: string) => {
  if (pUser.Nombre !== '' || pUser.Apellido !== '' || pUser.Email !== '' || pUser.NombreDeUsuario !== '' || pUser.Genero !== '' || pUser.Email !== '' || pUser.Contraseña !== '' || pConfirmacion !== '') {
    if ((pUser.Nombre.match(regExpIsString) != null) && (pUser.Apellido.match(regExpIsString) != null)) {
      if (pUser.Genero !== undefined) {
        if (pUser.Email.match(regExpEmail) != null) {
          if (pUser.Contraseña === pConfirmacion) {
            return true
          }
          return 'Las contraseñas no coiciden.'
        }
        return 'El email esta mal ingresado.'
      }
      return 'No ingreso su elección de genero.'
    }
    return 'Los nombres y apellidos solo pueden tener letras.'
  }
  return 'Tiene que ingresar todos los datos.'
}
// Investigar libreria yup
export const checkCourse = (pCourse: Course) => {
  if (pCourse.Titulo === '') return 'No ingreso el titulo.'
  if (pCourse.Subtitulo === '') return 'No ingreso el subtitulo.'
  if (pCourse.Nivel === '') return 'No ingreso el nivel.'
  if (pCourse.Categoria === '') return 'No ingreso la categoria.'
  if (pCourse.Subcategoria === '') return 'No ingreso la subcategoria.'
  if (pCourse.Descripcion === '') return 'No ingreso la descripción.'
  if (pCourse.Estado === '') return 'No ingreso el estado.'
  if (pCourse.Idioma === '') return 'No ingreso el idioma.'
  if (pCourse.TiempoDePublicacion === 0) return 'No ingreso el tiempo de publicación.'
  if (pCourse.ImagenDePortada === '') return 'No ingreso la imagen de portada.'
  if (pCourse.VideoPromocional === '') return 'No ingreso el video promocional.'
  if (pCourse.MensajeDeBienvenida === '') return 'No ingreso el mensaje de bienvenida.'
  if (pCourse.MensajeDeFelicitaciones === '') return 'No ingreso el mensaje de felicitaciones.'
  if (pCourse.PrecioEnPesos === 0) return 'No ingreso el precio en pesos.'
  if (pCourse.PrecioEnDolares === 0) return 'No ingreso el precio en dolares.'
  if (pCourse.PrecioEnPesos.toString().match(regExpIsNum) != null) return 'No ingreso el precio en pesos no es numerico.'
  if (pCourse.PrecioEnDolares.toString().match(regExpIsNum) != null) return 'No ingreso el precio en dolares no es numerico.'
  if (pCourse.PrecioEnDolares === pCourse.PrecioEnPesos) return 'El precio en pesos NO PUEDE ser igual al precio en dolares.'
  return true
}
