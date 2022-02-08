window.addEventListener("scroll", function() {
    progreso();
    $('[data-toggle="popover"]').popover('hide');
})
function progreso() {
    let scroll = document.documentElement.scrollTop;
    let alto = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let progreso = (scroll/alto)*100;
    document.getElementsByClassName("barra")[0].style.width = progreso+"%";
}

$('[data-toggle="popover"]').popover();
$('[data-toggle="popover"]').popover();

$(function() {
    $(window).on('scroll', function() {
        
        if ($(window).scrollTop() < 400) {
            $('.start-home').addClass('activo');
            $('.start-home-1').removeClass('activo');
            $('.start-home-2').removeClass('activo');
            $('.start-home-3').removeClass('activo');
        }
        else if ($(window).scrollTop() >= 400 && $(window).scrollTop() < 1900) {
            $('.start-home-1').addClass('activo');
            $('.start-home').removeClass('activo');
            $('.start-home-2').removeClass('activo');
            $('.start-home-3').removeClass('activo');
        } 
        else if ($(window).scrollTop() >= 1900 && $(window).scrollTop() < 2400) {
            $('.start-home-2').addClass('activo');
            $('.start-home').removeClass('activo');
            $('.start-home-1').removeClass('activo');
            $('.start-home-3').removeClass('activo');
        }
        else if ($(window).scrollTop() >= 2600) {
            $('.start-home-3').addClass('activo');
            $('.start-home').removeClass('activo');
            $('.start-home-1').removeClass('activo');
            $('.start-home-2').removeClass('activo');
        }
    })
})

$(function() {
    $('navbar-toggler').on('click', function() {
        $('.start-home').addClass('activo');
    })
})

function alerta(){
    swal({
        title: "Mensaje enviado con exito!",
        text: "Gracias por contactarte conmigo",
        icon: "success",
        timer: 2000,
        button: false
      });
    $("#form").submit();
}