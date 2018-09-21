const axios = require('axios');
const { API_KEY_OPENWEATHERMAP } = require('../secret');

const getClima = async (lat, lng) =>{
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${API_KEY_OPENWEATHERMAP}`);
    return resp.data.main.temp;
}

module.exports = {
    getClima,
}