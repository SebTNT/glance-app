function checkWeather() {
    const API_KEY = '1f68bddbbd470d5d2ce6e7a2b1c81c98';
    const CITY_NAME = 'London';
    
    navigator.geolocation.getCurrentPosition(function(pos) {
        const crd = pos.coords;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${API_KEY}&units=metric`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          console.log(data["main"])
          const btn = document.getElementById("wurl");
          const city = document.getElementById('wcity');
          const icon = document.getElementById('wicon');
          const temperature = document.getElementById('wtemp');
          const feelsLike = document.getElementById('wflike');
          city.innerText = data["name"];
          btn.href = `https://openweathermap.org/city/${data["id"]}`;
          icon.src = `http://openweathermap.org/img/wn/${data["weather"][0]["icon"]}.png`;
          temperature.innerText = `${Math.round(data["main"]["temp"])}°C`;
          feelsLike.innerText = `Feels like ${Math.round(data["main"]["feels_like"])}°C`;
        })
        .catch(error => {
            console.log("[FETCH CALL ERROR]: " + error);
          });
    }, function(err) {
        console.log("[GEOLOCATION CALL ERROR]: CODE-" + err.code + " MESSAGE-" + err.message);
    }, {
        enableHighAccuracy: false,
        timeout: 5000,
    });

    

    
      
}

checkWeather();