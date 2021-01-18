/* Cambiar color barra navegación al hacer scroll */
var prevScrollpos = window.pageYOffset;
/*Altura a la que cambiamos el color de fondo */
var currentScrollPos ="700";
window.onscroll = function(){
    var prevScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav").style.background = "#FFF";
      } else {
        document.getElementById("nav").style.background = "transparent";
      }
      prevScrollpos = currentScrollPos;
    };

    var img = document.getElementById('empresa');

    img.addEventListener('mouseenter', function() {
        this.src = 'assets/img/corporate-hover-bg.jpg';
    }, false);
    
    img.addEventListener('mouseleave', function() {
        this.src = 'assets/img/corporate-bg.jpg';
    }, false);
    var img2 = document.getElementById('boda');

    img2.addEventListener('mouseenter', function() {
        this.src = 'assets/img/wedding-hover-bg.jpg';
    }, false);
    
    img2.addEventListener('mouseleave', function() {
        this.src = 'assets/img/wedding-bg.jpg';
    }, false);