//######################################################################################################
//########################################### | PAGINATION | ###########################################
//######################################################################################################

$('.pagOne').on('click', function(){
	$('.destinoMercadoria').hide();
	$('.tipoCalculo').hide();
	$('.contribuinte').hide();
	$('.simplesNacional').hide();
	$('.estado').fadeIn(500);
	$('.labelParametros').text('Estado');
	$('.pagOne').html('<i class="fas fa-circle"></i>');
	$('.pagTwo').html('<i class="far fa-circle"></i>');
	$('.pagThree').html('<i class="far fa-circle"></i>');
	$('.pagFour').html('<i class="far fa-circle"></i>');
	$('.pagFive').html('<i class="far fa-circle"></i>');
});

$('.pagTwo').on('click', function(){
	$('.estado').hide();
	$('.tipoCalculo').hide();
	$('.contribuinte').hide();
	$('.simplesNacional').hide();
	$('.destinoMercadoria').fadeIn(500);
	$('.labelParametros').text('Destino');
	$('.pagOne').html('<i class="far fa-circle"></i>');
	$('.pagTwo').html('<i class="fas fa-circle"></i>');
	$('.pagThree').html('<i class="far fa-circle"></i>');
	$('.pagFour').html('<i class="far fa-circle"></i>');
	$('.pagFive').html('<i class="far fa-circle"></i>');
});

$('.pagThree').on('click', function(){
	$('.estado').hide();
	$('.destinoMercadoria').hide();
	$('.contribuinte').hide();
	$('.simplesNacional').hide();
	$('.tipoCalculo').fadeIn(500);
	$('.labelParametros').text('Tipo de Cálculo');
	$('.pagOne').html('<i class="far fa-circle"></i>');
	$('.pagTwo').html('<i class="far fa-circle"></i>');
	$('.pagThree').html('<i class="fas fa-circle"></i>');
	$('.pagFour').html('<i class="far fa-circle"></i>');
	$('.pagFive').html('<i class="far fa-circle"></i>');
});

$('.pagFour').on('click', function(){
	$('.estado').hide();
	$('.destinoMercadoria').hide();
	$('.tipoCalculo').hide();
	$('.simplesNacional').hide();
	$('.contribuinte').fadeIn(500);
	$('.labelParametros').text('Contribuinte');
	$('.pagOne').html('<i class="far fa-circle"></i>');
	$('.pagTwo').html('<i class="far fa-circle"></i>');
	$('.pagThree').html('<i class="far fa-circle"></i>');
	$('.pagFour').html('<i class="fas fa-circle"></i>');
	$('.pagFive').html('<i class="far fa-circle"></i>');
});
$('.pagFive').on('click', function(){
	$('.estado').hide();
	$('.destinoMercadoria').hide();
	$('.tipoCalculo').hide();
	$('.contribuinte').hide();
	$('.simplesNacional').fadeIn(500);
	$('.labelParametros').text('Simples Nacional');
	$('.pagOne').html('<i class="far fa-circle"></i>');
	$('.pagTwo').html('<i class="far fa-circle"></i>');
	$('.pagThree').html('<i class="far fa-circle"></i>');
	$('.pagFour').html('<i class="far fa-circle"></i>');
	$('.pagFive').html('<i class="fas fa-circle"></i>');
});

