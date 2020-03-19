function initialLoad(){
    var covid
    fetch("https://cors-anywhere.herokuapp.com/" + "https://coronavirus-tracker-api.herokuapp.com/deaths", {
        "method": "GET"
    })
    .then(res => res.json())          
    .then(covid => {
        console.log(covid);
        // alert(JSON.stringify(covid));
    
        var confirmed ="";
    
    
        confirmed += "<h1>"+covid.latest+"</h1>";
        confirmed += "<h3>Death Counts</h3>";
        
        $(".cases").html(confirmed);

        

        var locations = "";
        
        var locations = "";
        var arse = covid.locations
        function compare(a,b){
            const locA = a.latest
            const locB = b.latest

            let comparison = 0;

            if(locA > locB){
                comparison = 1;
            }else if(locA < locB){
                comparison = -1;
            }
            return comparison * -1;
        }

        arse.sort(compare)

        // for(x = 0; x!= covid.locations.length;x++){
        for(x = 0; x!= covid.locations.length;x++){
            if(covid.locations[x].latest != "0"){
                if(covid.locations[x].province == ""){
                    locations += `<div class="locations"><i class="fas fa-biohazard"></i><p  class="pwestuhan">`+covid.locations[x].country+`</p><p class="caseCount">Count: `+covid.locations[x].latest+`</p></div>`;
                }else{
                    locations += `<div class="locations"><i class="fas fa-biohazard"></i><p  class="pwestuhan">`+covid.locations[x].province+", "+covid.locations[x].country+`</p><p class="caseCount">Count: `+covid.locations[x].latest+`</p></div>`;
                }
            }
            
        }
    
        $(".locationContainer").html(locations);
        $(".loadingScreen").hide();
    })
    .catch(err => {
        console.log(err);
    });
    
    
    
    }initialLoad();
    
    
    
    
        