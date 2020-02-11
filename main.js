fetch('http://api.openweathermap.org/data/2.5/weather?q=cordoba&units=metric&appid=4f31e259f539d016ea813c108c431829')
    .then (res => res.json())
    .then (info => {
        console.log(info)
            
            const cityName = info.name;
            const description = info.weather[0].description;
            const img = " https://openweathermap.org/img/wn/03n.png"
            const precipitation =info.clouds.all;
            const humidity= info.main.humidity;
            const wind =info.wind.speed

        ;




        const contenedor = document.querySelector("#contenedor")

        contenedor.innerHTML = `
            <div>
            <div>
            <h1>${cityName} </h1>
            <p>${description} </p>
         </div>
         <div>             
            <img src="${img}">
            </div>
            <div>
            <p> Lluvias:${precipitation}% </p>
            <p>Humedad:${humidity}% </p>
            <p> Vientos:${wind} m/s </p>
            </div>
        
            
            
            </div>`
    })
    

 

