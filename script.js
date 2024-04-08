// const cityInput = "Lagos";
const cityInput = document.querySelector(".time-zone");


const getCityCoordinates = () => {
    cityName = cityInput.innerHTML; //input city name and remove whitespaces
    if(!cityName){
        return // return if empty        
    }
    return cityName;
}
console.log(getCityCoordinates())
