import { Usuario, Course } from '../types';

const regExpEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
const regExpIsString = new RegExp('[a-zA-Z ]{2,}')

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
export const checkCourse = (pCourse: Course) => {
  console.log(pCourse.Subtitulo);
  if ( pCourse.Subcategoria !== '' || pCourse.Estado !== '' || pCourse.Idioma !== '' || pCourse.ImagenDePortada !== '' || pCourse.VideoPromocional !== '') {
    if (pCourse.MensajeDeBienvenida !== ''|| pCourse.MensajeDeFelicitaciones !== '') {
      if (pCourse.Titulo !== '' || pCourse.Subtitulo !== '') {
        if (pCourse.Descripcion !== '') {
          if (pCourse.Nivel !== '') {
            return true
          }
          return 'No ingreso el nivel del curso.'
        }
        return 'Le falto agregar la descripción.'
      }
      return 'No ingreso el titulo o el subtitulo.'
    }
    return 'No ingreso uno de los mensajes.'
  }
  return 'No puede dejar campos vacios'
}