//Get current location of the user
const button =document.querySelector("#get-location-button");


function failedToGet(){
    alert('there was some issue')
    console.log('there was some issue')
}

button.addEventListener('click', ()=>{
    navigator.geolocation.getCurrentPosition(gotLocation, failedToGet)
})

function gotLocation(position){
    console.log(position)
    
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log(latitude,longitude)
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
