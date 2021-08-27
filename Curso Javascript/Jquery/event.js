'use strict';

//evento
// $(document).ready(function(){

//     $('#btnmostrar').click(function(){
//         $('#texto').html('Acabas de pulsar el boton');
//     });
//     $('#btnocultar').click(function(){
//         $('#texto').hide(1500);
//     });

// });

//evento hover
// $(document).ready(function () {
//     $('#btn').html('Pasa el raton por encima');

//     $('#btn').hover(function () {
//         $('#btn').html('Saca el raton');
//         $('#texto').show(500);
//     }, function () {
//         $('#btn').html('Saca el raton');
//         $('#texto').hide(500);
//         $('#btn').html('Pasa el raton')
//     });
// });

//evento addclass removeclass
// $(document).ready(function () {
//     $('.parrafo').hover(function () {
//         $(this).addClass('borde');
//     }, function () {
//         $(this).removeClass('borde');
//     })
// });

//efecto slide
$(document).ready(function () {
    $('#mostrar').click(function () {
        $('#texto').slideToggle(1000,'swing', function(){
            console.log('Terminado');
        })
    })
});