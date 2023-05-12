const request = require("request")
const url = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef2ujbgcsiu3b418c97a155211230503&q=" + latitude + "," + longtitude
request ({url, JSON : true} , (error , response) => {    
    if(error) {
         callback ("Unable to connect weather service" , undefined)
    } else if(response.body.error){
         callback (response.body.error.message , undefined)
    } else {
            callback (undefined , response.body.location.name + ' It Is  ' + response.body.current.condition.text)
    }
})
forecast(29.871903452398 , 26.4941838299718 , (error , data) => {
     console.log("ERROR : " , error)
     console.log("DATA  : " , data)
})
