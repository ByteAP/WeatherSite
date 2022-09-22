


var dates = {
    risultato: null
};

var matchings = {
      "0": "Unknown",
      "1000": "Clear",
      "1001": "Cloudy",
      "1100": "Mostly Clear",
      "1101": "Partly Cloudy",
      "1102": "Mostly Cloudy",
      "2000": "Fog",
      "2100": "Light Fog",
      "3000": "Light Wind",
      "3001": "Wind",
      "3002": "Strong Wind",
      "4000": "Drizzle",
      "4001": "Rain",
      "4200": "Light Rain",
      "4201": "Heavy Rain",
      "5000": "Snow",
      "5001": "Flurries",
      "5100": "Light Snow",
      "5101": "Heavy Snow",
      "6000": "Freezing Drizzle",
      "6001": "Freezing Rain",
      "6200": "Light Freezing Rain",
      "6201": "Heavy Freezing Rain",
      "7000": "Ice Pellets",
      "7101": "Heavy Ice Pellets",
      "7102": "Light Ice Pellets",
      "8000": "Thunderstorm"
}




async function fetchDates(){
    
    var resp = await fetch("https://api.tomorrow.io/v4/timelines?location=45.4383842,10.9916215&fields=humidity,temperature,weatherCode,&timesteps=1d&units=metric&apikey=qaP7vyCz9bgYVLmBjEeZdeGwfrAHv4Yc")
    
    var data = await resp.json();
    
    getResult(data['data']['timelines']['0']['intervals']) 
    
}

fetchDates();

function getResult(a){
    dates.risultato = a
    Modify();
}

var index = 0;

function Modify(){


    var base = dates.risultato[index]['values'];
    var date= new Date(dates.risultato[index]['startTime'])
    var elementIndex = document.querySelectorAll('.wDay')[index];
    elementIndex.style.backgroundColor = 'rgba(3, 45, 85, 0.226)';
    elementIndex.style.borderRadius= '20px';
    document.getElementById("temperature").innerHTML = base.temperature + " °C "
    document.getElementById("humidity").innerHTML = base.humidity + " %"
    document.getElementById("weatherType").innerHTML = matchings[base.weatherCode]
    document.getElementById("icon").src = "WeatherIcons/" + base.weatherCode + ".png"
    document.getElementById("date").innerHTML = date.format("ddd, mm/yyy ");

    //----------------------------------------------

    var days = {
        day0 : dates.risultato[0],
        day1 : dates.risultato[1],
        day2 : dates.risultato[2],
        day3 : dates.risultato[3],
        day4 : dates.risultato[4],
        day5 : dates.risultato[5],
        day6 : dates.risultato[6],
        day7 : dates.risultato[7]
    }

   

    for(let i=0; i<8; i++){
        var p = days[Object.keys(days)[i]]
        var date= new Date(p.startTime)
        document.querySelectorAll('#Day')[i].innerHTML = date.format("dddd");
        document.querySelectorAll('#iconDay')[i].src = "WeatherIcons/" + p['values']['weatherCode'] + ".png";
        document.querySelectorAll('#temperatureDay')[i].innerHTML = p['values']['temperature'] + " °C ";
        document.querySelectorAll('#humidityDay')[i].innerHTML = p['values']['humidity'] + " %";
    }     

}



function changeDay(a){
    var elementIndex = document.querySelectorAll('.wDay')[index];
    elementIndex.style.backgroundColor = null;
    index = a
    Modify();
}





date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
















// getImage();

// async function getImage(){  

//     await fetch("https://api.tomorrow.io/v4/timelines?location=45.4383842,10.9916215&fields=humidity,temperature,weatherCode,&timesteps=current&units=metric&apikey=qaP7vyCz9bgYVLmBjEeZdeGwfrAHv4Yc")
//     .then((res) => res.json())
//     .then(
//         (result) => {
//             a = result['data']['timelines']['0']['intervals']['0']['values']
//             res.risultato = a
            
//         }
//         )
        
// }
