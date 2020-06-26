//#########################################################################################################
//#										Footer                                                            #
//#########################################################################################################	
var larguraDocumento = $(document).width()
var alturaDocumento = $(document).height()
var larguraJanela = $(window).width()
var alturaJanela = $(window).height()

$('body').on('click dblclick keydown keypress keyup mousedown mousemove mouseout mouseover mouseup', function () {
    larguraDocumento = $(document).width()
    alturaDocumento = $(document).height()
    larguraJanela = $(window).width()
    alturaJanela = $(window).height()

    if (alturaDocumento > alturaJanela) {
        $('.footer').css('position', 'static');
    } else { $('.footer').css('position', 'fixed'); }



})
