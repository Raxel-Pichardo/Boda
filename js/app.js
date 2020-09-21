// https://www.flvto.biz/fr/
// https://codebeautify.org/excel-to-json

var url = window.location.search.replace(/\?/g, '');

//INICIO FORMULARIO 

      // Process contact form
      $('#form-confirm').submit(function(event) {
        console.log("Hola");
    event.preventDefault();
    setTimeout(function() {
        // Get data
      var data = {
        'entry.1119495510': $("#form-name").val(),
        'entry.1128010576': $("#form-email").val(),
        'entry.240744114': $("#form-phone").val(),
        'entry.1857846393': $("#invitados").val(),
        'entry.996780921': $("#form-message").val()
      };

      console.log("El nombre es: " + $("#form-name").val());
      console.log("El correo es: " + $("#form-email").val());
      console.log("El teléfono es: " + $("#form-phone").val());
      console.log("La respuesta es: " + $("#invitados").val());
      console.log("El mensaje es: " + $("#form-message").val());
      console.log(data[3]);
      console.log($("#invitados").val());
  
      // Validate form
      var formSuccess = true;
      Object.keys(data).forEach(function(key, index) {
        if (!data[key]) {
          formSuccess = false;
        }
      });
  
      if (formSuccess) {
        // Send request
        $.ajax({
          url: 'https://docs.google.com/forms/d/e/1FAIpQLSdeIyTl2Z5ufSAGpiBer0Sqzq5Fmnt4DGkzDBCx-oaxePl-cg/formResponse?vc=0&c=0&w=1&flr=0',
          type: 'POST',
          crossDomain: true,
          dataType: "xml",
          data: data,
          beforeSend: function (data) {
            $(".wrap-send").fadeIn();
        },
          success: function(jqXHR, textStatus, errorThrown) {
            console.log("Fue exitoso");
            setTimeout(function () {
                $(".enviando").hide();
                $(".wrap-send").html(
                    "<h1>¡Muchas Gracias por tu confirmación, te esperamos en nuestra Boda!</h1>"
                );
            }, 3000);
          },
          error: function(jqXHR, textStatus, errorThrown) {
            console.log("Fue error");
            $(".enviando").hide();
            if( $("#invitados").val() == "Asistiré"){
                $(".wrap-send").html(
                    "<h1>¡Muchas Gracias por tu confirmación, te esperamos en nuestra Boda!</h1>"
                );
            }
            else if( $("#invitados").val() == "No Asistiré"){
                $(".wrap-send").html(
                    "<h1>¡Gracias por tu respuesta!</h1>"
                );
            }
          }
        });
      }
    }, 300);
  });

          //FIN FORMULARIO

var app = {
    enviarConfirmacion: function (event) {
       event.preventDefault();
        alergia_input = ($("#alergia").val() == null) ? "" : $("#alergia").val();
        alcohol_input = ($("#alcohol").val() == null) ? "" : $("#alcohol").val();
        cancion_input = ($("#cancion").val() == null) ? "" : $("#cancion").val();
        var data = {
            user_name: $(".usr-nombre").val(),
            user_email: $(".usr-correo").val(),
            user_comentarios: $(".deseos-invitados").val(),
            user_invitados: $(".num-invitados").val(),
            uid_fire: "3ILLeW9zSeW38YUe2w95A953jZ42",
            cancion: $("#cancion").val(),
            admin_user: "astwer@gmail.com",
            hashtag: "#Wendy&Cristian",
            url_boda: "https://miboda.love/demo",
            direccion_texto: "Carretera barra vieja km.33 calle Vicente Guerrero s/n col. San AndrÃ©s playa encantada",
            historia: `Nos conocemos desde que Ã©ramos unos niÃ±os.. de manera frecuente nos veÃ­amos ya que Cristian es el mejor amigo de mi primo, transcurrido el tiempo me invitÃ³ a salir.. los dos teniamos sentimientos encontrados el uno por el otro, sin embargo por cuestiones de edad nunca se pudo consolidar un noviazgo! Al paso de los aÃ±os nuevamente me invito a salir.. platicamos por horas del como nos habÃ­a ido, que habÃ­amos hecho, etc.. pero sobre todo hicimos Ã©nfasis en un tema "Que era lo que buscabamos en una pareja" una vez que ambos respondimos, Cristian me vio fijamente a los ojos y me dijo.. "Vamos a darnos una oportunidad" a lo cual le respondi un "Si".. sin duda la mejor decisiÃ³n que he tomado en mi vida.`,
            mesa_url: "Palacio de hierro y Casa Palacio - NÃºmero de evento "
        };

        $.ajax({
            type: "GET",
            url: "https://www.miboda.love/endPoint/php/generadorEmail.php",
            dataType: 'json',
            traditional: true,
            data: data,
            beforeSend: function (data) {
                $(".wrap-send").fadeIn();
            },
            success: function (respuesta) {
                console.log(respuesta);
                setTimeout(function () {
                    $(".enviando").hide();
                    $(".wrap-send").html(
                        "<h1>¡Muchas Gracias por tu confirmación te esperamos en nuestra Boda!</h1>"
                    );
                }, 3000);
            },
            error: function (respuesta) {
                console.log("La respuesta es: " + respuesta);
                $(".enviando").hide();
                $(".wrap-send").html(
                    "<h1>¡Muchas Error Gracias por tu confirmación te esperamos en nuestra Boda!</h1>"
                );
            }
        });
    },
    galeriaOpt: {
        autoplay: true,
        autoplayHoverPause: true,
        loop: true,
        margin: 40,
        stagePadding: 20,
        responsiveClass: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            568: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    },
    galeria: function () {
        $(".galeria .owl-carousel").owlCarousel(this.galeriaOpt);
    },
    recomendacionesOpt:{
       margin: 25,
       loop: true,
       autoplay: true,
       autoplayTimeout: 2000,
       autoplayHoverPause: true,
       animateOut: 'fadeOut',
       stagePadding: 34,
       responsive: {
           0: {
               items: 1
           },
           600: {
               items: 2,
           },
           1000: {
               items: 3
           }
       }
   },
   recomendaciones:function(){
       $("#recomendaciones-carousel").owlCarousel(this.recomendacionesOpt);
    },
   reloj: function () {
        setInterval(function () {
            contador("2020-11-28T21:00:00.000Z");
        }, 1000);
    },
   abrirRecomendacion: function (recomendacion) {
        // e.preventDefault();
    /*     $(".modal-wrap").load(recomendacion + ".html"); */
        $(".modal-container").fadeIn();
    },
	reproducirMusica: function () {
		var _e = $(".btn-musica"),
			_a = $("audio");
		_e.toggleClass("pausa");
		(_e.hasClass("pausa")) ? _a.get(0).pause(): _a.get(0).play();
		
	},
    cerrarModal: function (e) {
       $('.modal-container').fadeOut();
    },

    init: function () {
        this.galeria();
       this.recomendaciones();
        this.reloj();
    }
};
app.init();
setTimeout(function(){
	$(".btn-musica").addClass("hide");
},1800);
var esconderMenu = function(event){
	event.preventDefault()
	$(".menu-mini").hide()
  }  

$.stellar({
    responsive: true
});
