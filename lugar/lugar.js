const axios= require('axios');
const { API_KEY_GOOGLE } = require('../secret');

const getLugarLatLng = async(direccion) =>{
    
    let encodeURL=encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}&key=${API_KEY_GOOGLE}`)

    if (resp.data.status === "ZERO_RESULTS") {
        throw new Error (`No hay resultados para la ciuda ${ direccion }`)
    }

    let loc = resp.data.results[0];
    let coors = loc.geometry.location;
    
    return {
        direccion: loc.formatted_address,
        lat: coors.lat,
        lng: coors.lng,
    }
}

module.exports = {
    getLugarLatLng,
}