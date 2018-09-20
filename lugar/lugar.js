const axios= require('axios');

const getLugarLatLng = (direccion) =>{
    
    
    return {
        direccion,
        lat,
        lng
    }
}


let encodeURL=encodeURI(argv.direccion);
axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}&key=AIzaSyC32XCj2seP9YXsJT1-fRoup30i9n0abQs`)
    .then(resp => {
        let location = resp.data.results[0];
        let coors = location.geometry.location;
        console.log(location.formatted_address);
        console.log(coors.lat);
        console.log(coors.lng);
    })
    .catch(e => console.log('Error!!!',e))