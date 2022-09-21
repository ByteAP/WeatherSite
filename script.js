


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
    
    var resp = await fetch("https://api.tomorrow.io/v4/timelines?location=45.4383842,10.9916215&fields=humidity,temperature,weatherCode,&timesteps=current&units=metric&apikey=qaP7vyCz9bgYVLmBjEeZdeGwfrAHv4Yc")
    
    var data = await resp.json();
    
    getResult(data['data']['timelines']['0']['intervals']) 
    
}

fetchDates();

function getResult(a){
    dates.risultato = a
    Modify();
}

function Modify(){
    var index = 0;
    var base = dates.risultato[index]['values'];
    document.getElementById("temperature").innerHTML = base.temperature + " °C "
    document.getElementById("humidity").innerHTML = base.humidity + " %"
    document.getElementById("weatherType").innerHTML = matchings[base.weatherCode]
    document.getElementById("icon").src = "WeatherIcons/" + base.weatherCode + ".png"

    //----------------------------------------------

    var days = {
        day0 : dates.risultato[0],
        day1 : dates.risultato[1]
        // day2 : dates.risultato['2']['values'],
        // day3 : dates.risultato['3']['values'],
        // day4 : dates.risultato['4']['values'],
        // day5 : dates.risultato['5']['values'],
        // day6 : dates.risultato['6']['values'],
        // day7 : dates.risultato['7']['values']
    }


    for(let i=0; i<7; i++){
         p = days.day1
        document.querySelectorAll('#Day')[i].innerHTML = p.startTime;
    }
    
    

}

// days[Object.keys(days)[i]]




date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();

document.getElementById("date").innerHTML = month + "/" + day + "/" + year;














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
