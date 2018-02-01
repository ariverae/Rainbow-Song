var api = 'AIzaSyA1NN5_2cLw3e4nE1r-6z9F8NK4mH4ynH4';

var map;
function initMap() {
    var latLng = {
      lat: 20.6772885,
      lng: -103.3856328
    }

    var map = new google.maps.Map(document.getElementById('mapa'), {
      'center': latLng,
      'zoom': 14,
      'mapTypeId': google.maps.MapTypeId.ROADMAP
    });

    var marker = new google.maps.Marker({
       position: latLng,
       map: map,
       title: 'GdlWebCamp'
    });

    var contenido = '<h2>GDLWEBCAMP</h2>'+
                    '<p>Del 10 al 12 de Diciembre</p>'+
                    '<p>Visitanos!</p>'

    var informacion = new google.maps.InfoWindow({
      content: contenido
    });

    marker.addListener('click', function(){
      informacion.open(map, marker);
    });
}



(function(){
  "use strict";

  var regalo = document.getElementById('regalo');

  document.addEventListener('DOMContentLoaded', function(){

    //campos Datos Usuarios
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');

    // Campos pases
    var pase_dia = document.getElementById('pase_dia');
    var pase_dosdias = document.getElementById('pase_dosdias');
    var pase_completo = document.getElementById('pase_completo');

    // botones y divs
    var calcular = document.getElementById('calcular');
    var errorDiv = document.getElementById('error');
    var botonRegistro = document.getElementById('btnRegistro');
    var lista_productos = document.getElementById('lista_productos');
    var suma = document.getElementById('suma_total');

    // Extras
    var camisas = document.getElementById('camisa_evento');
    var etiquetas = document.getElementById('etiquetas');

    calcular.addEventListener('click', calcularMontos);

    pase_dia.addEventListener('blur', mostrarDias);
    pase_dosdias.addEventListener('blur', mostrarDias);
    pase_completo.addEventListener('blur', mostrarDias);

    nombre.addEventListener('blur', validarCampos);
    apellido.addEventListener('blur', validarCampos);
    email.addEventListener('blur', validarCampos);
    email.addEventListener('blur', validarMail);

    function validarCampos(){
      if(this.value == ''){
        errorDiv.style.display = 'block';
        errorDiv.innerHTML = "Este campo es obligatorio";
        this.style.border = '1px solid red';
        errorDiv.style.border = '1px solid red';
      }
      else {
        errorDiv.style.display = 'none';
        this.style.border = '1px solid #ccc';
      }
    }

    function validarMail(){
      if(this.value.indexOf("@") > -1) {
        errorDiv.style.display = 'none';
        this.style.border = '1px solid #ccc';
      }
      else{
        errorDiv.style.display = 'block';
        errorDiv.innerHTML = "Debe tener al menos un @";
        this.style.border = '1px solid red';
        errorDiv.style.border = '1px solid red';
      }
    }


    function calcularMontos(event){
      event.preventDefault();
      if(regalo.value == ''){
        alert("Debes elegir un regalo");
      }
      else {
        var boletosDia = parseInt(pase_dia.value, 10) || 0,
            boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
            boletoCompleto = parseInt(pase_completo.value, 10) || 0,
            cantCamisas = parseInt(camisas.value, 10) || 0,
            cantEtiquetas = parseInt(etiquetas.value, 10) || 0;

            var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletoCompleto * 50) + ((cantCamisas * 10) *.93) + (cantEtiquetas *2);

            var listadoProductos = [];

            if(boletosDia >=1){
              listadoProductos.push(boletosDia + ' Pase(s) por día');
            }

            if(boletos2Dias >=1){
              listadoProductos.push(boletos2Dias + ' Pase(s) por 2 días');
            }

            if(boletoCompleto >=1){
              listadoProductos.push(boletoCompleto + ' Pase(s) completo');
            }

            if(cantCamisas >=1){
              listadoProductos.push(cantCamisas + ' Camisas');
            }

            if(cantEtiquetas >=1){
              listadoProductos.push(cantEtiquetas + ' Etiquetas');
            }

            lista_productos.style.display = "block";

            lista_productos.innerHTML = '';
            for (var i = 0; i < listadoProductos.length; i++) {
              lista_productos.innerHTML += listadoProductos[i] + '<br/>';
            }

            suma.innerHTML = "$ " + totalPagar.toFixed(2);

      }
    }

    function mostrarDias(){
      var boletosDia = parseInt(pase_dia.value, 10) || 0,
          boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
          boletoCompleto = parseInt(pase_completo.value, 10) || 0;

          var diasAReset = ['viernes', 'sabado', 'domingo'];
          for (var i = 0; i < diasAReset.length; i++) {
            document.getElementById(diasAReset[i]).style.display = 'none';
          }

          var diasElegidos = [];

          if (boletosDia > 0) {
            diasElegidos.push('viernes');
          }
          if (boletos2Dias > 0) {
            diasElegidos.push('viernes', 'sabado');
          }
          if(boletoCompleto > 0){
            diasElegidos.push('viernes','sabado','domingo');
          }

          for (var i = 0; i < diasElegidos.length; i++) {
            document.getElementById(diasElegidos[i]).style.display = 'block';
          }
    }

  });
})();

$(function(){

  // Programa de Conferencias
  $('.programa-evento .info-curso:first').show();
  $('.menu-programa a:first').addClass('activo');

  $('.menu-programa a').on('click', function(){
    $('.menu-programa a').removeClass('activo')
    $(this).addClass('activo');
    $('.ocultar').hide();
    var enlace = $(this).attr('href');
    $(enlace).fadeIn(1000);

      return false;
  });

});
