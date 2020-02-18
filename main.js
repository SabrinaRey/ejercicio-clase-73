const form = document.forms[0]
const submit =form.elements[0]

form.onsubmit = e => {
    e.preventDefault()
    buscarClimaPorCiudad(submit.value)

}


const buscarClimaPorCiudad = (ciudad) =>{

fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&lang=es&appid=9f39cdba4d4a89d545134347942f077d`)
    .then(res => res.json())
    .then(info => {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&units=metric&lang=es&appid=9f39cdba4d4a89d545134347942f077d`)
            .then(res => res.json())
            .then(datosPorHora => {
                console.log(info)
                console.log(datosPorHora)

                const cityName = info.name;
                const description = info.weather[0].description;
                const temperatura = info.main.temp
                const img = `https://openweathermap.org/img/wn/${info.weather[0].icon}.png`
                const precipitation = info.clouds.all;
                const humidity = info.main.humidity;
                const wind = info.wind.speed;
        
                const contenedorHora = document.getElementById("contenedorPorHora")
                
                let acumuladora = ""
        
                datosPorHora.list.forEach((dato, i) => {
        
                const descriptionPorHora = datosPorHora.list[i].weather[0].description;
                const temperaturaPorHora = datosPorHora.list[i].main.temp
                const imgPorHora = `https://openweathermap.org/img/wn/${datosPorHora.list[i].weather[0].icon}.png`
                const precipitationPorHora = datosPorHora.list[i].clouds.all;
                const humidityPorHora = datosPorHora.list[i].main.humidity;
                const windPorHora = datosPorHora.list[i].wind.speed;
                const fechaYHora = datosPorHora.list[i].dt_txt;
              

                    
                    acumuladora += `
                    <div id ="secundario">
                    <div id ="ciudadDesc">
                    <h2 id ="titulodeCiudad">${cityName} </h2>
                    <p id="fechaYHora">${fechaYHora}</p>
                    <p id ="descriptionTotal">${descriptionPorHora} </p>
                    </div>
                    <div id="contenedorDetalles">
                    <div id ="imageIcon">             
                          <img src="${imgPorHora}">
                          <h2>${temperaturaPorHora}</h2><span>°C</span>
                    </div>
                    <div id ="ciudadDetalles">
                    <p> Lluvias:${precipitationPorHora}% </p>
                    <p>Humedad:${humidityPorHora}% </p>
                    <p> Vientos:${windPorHora} m/s </p>
                    </div>
                    </div>
                    </div>
                    `
        
                })
                
                contenedorHora.innerHTML = acumuladora      

                const contenedor = document.querySelector("#contenedor")

                contenedor.innerHTML = `
        
                <div id ="principal">
                    <div id ="ciudadDesc">
                    <h2 id ="titulodeCiudad">${cityName} </h2>
                    <p id ="descriptionTotal">${description} </p>
                    </div>
                    <div id="contenedorDetalles">
                    <div id ="imageIcon">             
                          <img src="${img}">
                          <h2>${temperatura}</h2><span>°C</span>
                    </div>
                    <div id ="ciudadDetalles">
                    <p> Lluvias:${precipitation}% </p>
                    <p>Humedad:${humidity}% </p>
                    <p> Vientos:${wind} m/s </p>
                    </div>
                    </div>
                    </div>`


            })

           




       
    })
}


