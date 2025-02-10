var menu = document.querySelector(".menu-icon");
var navtext = document.querySelector(".text");
var cross = document.querySelector(".cross");

menu.addEventListener('click',function(){
    if (navtext.style.display === 'block') {
        navtext.style.display = 'none';
        menu.style.display = 'block';
        cross.style.display = 'none';
        section.style.visibility = 'visible';
    } else {
        navtext.style.display = 'block';
        menu.style.display = 'none';
        cross.style.display = 'block';
        section.style.visibility = 'hidden';
        }
})
cross.addEventListener('click',function(){
    if (navtext.style.display === 'block') {
        navtext.style.display = 'none';
        menu.style.display = 'block';
        cross.style.display = 'none';
        section.style.visibility = 'visible';
        } else {
        navtext.style.display = 'block';
        menu.style.display = 'none';
        cross.style.display = 'block';
        section.style.visibility = 'hidden';
    }
})

if (window.matchMedia("(max-width: 600px)").matches) {
    navtext.addEventListener('click', function(){
        if (navtext.style.display === 'block'){
            navtext.style.display = 'none';
            cross.style.display = 'none';
            menu.style.display = 'block';
            section.style.visibility = 'visible';
        } else {
            navtext.style.display = 'block';
            cross.style.display = 'block';
            menu.style.display = 'none';
            section.style.visibility = 'hidden';
        }
    })
}