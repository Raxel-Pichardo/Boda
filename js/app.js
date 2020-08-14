// https://www.flvto.biz/fr/
// https://codebeautify.org/excel-to-json

var url = window.location.search.replace(/\?/g, '');

var invitados = {
    'AYT1': {
        'codigo': 'AYT1',
        'invitado': '',
        'asistentes': 1,
        'correo': '',
        'telefono':""
    },
    'AYT2': {
        'codigo': 'AYT2',
        'invitado': '',
        'asistentes': 2,
        'correo': '',
        'telefono':""
    },
    'AYT3': {
        'codigo': 'AYT3',
        'invitado': '',
        'asistentes': 3,
        'correo': '',
        'telefono':""
    },
    'AYT4': {
        'codigo': 'AYT4',
        'invitado': '',
        'asistentes': 4,
        'correo': '',
        'telefono':""
    },
    'AYT5': {
        'codigo': 'AYT5',
        'invitado': '',
        'asistentes': 5,
        'correo': '',
        'telefono':""
    },
    'AYT6': {
        'codigo': 'AYT6',
        'invitado': '',
        'asistentes': 6,
        'correo': '',
        'telefono':""
    },
    'AYT7': {
        'codigo': 'AYT7',
        'invitado': '',
        'asistentes': 7,
        'correo': '',
        'telefono':""
    },
    'AYT8': {
        'codigo': 'AYT8',
        'invitado': '',
        'asistentes': 8,
        'correo': '',
        'telefono':""
    },
    'AYT9': {
        'codigo': 'AYT9',
        'invitado': '',
        'asistentes': 9,
        'correo': '',
        'telefono':""
	}, 
	"AYT10":{
		"codigo": "AYT10",
		"invitado": "PABLO VÃ€ZQUEZ",
		"asistentes": " CARMEN MOYA",
		"correo": " PABLO VÃ€ZQUEZ",
		"telefono":""
	},
	 "AYT11":{
		"codigo": "AYT11",
		"invitado": "OMAR VÃ€ZQUEZ Y KARLA ANDRADE",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT12":{
		"codigo": "AYT12",
		"invitado": "EDGAR ROBLES Y KARINA VÃ€ZQUEZ",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT13":{
		"codigo": "AYT13",
		"invitado": "ANTONIO HERNÃ€NDEZ Y MARLENE VÃ€ZQUEZ",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT14":{
		"codigo": "AYT14",
		"invitado": "DALY AGUILAR Y GEORGINA HERNÃ€NDEZ",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT15":{
		"codigo": "AYT15",
		"invitado": "CUCA MOYA TORRES",
		"asistentes": "1",
		"correo": "",
		"telefono":""
	},
	 "AYT16":{
		"codigo": "AYT16",
		"invitado": "RAMÃ’N MOYA",
		"asistentes": " TERESA SANTACRUZ Y MICHELLE MOYA",
		"correo": "3",
		"telefono":""
	},
	 "AYT17":{
		"codigo": "AYT17",
		"invitado": "OMAR HERNÃ€NDEZ Y NALLELI MOYA",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT18":{
		"codigo": "AYT18",
		"invitado": "TERESA MOYA TORRES",
		"asistentes": "1",
		"correo": "",
		"telefono":""
	},
	 "AYT19":{
		"codigo": "AYT19",
		"invitado": "SERGIO MOYA TORRES",
		"asistentes": "1",
		"correo": "",
		"telefono":""
	},
	 "AYT20":{
		"codigo": "AYT20",
		"invitado": "ROGELIO MOYA Y JOSEFINA CHÃ€VEZ",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT21":{
		"codigo": "AYT21",
		"invitado": "RAÃ™L MOYA Y LICHA REVELES",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT22":{
		"codigo": "AYT22",
		"invitado": "SALVADOR GARCÃŒA",
		"asistentes": " EVA MOYA",
		"correo": " LESLIE MOYA Y ABRAHAM MOYA",
		"telefono":""
	},
	 "AYT23":{
		"codigo": "AYT23",
		"invitado": "MIGUEL HERNÃ€NDEZ",
		"asistentes": " TERESA GARCÃŒA",
		"correo": " OSURY GARCÃŒA Y ARMANDO GARCÃŒA",
		"telefono":""
	},
	 "AYT24":{
		"codigo": "AYT24",
		"invitado": "TOMÃ€S GOMEZ Y SILVIA GARCÃŒA",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT25":{
		"codigo": "AYT25",
		"invitado": "GENÃ€RO GARCÃŒA Y ESPOSA",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT26":{
		"codigo": "AYT26",
		"invitado": "LILIA GARCÃŒA RODEA",
		"asistentes": "1",
		"correo": "",
		"telefono":""
	},
	 "AYT27":{
		"codigo": "AYT27",
		"invitado": "MARIO GARCÃŒA RODEA",
		"asistentes": "1",
		"correo": "",
		"telefono":""
	},
	 "AYT28":{
		"codigo": "AYT28",
		"invitado": "JACKELINE GARCÃŒA",
		"asistentes": "1",
		"correo": "",
		"telefono":""
	},
	 "AYT29":{
		"codigo": "AYT29",
		"invitado": "ATENAS VALLEJO",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT30":{
		"codigo": "AYT30",
		"invitado": "MIGUEL ANGEL HERNÃ€NDEZ Y MARU EUGENIA ORTÃŒZ",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT31":{
		"codigo": "AYT31",
		"invitado": "ROSARIO CABRERA Y HENRY POMPA",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT32":{
		"codigo": "AYT32",
		"invitado": "MICHEL Y YESSENIA POMPA",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT33":{
		"codigo": "AYT33",
		"invitado": "VANESSA Y SAÃ™L POMPA",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT34":{
		"codigo": "AYT34",
		"invitado": "ESTEBAN CABRERA Y SOLEDAD",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT35":{
		"codigo": "AYT35",
		"invitado": "ELOY CABRERA Y CARMEN ",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT36":{
		"codigo": "AYT36",
		"invitado": "ANDRES LÃ’PEZ",
		"asistentes": " PATRICIA Y ANDREA",
		"correo": "3",
		"telefono":""
	},
	 "AYT37":{
		"codigo": "AYT37",
		"invitado": "ALAN LÃ’PEZ Y LIZ MACOTELA",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT38":{
		"codigo": "AYT38",
		"invitado": "KEVIN LÃ’PEZ Y EVELIN ",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT39":{
		"codigo": "AYT39",
		"invitado": "ESTEFANIA LÃ’PEZ Y ESPOSO",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT40":{
		"codigo": "AYT40",
		"invitado": "ADALBERTO CABRERA Y FAMILIA",
		"asistentes": "4",
		"correo": "",
		"telefono":""
	},
	 "AYT41":{
		"codigo": "AYT41",
		"invitado": "CINTHIA LÃ’PEZ Y CARLOS",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT42":{
		"codigo": "AYT42",
		"invitado": "ABYGAIL LÃ’PEZ",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT43":{
		"codigo": "AYT43",
		"invitado": "ENRIQUE MENDEZ Y ESPOSA",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT44":{
		"codigo": "AYT44",
		"invitado": "DANIEL Y VIANEY",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT45":{
		"codigo": "AYT45",
		"invitado": "ALDO Y EDWIN VILLEGAS",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT46":{
		"codigo": "AYT46",
		"invitado": "ENRIQUE RUÃŒZ Y LAURA",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT47":{
		"codigo": "AYT47",
		"invitado": "ARELY RUÃŒZ Y GALE ",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT48":{
		"codigo": "AYT48",
		"invitado": "ARLETH RUÃŒZ E HIJAS",
		"asistentes": "3",
		"correo": "",
		"telefono":""
	},
	 "AYT49":{
		"codigo": "AYT49",
		"invitado": "ROGELIO RAMÃŒREZ",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT50":{
		"codigo": "AYT50",
		"invitado": "ESPERANZA Y GELOS POMPA",
		"asistentes": "4",
		"correo": "",
		"telefono":""
	},
	 "AYT51":{
		"codigo": "AYT51",
		"invitado": "MIRIAM Y HUMBERTO ",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT52":{
		"codigo": "AYT52",
		"invitado": "TOMAS VÃ€ZQUEZ Y ESPOSA",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT53":{
		"codigo": "AYT53",
		"invitado": "ALDO MARAVILLA Y ESPOSA",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT54":{
		"codigo": "AYT54",
		"invitado": "NICOLAS Y AMALIA",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT55":{
		"codigo": "AYT55",
		"invitado": "LUIS LEON Y GENDY",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT56":{
		"codigo": "AYT56",
		"invitado": "LUIS BENHUMEA Y VIRIDIANA",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT57":{
		"codigo": "AYT57",
		"invitado": "LUIS VARGAS ",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT58":{
		"codigo": "AYT58",
		"invitado": "JOSE BADILLO Y GUADALUPE",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT59":{
		"codigo": "AYT59",
		"invitado": "ARTURO NAVARRETE Y ESPOSA",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT60":{
		"codigo": "AYT60",
		"invitado": "RODRIGO DÃ¬AZ BARRIGA",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT61":{
		"codigo": "AYT61",
		"invitado": "ESTHER BURGOS",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT62":{
		"codigo": "AYT62",
		"invitado": "IVÃ€N",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT63":{
		"codigo": "AYT63",
		"invitado": "MERELIN",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT64":{
		"codigo": "AYT64",
		"invitado": "ITZEL ORTÃ¬Z",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT65":{
		"codigo": "AYT65",
		"invitado": "ISAC DONOVAN",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT66":{
		"codigo": "AYT66",
		"invitado": "ROSA ISELA",
		"asistentes": "1",
		"correo": "",
		"telefono":""
	},
	 "AYT67":{
		"codigo": "AYT67",
		"invitado": "BONCHEA",
		"asistentes": "1",
		"correo": "",
		"telefono":""
	},
	 "AYT68":{
		"codigo": "AYT68",
		"invitado": "ARI Y LUIS MIGUEL",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT69":{
		"codigo": "AYT69",
		"invitado": "IRIANA E ISAC",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT70":{
		"codigo": "AYT70",
		"invitado": "NANCY Y ADOLFO",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT71":{
		"codigo": "AYT71",
		"invitado": "EDY E IVÃ€N ",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	},
	 "AYT72":{
		"codigo": "AYT72",
		"invitado": "SAÃ™L Y MARINA",
		"asistentes": "2",
		"correo": "",
		"telefono":""
	}
};

var app = {
    invitadosFn: function () {
        console.log(invitados[url])
        $(".usr-nombre").val(invitados[url].invitado);
        $(".usr-correo").val(invitados[url].email);
        for (var i = 1; i <= 6; i++) {
            $("#invitados").append("<option value='" + i + "'>" + i + " invitado(s)</option>");
        }
    },
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
                        "<h1>Â¡Muchas Gracias por tu confirmaciÃ³n te esperamos en nuestra Boda!</h1>"
                    );
                }, 3000);
            },
            error: function (respuesta) {
                console.log(respuesta);
                $(".enviando").hide();
                $(".wrap-send").html(
                    "<h1>Â¡Muchas Gracias por tu confirmaciÃ³n te esperamos en nuestra Boda!</h1>"
                );
            }
        });
        firebase.database().ref("datosBoda/" + data.uid_fire + "/invitados").push({
            nombre_invitado: data.user_name,
            correo_invitado: data.user_email,
            num_invitado: data.user_invitados,
            deseos_invitados: data.user_comentarios,
            fecha_invitado: Date(Date.now()),
            alergia: alergia_input,
            alcohol: alcohol_input,
            cancion: cancion_input,
            codigo: window.location.search.replace(/\?/g, '')

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
        $(".modal-wrap").load(recomendacion + ".html");
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


// Recomendaciones
// $("#recomendaciones-carousel a").on("click", function (e) {
//     _data = $(this).data("modal");
//     if (_data != "mesa") {
//         event.preventDefault();
//         $(".modal-wrap").load(_data + ".html");
//         $(".modal-container").fadeIn();

//     }
// });
app.invitadosFn();