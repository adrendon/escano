var MY_MAPTYPE_ID = 'Stylo001';

function initialize() {
  var featureOpts = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#81BDD6"
            },
            {
                "visibility": "on"
            }
        ]
    }
];
  var myGente = new google.maps.LatLng(6.257522,-75.564547);
  var Kinee = new google.maps.LatLng(6.257522,-75.564547);
  var myGentee = new google.maps.LatLng(6.161903,-75.605361);
  var Kineee = new google.maps.LatLng(6.161903,-75.605361);
  var myGenteee = new google.maps.LatLng(6.554111,-75.822972);
  var Kineeee = new google.maps.LatLng(6.554111,-75.822972);
  var mapOptions001 = {
    zoom: 18,
     mapTypeControl: false,
    zoomControl: true,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.LEFT_TOP,
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID,
    scaleControl: false,
    streetViewControl: false,
    center: myGente
  }
  var mapOptions002 = {
    zoom: 18,
     mapTypeControl: false,
    zoomControl: true,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.LEFT_TOP,
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID,
    scaleControl: false,
    streetViewControl: false,
    center: myGentee
  }
  var mapOptions003 = {
    zoom: 18,
     mapTypeControl: false,
    zoomControl: true,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.LEFT_TOP,
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID,
    scaleControl: false,
    streetViewControl: false,
    center: myGenteee
  }
  var mapa001 = new google.maps.Map(document.getElementById('map-canvas001'), mapOptions001);
  var mapa002 = new google.maps.Map(document.getElementById('map-canvas002'), mapOptions002);
  var mapa003 = new google.maps.Map(document.getElementById('map-canvas003'), mapOptions003);

  var styledMapOptions = {
    name: 'Stylo001'
  };

var image = 'img/14_15/marcador.png';

var marker001 = new google.maps.Marker({
    position: Kinee,
    map: mapa001,
    animation: google.maps.Animation.BOUNCE,
    title: 'Map 01',
    icon: image
});

var marker002 = new google.maps.Marker({
    position: Kineee,
    map: mapa002,
    animation: google.maps.Animation.BOUNCE,
    title: 'Map 02',
    icon: image
});

var marker003 = new google.maps.Marker({
    position: Kineeee,
    map: mapa003,
    animation: google.maps.Animation.BOUNCE,
    title: 'Map 03',
    icon: image
});

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  mapa001.mapTypes.set(MY_MAPTYPE_ID, customMapType);
  mapa002.mapTypes.set(MY_MAPTYPE_ID, customMapType);
  mapa003.mapTypes.set(MY_MAPTYPE_ID, customMapType);

}

jQuery('#fb5-book').not('.web').on('click', function (e) {
    e.preventDefault();
});




//variables

var swMenuServicios = false;
var imgFondo;
var classGallery;
var Gallery = false;
var idTitulo = jQuery('.tituloLeft, .tituloRight');
var idBgDown = jQuery('.bgDown');
var idBg = jQuery('.bg');
var delay = 400;
var delayTwo = 800;

//no permite que se repitan las animaciones

function disableAnimate() {
    var pages = jQuery('#fb5-book').turn('view');
    setTimeout(function () {
        pages.forEach(function (element) {
            if (element !== 0) {
                jQuery('div[page=' + element + '] .animated').removeClass('animated fadeInRight fadeInLeft fadeInDown fadeInUp logoAnimated logoAnimatedEnd');
            }
        });
    }, 4000);
}

//Page 002 - 003

function empresa($this) {
    var idContent = jQuery($this).parent().attr('href');
    var elemContent = jQuery(idContent);
    if (elemContent.hasClass('slide')) {
        elemContent.toggleClass('slide');
    } else {
        jQuery('.contenido > div').removeClass('slide');
        elemContent.toggleClass('slide');
    }
}

//Page 004 - 005

function showVentajas($this) {
    jQuery($this).addClass('titleventajas').parent().parent().addClass('leftWidht');
    jQuery('.titleLeft, .titleRight').addClass('titleMostrar');
    jQuery('.btnTitle').removeClass('titleventajasMostrar');
    jQuery('.hidden').addClass('ocultar');
    jQuery('.block_left, .block_Right').addClass('block_Mostrar');
}

function hideVentajas () {
    hideContebtVentajas()
}

//Page 006 - 007

function showInformatica() {
    var idcontenido = jQuery('.blockLeft');
    if (idcontenido.hasClass('block_Mostrar')) {
        idcontenido.toggleClass('block_Mostrar');
    } else {
        jQuery('.contenido > div').removeClass('block_Mostrar');
        idcontenido.toggleClass('block_Mostrar');
    }
};

function hideContebtVentajas() {
    setTimeout(function () {
        jQuery('.contenido > div').removeClass('slide');
        jQuery('.leftWidht').removeClass('leftWidht');
        jQuery('.titleLeft, .titleRight').removeClass('titleMostrar');
        jQuery('.btnTitle').removeClass('delay').addClass('titleventajasMostrar');
        jQuery('.hidden').removeClass('ocultar');
        jQuery('.block_left, .block_Right, .blockLeft').removeClass('block_Mostrar');
        jQuery('.serviciosMain').removeClass('serviciosMainActive');
        jQuery('.imgPage').removeClass('imgPageMostrar');
        jQuery('.btnMenu').removeClass('btnMenuMostrar');
        jQuery('.imgBtnLeft').removeClass('imgBtnLeftActive');
        jQuery('.imgBtnRight').removeClass('imgBtnRightActive');
        jQuery('.tituloLeft, .tituloRight').removeClass('tituloMostrar');
        jQuery('.bg').removeClass('bgMostrar');
        jQuery('.bgDown').removeClass('bgDownMostrar');
        jQuery('.btnMenuGallery').removeClass('btnMenuGalleryMostrar');
        jQuery('.contentGallery').removeClass('contentGalleryMostrar');
        jQuery('.contentMostrar').removeClass('contentMostrar');
        jQuery('.contentShowX').removeClass('contentShowX');
        jQuery('.contentPage014 > div').removeClass('slide');
    }, delayTwo);
}

//Page 008 - 009

function servicios($this) {
    var idSubMenu = jQuery($this).parent().attr('href');
    imgFondo = jQuery($this).parent().attr('class');
    var indexMenu = jQuery($this).parent().parent().attr('data-item');
    var subMenu = jQuery(idSubMenu).parent();
    setTimeout(function () {
        jQuery('.imgPage').removeClass('imgPageMostrar');
        jQuery('.imgPage[data-item="' + indexMenu + '"]').addClass('imgPageMostrar ' + imgFondo);
        if (!subMenu.hasClass('btnMenuMostrar')) {
            jQuery('.btnMenu').removeClass('btnMenuMostrar');
            subMenu.addClass('btnMenuMostrar');
        }
    }, 400);
    jQuery('li[data-item]').removeClass('serviceActive');
    jQuery($this).parent().parent().addClass('serviceActive');
    jQuery('.serviciosMain').addClass('serviciosMainActive');
    jQuery('.imgBtnLeft').addClass('imgBtnLeftActive');
    jQuery('.imgBtnRight').addClass('imgBtnRightActive');

    if (jQuery('.imgPage').hasClass('zIndex')) {
        jQuery('.imgPage').removeClass('zIndex');
    }
}

function serviciosItem($this) {
    var idElemContent = jQuery($this).parent().attr('href');
    var elemContent = jQuery(idElemContent);
    jQuery('.imgPage').addClass('zIndex');
    if (elemContent.hasClass('contentMostrar')) {
        elemContent.removeClass('contentMostrar');
    } else {
        elemContent.siblings().removeClass('contentMostrar');
        elemContent.addClass('contentMostrar');
    }
}

//Page 010 - 011

function fnc_show_especialistas() {
    idBgDown.addClass('bgDownMostrar');
    setTimeout(function () {
        idTitulo.addClass('tituloMostrar');
    }, delay);
    setTimeout(function () {
        idBg.addClass('bgMostrar');
    }, delayTwo);
}

function fnc_hide_especialistas() {
    idTitulo.removeClass('tituloMostrar');
    setTimeout(function () {
        idBg.removeClass('bgMostrar');
    }, delay);
    setTimeout(function () {
        idBgDown.removeClass('bgDownMostrar');
    }, delayTwo);
}

//Page 012 - 013

function gallery($this) {
    var indexMenuGallery = jQuery($this).parent().parent().attr('data-item');
    var subMenuGallery = jQuery('.galleryContent').find('.btnMenuGallery');
    var idElemMenu = jQuery(subMenuGallery).parent().parent().find('.imagesGalleryBig .galleryPage .contentGallery');
    var elemtMenu = jQuery(idElemMenu);

    if (jQuery('.btnMenuGallery[data-item="' + indexMenuGallery + '"]').hasClass('btnMenuGalleryMostrar')) {
        jQuery('.btnMenuGallery[data-item="' + indexMenuGallery + '"]').removeClass('btnMenuGalleryMostrar');
    } else {
        jQuery('.btnMenuGallery').removeClass('btnMenuGalleryMostrar');
        jQuery('.btnMenuGallery[data-item="' + indexMenuGallery + '"]').toggleClass('btnMenuGalleryMostrar');
    }

    if (elemtMenu.hasClass('contentGalleryMostrar')) {
        elemtMenu.removeClass('contentGalleryMostrar');
    }
}

function galleryItems($this) {
    var idElemContent = jQuery($this).parent().attr('href');
    var elemContent = jQuery(idElemContent);
    if (elemContent.hasClass('contentGalleryMostrar')) {
        elemContent.removeClass('contentGalleryMostrar');
    } else {
        elemContent.siblings().removeClass('contentGalleryMostrar');
        elemContent.addClass('contentGalleryMostrar');
    }
}


//Page 013 - 014

function contactenos($this) {
    var idContent = jQuery($this).parent().attr('href');
    var subMenu = jQuery('.p15').find('.thumbnails');
    var mapas = jQuery('.p15').find('.iframe');

    var elemContent = jQuery(idContent);
    if (elemContent.hasClass('slide')) {
        elemContent.toggleClass('slide');
    } else {
        jQuery('.contentPage014 > div').removeClass('slide');
        elemContent.toggleClass('slide');
    }

    if (subMenu.hasClass('contentShowX')) {
        subMenu.removeClass('contentShowX');
    }

     if (mapas.hasClass('contentShowX')) {
        mapas.removeClass('contentShowX');
    }
}

function mapas($this) {
    var subMenu = jQuery('.p15').find('.thumbnails');
    var subMenuGallery = jQuery('.contentPage014').find('.contentPage');

    if (subMenu.hasClass('contentShowX')) {
        subMenu.toggleClass('contentShowX');
    } else {
        subMenu.hasClass('contentShowX');
        subMenu.toggleClass('contentShowX');
    }

    if (subMenuGallery.hasClass('slide')) {
        subMenuGallery.removeClass('slide');
    }

}

function mapa ($this) {
    var idElemContent = jQuery($this).parent().attr('href');
    var elemContent = jQuery(idElemContent);
    if (elemContent.hasClass('contentShowX')) {
        elemContent.removeClass('contentShowX');
    } else {
        elemContent.siblings().removeClass('contentShowX');
        elemContent.addClass('contentShowX');
    }
}

window.onload = function () {

    disableAnimate();

    jQuery('.prev, .next').on('click', function () {
        disableAnimate();
        var pages = jQuery('#fb5-book').turn('view');
        pages.forEach(function (element) {
            if (element === 2 ) {
                jQuery('.p8').removeClass('btnMenuMostrar, imgPageMostrar, contentMostrar');
            }
        });

        hideContebtVentajas();
        gallery();
        initialize();
    });

    // jQuery('a').on('click', function (e) {
    //    if (!jQuery(this).hasClass('web')) {
    //        e.preventDefault();
    //    }
    // });

};