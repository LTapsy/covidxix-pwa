// Loading Screen Animation

const loading = document.querySelector(".loadingScreenBox");

function loadingOne(){
    loading.style="opacity:0.2; transition:0.8s;"
    setTimeout(loadingTwo, 800);
};

function loadingTwo(){
    loading.style="opacity:0.5; transition:0.8s;"
    setTimeout(loadingOne, 800);
};

loadingOne();