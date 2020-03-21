var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['4 days ago', '3 days ago', '2 days ago', 'Yesterday', 'Today'],
                datasets: [{
                    label: 'Corona Updates',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Corona Updates',
                    data: [3, 4, 13, 15, 22, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });



























// function initialLoad(){

//     fetch("https://cors-anywhere.herokuapp.com/" + "https://coronavirus-tracker-api.herokuapp.com/all", {
//         "method": "GET"
//     })
//     .then(res => res.json())          
//     .then(covid => {
        
        

//         var d = new Date();
//         var yr = JSON.stringify(d.getFullYear());
//         var year = yr.slice(2, 4);
//         var buwan = String(d.getMonth() + 1).padStart(2, '0');
//         var month;
//         if(buwan.slice(0, 1)==0){
//             month = buwan.slice(1, 2)
//         }else{
//             month = buwan
//         }

//         var day = String(d.getDate()).padStart(2, '0');
        
//         var date = month +"/"+ day +"/"+ year;
//         console.log(date)   
//         console.log(covid.confirmed.locations[0].history);

//         date = month +"/"+ day +"/"+ year;
//         value = covid.confirmed.locations[0].history[date] / 1.5;
//         cx.lineTo(0,value);
        
//         for(x=0;x!=20;x++){
//             date = month +"/"+ day +"/"+ year;
//             console.log(day)
//             value = covid.confirmed.locations[0].history[date] / 1.5;
//             console.log(value);
//             cx.lineTo(path,value);
//             path+=space;
//             day--;
//             if(day==0){
//                 month--;
//                 day=29;
//             }
//         }
//         cx.lineTo(100000000,0)
        

        



// cx.lineWidth = 1;
// cx.strokeStyle = "dodgerblue";
// cx.stroke();



//     })
//     .catch(err => {
//         console.log(err);
//     });
    
    
    
// }initialLoad();