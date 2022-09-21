 


var res = {
    risultato: null
};

function getImage(){  
    var a
    fetch("https://api.tomorrow.io/v4/timelines?location=45.4383842,10.9916215&fields=humidity,temperature,weatherCode,&timesteps=current&units=metric&apikey=qaP7vyCz9bgYVLmBjEeZdeGwfrAHv4Yc")
    .then((res) => res.json())
    .then(
        (result) => {
            a = result['data']['timelines']['0']['intervals']['0']['values']
            console.log(a)
            
        }
        )
}

getImage();


console.log(res.risultato)








document.getElementById("immagine")