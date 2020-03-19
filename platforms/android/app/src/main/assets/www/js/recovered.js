var coronaV
function initialLoad(){
    var covid
    fetch("https://cors-anywhere.herokuapp.com/" + "https://coronavirus-tracker-api.herokuapp.com/recovered", {
        "method": "GET"
    })
    .then(res => res.json())          
    .then(covid => {
        console.log(covid);
        // alert(JSON.stringify(covid));
    
        var confirmed ="";
    
    
        confirmed += "<h1>"+covid.latest+"</h1>";
        confirmed += "<h3>Recovered Cases</h3>";
        
        $(".cases").html(confirmed);

        coronaV = covid;

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
            // console.log(covid.locations[x].province);
            if(covid.locations[x].province == ""){
                locations += `<div class="locations"><i class="fas fa-biohazard"></i><p  class="pwestuhan">`+covid.locations[x].country+`</p><p class="caseCount">Count: `+covid.locations[x].latest+`</p></div>`;
            }else{
                locations += `<div class="locations"><i class="fas fa-biohazard"></i><p  class="pwestuhan">`+covid.locations[x].province+", "+covid.locations[x].country+`</p><p class="caseCount">Count: `+covid.locations[x].latest+`</p></div>`;
            }
            
        }
    
        $(".locationContainer").html(locations);
        $(".loadingScreen").hide();
    })
    .catch(err => {
        console.log(err);
    });
    
    
    
    }initialLoad();
    
    
    
    
    function regenerate(){
        var locations = "";
        var inputValue = document.querySelector('#myInput').value;
        var filtered = coronaV.locations.filter(function (el) {
            return el.country.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
            });
        // for(x = 0; x!= covid.locations.length;x++){
            
        if(inputValue !== ''){
            for(x = 0; x!= filtered.length;x++){
            // console.log(covid.locations[x].province);
            
                if(filtered[x].province == ""){
                    locations += `<div class="locations"><i class="fas fa-biohazard"></i><p  class="pwestuhan">`+filtered[x].country+`</p><p class="caseCount">Count: `+filtered[x].latest+`</p></div>`;
                }else{
                    locations += `<div class="locations"><i class="fas fa-biohazard"></i><p  class="pwestuhan">`+filtered[x].province+", "+filtered[x].country+`</p><p class="caseCount">Count: `+filtered[x].latest+`</p></div>`;
                }
            }
            
        } 
        if(inputValue == ''){
            for(x = 0; x!= coronaV.locations.length;x++){
            // console.log(covid.locations[x].province);
                if(coronaV.locations[x].province == ""){
                    locations += `<div class="locations"><i class="fas fa-biohazard"></i><p  class="pwestuhan">`+coronaV.locations[x].country+`</p><p class="caseCount">Count: `+coronaV.locations[x].latest+`</p></div>`;
                }else{
                    locations += `<div class="locations"><i class="fas fa-biohazard"></i><p  class="pwestuhan">`+coronaV.locations[x].province+", "+coronaV.locations[x].country+`</p><p class="caseCount">Count: `+coronaV.locations[x].latest+`</p></div>`;
                }
            }
        }
        $("#locationContainer").html("")
        $(".locationContainer").html(locations);
    }
    