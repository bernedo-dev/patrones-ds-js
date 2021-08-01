// el objetivo es dejar de utilizar una implementación anterior o antigua por ejemplo por problemas de performance sin tener que cambiar toda la aplicación


class Api {
    constructor(){
        this.operations = function(url, opts, verb){
            switch (verb){
                case 'get':
                    //return fetch...
                case 'post':
                    //return fetch...
                default:
                    return
            }
        };
    }
}

class Api2{
    constructor(){
        this.get = function (url, opts){
            // return axios.get...
        };
        this.post = function (url,opts) {
            // return axios.post...
        };
    }
}


class ApiAdapter {
    constructor(){
        const api2 = new Api2();

        this.operations = function(url,opts, verb){
            switch (verb){
                case 'get':
                    return api2.get(url,opts);
                case 'post':
                    return api2.post(url,opts);
                default:
                    return
            }
        }
    }
}

const api = new Api();
api.operations('www.google.com', { q:1 }, 'get')


const api2 = new Api2();
api2.get('www.google.com', { q:1 } )

const adapter = new ApiAdapter();
adapter.operations('www.google.com', { q:1 }, 'get' )