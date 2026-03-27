const btn = document.querySelector('button');
const pre = document.querySelector('#pre');
const map = L.map('map').setView([-34.6037, -58.3816], 18)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; OpenStreetMap contributors'
}).addTo(map)
const marker= L.maker ([-34.6037, -58.3816], 18).addTo(map);

btn.addEventListener('click', obtenerCoordenadas);

function obtenerCoordenadas() {
    if ('geolocation' in navigator) {
        console.log('obteniendo coordenadas');
        navigator.geolocation.getCurrentPosition( success, error);
    } else {
        console.log('Geolocalización no disponible');
    }
}

function success(pos) {
    console.log(pos);
    const latitude= pos.cords.latitude
    const longitude= pos.cords.longitude
    pre.innerHTML=`$(latitude) $(longitude)`
}
function error(err) {
    console.log('Error obteniendo ubicación:', err.message);
}