const axios= require('axios');
import {API_KEY_GOOGLE} from '../secret'
const getLugarLatLng = (direccion) =>{
    
    
    return {
        direccion,
        lat,
        lng
    }
}


let encodeURL=encodeURI(argv.direccion);
axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}&key=${API_KEY_GOOGLE}`)
    .then(resp => {
        let location = resp.data.results[0];
        let coors = location.geometry.location;
        console.log(location.formatted_address);
        console.log(coors.lat);
        console.log(coors.lng);
    })
    .catch(e => console.log('Error!!!',e))