// 1. All variables assigned should be declared here first.
const themeToggler = document.querySelector('.theme-toggler');




// 2. change theme to either night or day
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables')

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
})




//Get current location of the user
const button =document.querySelector("#get-location-button");
// weather api key
const API_KEY = "f004b7d5c5e56c9f2f923fda20760b4e";

const createWeatherCard = (weatherItem) =>{
    return ``;
}

button.addEventListener('click', ()=>{
    navigator.geolocation.getCurrentPosition(gotLocation, failedToGet)
})

function failedToGet(){
    alert('there was some issue')
    console.log('there was some issue')
};

function gotLocation(position){
    console.log(position)
    
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    getData(latitude, longitude);

    console.log(latitude,longitude)

    // console.log(getData)


}
function getData(latitude, longitude){
    console.log('latitude is:', latitude)
    console.log('longitude is:', longitude)

    // const GEOCODING_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${latitude},${longitude}&appid=${API_KEY}`;

// api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}

// weather api data collected
    const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

    fetch(WEATHER_API_URL)
    .then(res => res.json())
    .then(data =>{

        // filter forecast to get only one forecast per day
        const uniqueForecastDays = [];
        const sevenDaysForecast = data.list.filter(forecast => {
            const forecastDate = new Date(forecast.dt_txt).getDate();
            if(!uniqueForecastDays.includes(forecastDate)){
                return uniqueForecastDays.push(forecastDate);
            }
        });

        console.log(sevenDaysForecast);
        sevenDaysForecast.forEach(weatherItem => {
            createWeatherCard(weatherItem);
        })
    }).catch(() =>{
        alert('omo i no know wetin i fit do again')
    })




    // fetch(GEOCODING_API_URL).then(res => res.json()).then(data =>{
    //     const {latitude, longitude} = data;
    //     getWeatherDetails(latitude, longitude)
    // }).catch(() =>{
    //     alert('omo mad error dey, go check am again!!')
    // })


    // fetch(GEOCODING_API_URL)
    //     .then(res =>{
    //         if (!res.ok){
    //             throw new Error('omo is all i can say cause e no work');
                
    //         }
    //         return res.json();
    //     })
    //     .catch(()=>{
    //         alert('omo mad ohh, wetin you dey do!!')
    //         console.log('latitude should be:', latitude )
    //     })
}

// const cityInput = "Lagos";
// const cityInput = document.querySelector(".time-zone");


// const getCityCoordinates = () => {
//     cityName = cityInput.innerHTML.trim(); //input city name and remove whitespaces
//     if(!cityName){
//         return // return if empty        
//     }
//     return cityName;
// }
// console.log(getCityCoordinates())
