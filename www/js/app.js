function initialLoad(){
var covid
var ConfirmedValueToday = 0;
var ConfirmedValueYesterday = 0;
var ConfirmedValueTwoDaysAgo = 0;
var ConfirmedValueThreeDaysAgo = 0;
var ConfirmedValueFourDaysAgo = 0;
var DeathsValueToday = 0;
var DeathsValueYesterday = 0;
var DeathsValueTwoDaysAgo = 0;
var DeathsValueThreeDaysAgo = 0
var DeathsValueFourDaysAgo = 0;
var RecoveredValueToday = 0;
var RecoveredValueYesterday = 0;
var RecoveredValueTwoDaysAgo = 0;
var RecoveredValueThreeDaysAgo = 0
var RecoveredValueFourDaysAgo = 0;

var content = "";

fetch("https://cors-anywhere.herokuapp.com/" + "https://coronavirus-tracker-api.herokuapp.com/all", {
    "method": "GET"
})
.then(res => res.json())          
.then(covid => {

    //Lord's way of populating stuff
    content += `<div class="confirmed"><p class="title"><b>Confirmed Cases</b></p><p>Date : `+covid.confirmed.last_updated.slice(0, 10)+`</p><p>Count : `+covid.latest.confirmed+`</p></div>` ;
    content += `<div class="deaths"><p class="title"><b>Deaths</b></p><p>Date : `+covid.deaths.last_updated.slice(0, 10)+`</p><p>Count : `+covid.latest.deaths+`</p></div>` ;
    content += `<div class="recovered"><p class="title"><b>Recovered</b></p><p>Date : `+covid.recovered.last_updated.slice(0, 10)+`</p><p>Count : `+covid.latest.recovered+`</p></div>` ;

    $(".latestContainer").html(content);
    $(".loadingScreen").hide();

    //A messy way of getting the date,
    //date works in a weird way. Dont ask why or how
    var d = new Date();
    var yr = JSON.stringify(d.getFullYear());
    var year = yr.slice(2, 4);
    var buwan = String(d.getMonth() + 1).padStart(2, '0');
    var month;
    if(buwan.slice(0, 1)==0){
        month = buwan.slice(1, 2)
    }else{
        month = buwan
    }

    //another messy way of getting dates 5 days prior
    //should make it into a loop
    var day = String(d.getDate()).padStart(2, '0');
    var today = month +"/"+ day +"/"+ year;
    day--;
    var yesterday = month +"/"+ day +"/"+ year;
    day--;
    var TwoDaysAgo = month +"/"+ day +"/"+ year;
    day--;
    var ThreeDaysAgo = month +"/"+ day +"/"+ year;
    day--;
    var FourDaysAgo = month +"/"+ day +"/"+ year;
    
    //getting the total of confirmed cases - 5 days
    var length = covid.confirmed.locations.length;
    for(x=0;x!=length;x++){
        ConfirmedValueToday += covid.confirmed.locations[x].history[today];
        ConfirmedValueYesterday += covid.confirmed.locations[x].history[yesterday];
        ConfirmedValueTwoDaysAgo += covid.confirmed.locations[x].history[TwoDaysAgo];
        ConfirmedValueThreeDaysAgo += covid.confirmed.locations[x].history[ThreeDaysAgo];
        ConfirmedValueFourDaysAgo += covid.confirmed.locations[x].history[FourDaysAgo];

        DeathsValueToday += covid.deaths.locations[x].history[today];
        DeathsValueYesterday += covid.deaths.locations[x].history[yesterday];
        DeathsValueTwoDaysAgo += covid.deaths.locations[x].history[TwoDaysAgo];
        DeathsValueThreeDaysAgo += covid.deaths.locations[x].history[ThreeDaysAgo];
        DeathsValueFourDaysAgo += covid.deaths.locations[x].history[FourDaysAgo];

        RecoveredValueToday += covid.recovered.locations[x].history[today];
        RecoveredValueYesterday += covid.recovered.locations[x].history[yesterday];
        RecoveredValueTwoDaysAgo += covid.recovered.locations[x].history[TwoDaysAgo];
        RecoveredValueThreeDaysAgo += covid.recovered.locations[x].history[ThreeDaysAgo];
        RecoveredValueFourDaysAgo += covid.recovered.locations[x].history[FourDaysAgo];
    }

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['4 days ago', '3 days ago', '2 days ago', 'Yesterday', 'Today'],
            datasets: [
            {
                label: 'Confirmed Cases',
                data: [
                    ConfirmedValueFourDaysAgo,
                    ConfirmedValueThreeDaysAgo,
                    ConfirmedValueTwoDaysAgo,
                    ConfirmedValueYesterday,
                    ConfirmedValueToday
                ],
                backgroundColor: [
                    '#7332a81c'
                ],
                borderColor: [
                    '#7332a8'
                ],
                borderWidth: 2
            },
            {
                label: 'Deaths',
                data: [
                    DeathsValueFourDaysAgo,
                    DeathsValueThreeDaysAgo,
                    DeathsValueTwoDaysAgo,
                    DeathsValueYesterday,
                    DeathsValueToday
                ],
                backgroundColor: [
                    '#a8323a21'
                ],
                borderColor: [
                    '#a8323a'
                ],
                borderWidth: 2
            },
            {
                label: 'Recovered',
                data: [
                    RecoveredValueFourDaysAgo,
                    RecoveredValueThreeDaysAgo,
                    RecoveredValueTwoDaysAgo,
                    RecoveredValueYesterday,
                    RecoveredValueToday
                ],
                backgroundColor: [
                    '#ffffff00'
                ],
                borderColor: [
                    '#30b52d'
                ],
                borderWidth: 2
            },
            
            
        ]
        },
        options: {
            responsive: true,
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 20,
                    padding: 20
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        min: 100
                    }
                }]
            }
        }
    });

})
.catch(err => {
    console.log(err);
});



}initialLoad();


// day--;
    
//     var yesterday = month +"/"+ day +"/"+ year;
//     console.log(yesterday)



    