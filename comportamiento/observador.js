// hay un objeto que publica y otro que se subscribe

const user = new User();

const init = () => {
    user.on('login', userLoggedIn)
    user.on('login', retrieveInitData)
}

const userLoggedIn = () => {
    // usuario inició sesión
}

app.init()


// en algun lugar de nuestra app
const login = () => {
    // lógina de inicio de sesión
    // ...

    // luego:
    user.trigger('login')
}

login()