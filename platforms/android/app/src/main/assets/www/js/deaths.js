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
        
        console.log(covid.locations.length);

        // for(x = 0; x!= covid.locations.length;x++){
        for(x = 0; x!= 20;x++){
            // console.log(covid.locations[x].province);
            if(covid.locations[x].province == ""){
                locations += `<div class="locations"><i class="fas fa-biohazard"></i><p  class="pwestuhan">`+covid.locations[x].country+`</p><p class="caseCount">Count: `+covid.locations[x].latest+`</p></div>`;
            }else{
                locations += `<div class="locations"><i class="fas fa-biohazard"></i><p  class="pwestuhan">`+covid.locations[x].province+", "+covid.locations[x].country+`</p><p class="caseCount">Count: `+covid.locations[x].latest+`</p></div>`;
            }
            
        }
    
        $(".locationContainer").html(locations);
    })
    .catch(err => {
        console.log(err);
    });
    
    
    
    }initialLoad();
    
    
    
    
        