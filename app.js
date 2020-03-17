function initialLoad(){
var text
fetch("https://cors-anywhere.herokuapp.com/" + "https://coronavirus-tracker-api.herokuapp.com/all", {
    "method": "GET"
})
.then(res => res.json())          
.then(text => {
    console.log(text)
})
.catch(err => {
    console.log(err);
});

}initialLoad();
    

    