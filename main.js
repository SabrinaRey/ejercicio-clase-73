fetch('http://api.openweathermap.org/data/2.5/weather?q=cordoba&units=metric&appid=4f31e259f539d016ea813c108c431829')
    .then(res => res.json())
    .then(info => {
        console.log(info)

        const cityName = info.name;
        const description = info.weather[0].description;
        const temperatura = info.main.temp
        const img = " https://openweathermap.org/img/wn/03n.png"
        const precipitation = info.clouds.all;
        const humidity = info.main.humidity;
        const wind = info.wind.speed

            ;




        const contenedor = document.querySelector("#contenedor")

        contenedor.innerHTML = `
            
            <div id ="ciudadDesc">
            <h1>${cityName} </h1>
            <p>${description} </p>
            </div>
            <div id ="imageIcon">             
                  <img src="${img}">
                  <h2>${temperatura}</h2>
            </div>
         
            <div id ="ciudadDetalles">
            <p> Lluvias:${precipitation}% </p>
            <p>Humedad:${humidity}% </p>
            <p> Vientos:${wind} m/s </p>
            </div>
            `
    })




