



























function initialLoad(){

    fetch("https://cors-anywhere.herokuapp.com/" + "https://coronavirus-tracker-api.herokuapp.com/all", {
        "method": "GET"
    })
    .then(res => res.json())          
    .then(covid => {
        
        

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

        var day = String(d.getDate()).padStart(2, '0');
        
        var date = month +"/"+ day +"/"+ year;
        console.log(date)   
        console.log(covid.confirmed.locations[0].history);

        date = month +"/"+ day +"/"+ year;
        value = covid.confirmed.locations[0].history[date] / 1.5;
        cx.lineTo(0,value);
        
        for(x=0;x!=20;x++){
            date = month +"/"+ day +"/"+ year;
            console.log(day)
            value = covid.confirmed.locations[0].history[date] / 1.5;
            console.log(value);
            cx.lineTo(path,value);
            path+=space;
            day--;
            if(day==0){
                month--;
                day=29;
            }
        }
        cx.lineTo(100000000,0)
        

        



cx.lineWidth = 1;
cx.strokeStyle = "dodgerblue";
cx.stroke();



    })
    .catch(err => {
        console.log(err);
    });
    
    
    
}initialLoad();