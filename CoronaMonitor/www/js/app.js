function initialLoad(){
var covid
fetch("https://cors-anywhere.herokuapp.com/" + "https://coronavirus-tracker-api.herokuapp.com/all", {
    "method": "GET"
})
.then(res => res.json())          
.then(covid => {
    console.log(covid);
    console.log(covid.latest);
    // alert(JSON.stringify(covid));

    var content ="";


    content += "";

    content += `<div class="confirmed"><p class="title"><b>Confirmed Cases</b></p><p>Date : `+covid.confirmed.last_updated.slice(0, 10)+`</p><p>Count : `+covid.latest.confirmed+`</p></div>` ;
    content += `<div class="deaths"><p class="title"><b>Deaths</b></p><p>Date : `+covid.deaths.last_updated.slice(0, 10)+`</p><p>Count : `+covid.latest.deaths+`</p></div>` ;
    content += `<div class="recovered"><p class="title"><b>Recovered</b></p><p>Date : `+covid.recovered.last_updated.slice(0, 10)+`</p><p>Count : `+covid.latest.recovered+`</p></div>` ;
    

    $(".latestContainer").html(content);


})
.catch(err => {
    console.log(err);
});



}initialLoad();




    