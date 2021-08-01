const https = require('https');

// codigo inicial
// const options = {
//     hostname: 'jsonplaceholder.typicode.com',
//     path: '/users',
//     method: 'GET'
// }

// const req = https.request(options, res => {
//     res.setEncoding('utf-8')
//     let body = ''
//     res.on('data', d => {
//         body += d
//     });

//     res.on('end', d =>{
//         const parsed = JSON.parse(body)
//         console.log(parsed);
//     });
// });

// req.on('error', (e) => {
//     console.log(e);
// });

// req.end();
//--------------- fin codigo inicial

//implementación facade

const get = url => new Promise( (resolve, reject) => {

    const comp = url.split('/');
    const host = comp.shift();

    const options = {
        hostname: host,
        path: `/${comp.join('/')}`,
        method: 'GET'
    }

    console.log(options);
    
    const req = https.request(options, res => {
        res.setEncoding('utf-8')
        let body = ''
        res.on('data', d => {
            body += d
        });
    
        res.on('end', d =>{
            const parsed = JSON.parse(body)
            console.log(parsed);
            resolve(parsed);
        });
    });
    
    req.on('error', (e) => {
        console.log(e);
        reject(e);
    });
    
    req.end();
});

const main = async () => {
    const resultado = await get('jsonplaceholder.typicode.com/users');
    console.log('resultado', resultado);
}
 main();