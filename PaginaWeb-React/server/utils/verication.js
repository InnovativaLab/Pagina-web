let regExpEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
let regExpIsString = new RegExp('[a-zA-Z ]{2,}')

export const checkLogInData = (pEmail,pPws)=>{
    if (pEmail!==''||pPws!=='') {
        if (pEmail.match(regExpEmail)) {
            return true
        }
        return 'Alguno de los datos ingresados es incorrecto'
    }
    return 'Tiene que ingresar todos los datos.'
}
export const checkSignInData = (pUser,pConfirmacion)=>{
    if(pUser.Nombre!==''||pUser.Apellido!==''||pUser.Email!==''||pUser.NombreDeUsuario!==''||pUser.Genero!==''||pUser.Email!==''||pUser.Contraseña!==''||pConfirmacion!==''){
        if (pUser.Nombre.match(regExpIsString)&&pUser.Apellido.match(regExpIsString)) {
            if (pUser.Genero!==undefined) {
                if (pUser.Email.match(regExpEmail)) {
                    if (pUser.Contraseña===pConfirmacion) {
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