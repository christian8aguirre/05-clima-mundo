const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng( argv.direccion )
//     .then( resp => {
//         console.log(resp)
//     })
//     .catch(e => console.log(e));

clima.getClima(23.634501, -102.552784)
    .then( temp => console.log(temp))
    .catch( err => console.log(err))