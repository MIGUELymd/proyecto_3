async function ambiente() {
    const resultado = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Caracas,Venezuela&appid=3c8a7f5a0dd5eedd3d16fc06726bc9b9&lang=es&units=metrichttps://api.openweathermap.org/data/2.5/weather?q=Caracas,Venezuela&appid=3c8a7f5a0dd5eedd3d16fc06726bc9b9&lang=es&units=metric')
    return await resultado.json();
}
async function proyecto() {
    try {
        const infoambiente = await ambiente();
        const clima = infoambiente.weather[0].main;
        const descripcion = infoambiente.weather[0].description;
        const temperatura = infoambiente.main.feels_like;
        const temperaturaDelAmbiente = infoambiente.main.temp;
        const sensacionTermica = infoambiente.main.sea_level;
        const latitud = infoambiente.coord.lat;
        const longitud = infoambiente.coord.lon;
        

        // Mostrar la información en el HTML
        document.getElementById('clima').innerHTML = `Clima: ${clima}`;
        document.getElementById('descripcion').innerHTML = `Descripción: ${descripcion}`;
        document.getElementById('temperatura').innerHTML = `Sensación Térmica: ${temperatura} °C`;
        document.getElementById('temperatura-ambiente').innerHTML = `Temperatura del Ambiente: ${temperaturaDelAmbiente} °C`;
        document.getElementById('sensacion-termica').innerHTML = `Sensación Térmica (nivel del mar): ${sensacionTermica} m`;
        document.getElementById('latitud').innerHTML = `Latitud: ${latitud}`;
        document.getElementById('longitud').innerHTML = `Longitud: ${longitud}`;
    } catch (error) {
        console.error('Error al obtener la información del clima:', error);
        document.getElementById('clima').innerHTML = 'Error al cargar la información del clima.';
    }
}
// Llamar a la función proyecto para mostrar el clima
proyecto();