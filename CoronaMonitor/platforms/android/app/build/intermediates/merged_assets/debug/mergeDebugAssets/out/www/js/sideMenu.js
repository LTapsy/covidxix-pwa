SideMenu = () => {
                        
    const sideMenu = document.querySelector('#sideMenu');

    sideMenu.style = "opacity:1;transform: translateX(0vw);transition: 0.4s ease-out;";
    

    var body = document.querySelector('aside');
    var except = document.querySelector('menu');

    body.addEventListener("click", function () {
        sideMenu.style = "opacity:1;transform: translateX(-100vw);transition: 0.4s ease-out;";
    }, false);
    except.addEventListener("click", function (ev) {
        ev.stopPropagation(); 
    }, false);

};