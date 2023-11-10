function validarformulario(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email == 'usuario' && password == '123456'){
        alert ('Ingreso correcto');
        return true;

    }else{
        alert('Usuario o contraseña incorrecta');
        return false;
    }
}