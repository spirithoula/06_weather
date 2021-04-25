function searchCity(cityname) {
    var queryURL = "https://api.openweathermap.org/data/2.5/onecall?="+ cityname + "&appid=d1635fbaa122518ba37230c95af37abc"


    $.ajax({
    url: queryURL,
    method: 'GET'
    }).then(function (response) {
    console.log(response);
    console.log(queryURL);
    $("#current").empty();
   var mainDate = moment().format('L');
    })
}
