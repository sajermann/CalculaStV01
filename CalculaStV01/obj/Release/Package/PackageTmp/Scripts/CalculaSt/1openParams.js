//######################################################################################################
//########################################### | OPEN PARAMS | ##########################################
//######################################################################################################
$(document).ready(function() {
openParams()
});

function openParams(){
	
	$.alert({
	// columnClass: 'col-md-4 col-md-offs	et-8 col-xs-4 col-xs-offset-8 col-xl-8',
	// columnClass: 'col-md-4 col-md-offs	et-8 col-xs-4 col-xs-offset-8',
	columnClass: 'col-md-4 col-md-offset-8 col-xs-4 col-xs-offset-8',
	containerFluid: true,
	boxWidth: '310px',
    useBootstrap: false,
	//type: 'red',
	theme: 'dark',
	title: '<strong>Defina os Parâmetros!</strong>',
	icon: 'fas fa-exclamation-triangle',
	onOpenBefore: function () {},
	onAction: function () {},
	content: //'Selecione os parâmetros conforme <br />deseja simular!' + 
'<style>'+
'fieldset.fieldSeparador {'+
'    border: 1px groove #ddd !important;'+
'    padding: 0 1.4em 0.4em 0.4em !important;'+
'    margin: 0 0 0.5em 0 !important;'+
'    -webkit-box-shadow:  0px 0px 0px 0px #000;'+
'            box-shadow:  0px 0px 0px 0px #000;'+
'}'+
'legend.fieldSeparador {'+
'        font-size: 1.2em !important;'+
'        font-weight: bold !important;'+
'        text-align: left !important;'+
'        width:auto;'+
'        padding:0 10px;'+
'        border-bottom:1px;'+
'    }'+
'legend{margin-bottom:0px;}'+
'</style>'+
'<div class="divEstado" style="width:275px;">'+
'<fieldset class="fieldSeparador">'+
'<legend class="fieldSeparador">Estado</legend>'+
'<select class="custom-select textBoxEstado" id="inputGroupSelect01" style="width:260px;border-radius:0">'+
'<option value="">Selecione...</option><option value="AC">Acre</option><option value="AL">Alagoas</option><option value="AP">Amapá</option><option value="AM">Amazonas</option><option value="BA">Bahia</option><option value="CE">Ceará</option><option value="DF">Distrito Federal</option><option value="ES">Espiríto Santo</option><option value="GO">Goias</option><option value="MA">Maranhão</option><option value="MT">Mato Grosso</option><option value="MS">Mato Grosso do Sul</option><option value="MG">Minas Gerais</option><option value="PA">Pará</option><option value="PB">Paraíba</option><option value="PR">Paraná</option><option value="PE">Pernambuco</option><option value="PI">Piauí</option><option value="RJ">Rio de Janeiro</option><option value="RN">Rio Grande do Norte</option><option value="RS">Rio Grande do Sul</option><option value="RO">Rondônia</option><option value="RR">Roraima</option><option value="SC">Santa Catarina</option><option value="SP">São Paulo</option><option value="SE">Sergipe</option><option value="TO">Tocantins</option>'+
'</select>'+
'</fieldset>'+
'</div>'+
'<div class="divDestino" style="width:275px;">'+
'<fieldset class="fieldSeparador">'+
'<legend class="fieldSeparador">Destino</legend>'+
'<div class="botoesDestinoMaterial" style="margin-left:10px">'+
// '<input type="button" class="botaoDestinoMaterialConsumo btn btn-danger" value="Consumo" disabled>  <input type="button" class="botaoDestinoMaterialRevenda btn btn-danger" value="Revenda" disabled>'+
'<div class="form-check form-check-inline">'+
' <input class="form-check-input radioDestinoMaterialConsumo" type="radio" name="inlineRadioOptions1" id="radioDestinoMaterialConsumo" value="Consumo" disabled>'+
'  <label class="form-check-label" for="radioDestinoMaterialConsumo">Consumo</label>'+
'</div>'+
'<div class="form-check form-check-inline">'+
'  <input class="form-check-input radioDestinoMaterialRevenda" type="radio" name="inlineRadioOptions1" id="radioDestinoMaterialRevenda" value="Revenda" disabled>'+
'  <label class="form-check-label" for="radioDestinoMaterialRevenda">Revenda</label>'+
'</div>'+
'</div>' + 
'</div>'+
'<div class="divTipoCalculo" style="width:275px;">'+
'<fieldset class="fieldSeparador">'+
'<legend class="fieldSeparador">Tipo de Cálculo</legend>'+
'<div class="botoesTipoCalculo" style="margin-left:10px">'+
// '<input type="button" class="botaoTipoCalculoFora btn btn-danger" value="Fora" disabled>  <input type="button" class="botaoTipoCalculoDentro btn btn-danger" value="Dentro" disabled>  <input type="button" class="botaoTipoCalculoBsDupla btn btn-danger" value="BS Dupla" disabled>'+
'<div class="form-check form-check-inline">'+
' <input class="form-check-input radioTipoCalculoFora" type="radio" name="inlineRadioOptions2" id="radioTipoCalculoFora" value="Fora" disabled>'+
'  <label class="form-check-label" for="radioTipoCalculoFora">Fora</label>'+
'</div>'+
'<div class="form-check form-check-inline">'+
'  <input class="form-check-input radioTipoCalculoDentro" type="radio" name="inlineRadioOptions2" id="radioTipoCalculoDentro" value="Dentro" disabled>'+
'  <label class="form-check-label" for="radioTipoCalculoDentro">Dentro</label>'+
'</div>'+
'<div class="form-check form-check-inline">'+
'  <input class="form-check-input radioTipoCalculoBsDupla" type="radio" name="inlineRadioOptions2" id="radioTipoCalculoBsDupla" value="BS Dupla" disabled>'+
'  <label class="form-check-label" for="radioTipoCalculoBsDupla">BS Dupla</label>'+
'</div>'+
'</div>' + 
'</div>'+

'<div class="divContribuinte" style="width:275px;">'+
'<fieldset class="fieldSeparador">'+
'<legend class="fieldSeparador">Contribuinte</legend>'+
'<div class="botoesContribuinte" style="margin-left:10px">'+
// '<input type="button" class="botaoContribuinteSim btn btn-danger" value="Sim" disabled>  <input type="button" class="botaoContribuinteNao btn btn-danger" value="Não" disabled>'+
'<div class="form-check form-check-inline">'+
' <input class="form-check-input radioContribuinteSim" type="radio" name="inlineRadioOptions3" id="radioContribuinteSim" value="Sim" disabled>'+
'  <label class="form-check-label" for="radioContribuinteSim">Sim</label>'+
'</div>'+
'<div class="form-check form-check-inline">'+
'  <input class="form-check-input radioContribuinteNao" type="radio" name="inlineRadioOptions3" id="radioContribuinteNao" value="Nao" disabled>'+
'  <label class="form-check-label" for="radioContribuinteNao">Não</label>'+
'</div>'+
'</div>' + 
'</div>'+

'<div class="divSimplesNacional" style="width:275px;">'+
'<fieldset class="fieldSeparador">'+
'<legend class="fieldSeparador">Simples Nacional</legend>'+
'<div class="botoesSimplesNacional" style="margin-left:10px">'+
// '<input type="button" class="botaoSimplesNacionalSim btn btn-danger" value="Sim" disabled>  <input type="button" class="botaoSimplesNacionalNao btn btn-danger" value="Não" disabled>'+
'<div class="form-check form-check-inline">'+
' <input class="form-check-input radioSimplesNacionalSim" type="radio" name="inlineRadioOptions4" id="radioSimplesNacionalSim" value="Sim" disabled>'+
'  <label class="form-check-label" for="radioSimplesNacionalSim">Sim</label>'+
'</div>'+
'<div class="form-check form-check-inline">'+
'  <input class="form-check-input radioSimplesNacionalNao" type="radio" name="inlineRadioOptions4" id="radioSimplesNacionalNao" value="Nao" disabled>'+
'  <label class="form-check-label" for="radioSimplesNacionalNao">Não</label>'+
'</div>'+
'</div>' + 
'</div>'+
'<div class="input-group mb-3 boxParametros" style="display:none">'+
'<div class="input-group-prepend">'+
'<span class="input-group-text" id="inputGroup-sizing-default" style="width:150px;border-radius:0">Parâmetros</span>'+
'</div>'+	
'<div class="parametros" style="display: flex;justify-content: center;align-items: center;margin: 0px 10px;padding: 7px;background: blue;color: white;border-radius: .25rem;"></div></div>'+
'</div>'+
// '<div class="input-group mb-3 boxStatus" style="display:none">'+
'<div class="divStatus boxStatus" style="display:none; width:272px;">'+
'<fieldset class="fieldSeparador">'+
'<legend class="fieldSeparador">Status</legend>'+
'<div class="status" style="display: flex;justify-content: center;align-items: center;margin: 0px 10px;padding: 7px;background: blue;color: white;border-radius: .25rem;"></div></div>'+
'</div>'+
'<script>'+
'$(".textBoxEstado").change(function(){'+
'if($(".textBoxEstado").val() == ""){'+
'$(".radioDestinoMaterialConsumo").prop("checked", false);'+
'$(".radioDestinoMaterialConsumo").attr("disabled", "true");'+
'$(".radioDestinoMaterialRevenda").prop("checked", false);'+
'$(".radioDestinoMaterialRevenda").attr("disabled", "true");'+
'$(".radioTipoCalculoFora").prop("checked", false);'+
'$(".radioTipoCalculoFora").attr("disabled", "true");'+
'$(".radioTipoCalculoDentro").prop("checked", false);'+
'$(".radioTipoCalculoDentro").attr("disabled", "true");'+
'$(".radioTipoCalculoBsDupla").prop("checked", false);;'+
'$(".radioTipoCalculoBsDupla").attr("disabled", "true");'+
'$(".radioContribuinteSim").prop("checked", false);;'+
'$(".radioContribuinteSim").attr("disabled", "true");'+
'$(".radioContribuinteNao").prop("checked", false);;'+
'$(".radioContribuinteNao").attr("disabled", "true");'+
'$(".radioSimplesNacionalNao").prop("checked", false);;'+
'$(".radioSimplesNacionalNao").attr("disabled", "true");'+
'$(".radioSimplesNacionalSim").prop("checked", false);;'+
'$(".radioSimplesNacionalSim").attr("disabled", "true");'+

'estadoSelecionado = "";'+
'destinoMaterial = "";'+
'tipoCalculo = "";'+
'contribuinte = "";'+
'simplesNacional = "";'+
'$(".boxStatus").hide();'+
'paramsUpdate();'+
'}else{'+
'estadoSelecionado = $(".textBoxEstado").val();'+
'$(".radioDestinoMaterialConsumo").removeAttr("disabled");'+
'$(".radioDestinoMaterialRevenda").removeAttr("disabled");'+
'$(".boxStatus").show();}'+
'paramsUpdate();'+
'});'+

'$(".textBoxEstado").on("change", function(){'+
'ajeitaBotoesParametros();'+

'});'+

'$(".radioDestinoMaterialConsumo").click(function(){'+
'destinoMaterial = "Consumo";'+
'ajeitaBotoesParametros();'+

'});'+
'$(".radioDestinoMaterialRevenda").click(function(){'+
'destinoMaterial = "Revenda";'+
'ajeitaBotoesParametros();'+

'});'+	


'$(".radioTipoCalculoFora").click(function(){'+
'tipoCalculo = "Fora";'+
'ajeitaBotoesParametros();'+

'});'+

'$(".radioTipoCalculoDentro").click(function(){'+
'tipoCalculo = "Dentro";'+
'ajeitaBotoesParametros();'+

'});'+

'$(".radioTipoCalculoBsDupla").click(function(){'+
'tipoCalculo = "BS Dupla";'+
'ajeitaBotoesParametros();'+

'});'+

'$(".radioContribuinteSim").click(function(){'+
'contribuinte = "Sim";'+
'ajeitaBotoesParametros();'+

'});'+

'$(".radioContribuinteNao").click(function(){'+
'contribuinte = "Nao";'+
'ajeitaBotoesParametros();'+

'});'+

'$(".radioSimplesNacionalSim").click(function(){'+
'simplesNacional= "Sim";'+
'ajeitaBotoesParametros();'+
'});'+

'$(".radioSimplesNacionalNao").click(function(){'+
'simplesNacional = "Nao";'+
'ajeitaBotoesParametros();'+

'});'+

'function paramsUpdate(){'+
'$(".parametros").text(estadoSelecionado + destinoMaterial + tipoCalculo + contribuinte + simplesNacional);'+
'}'+

'</script>',
buttons: {
    Ok: {
	btnClass: 'btn-green',
	keys: ['enter'],
	action: function () {
		if(estadoSelecionado == '')
		{
			return false;
		}
		//else if(estadoSelecionado == 'MT' && destinoMaterial == 'Consumo' && contribuinte == 'Sim' && cargaMediaMT == ''){
		//	cargaMediaMTConsumo();
		//	return false;
		//}
		else if($('.status').text() == 'Padrão'){
		$('.estado').text(estadoSelecionado);
		$('.destinoMercadoria').text(destinoMaterial);
		$('.tipoCalculo').text(function(){if(tipoCalculo == ''){return 'Não Aplicado'}else{return tipoCalculo}});
		$('.contribuinte').text(function(){if(contribuinte == ''){return 'Não Aplicado'}else{return contribuinte}});
		$('.simplesNacional').text(function(){if(simplesNacional == ''){return 'Não Aplicado'}else{return simplesNacional}});
		$('#observacao').text(definirObs(estadoSelecionado, destinoMaterial, contribuinte, difal, tipoCalculo, simplesNacional));
		$('.footer').before(`<br /><br /><br /><div class="parametrosParaImpressao">Estado: ${estadoSelecionado} | Destino Material: ${destinoMaterial} | Tipo de Cálculo: ${tipoCalculo} | Contribuinte: ${contribuinte} | Simples Nacional: ${simplesNacional}</div>`)
		$('.centralizar').fadeIn(1500);
		$('#codigo').focus();
		}else if($('.status').text() == 'Não Padrão'){
			var oquefazer = msgNaoPadrao();
			return false }else if($('.status').text() == 'Não Padrão (Aceito)'){
		$('.estado').text(estadoSelecionado);
		$('.destinoMercadoria').text(destinoMaterial);
		$('.tipoCalculo').text(function(){if(tipoCalculo == ''){return 'Não Aplicado'}else{return tipoCalculo}});
		$('.contribuinte').text(function(){if(contribuinte == ''){return 'Não Aplicado'}else{return contribuinte}});
		$('.simplesNacional').text(function(){if(simplesNacional == ''){return 'Não Aplicado'}else{return simplesNacional}});
		$('#observacao').text(definirObs(estadoSelecionado, destinoMaterial, contribuinte, difal, tipoCalculo, simplesNacional));
		$('.footer').before(`<br /><br /><br /><div class="parametrosParaImpressao">Estado: ${estadoSelecionado} | Destino Material: ${destinoMaterial} | Tipo de Cálculo: ${tipoCalculo} | Contribuinte: ${contribuinte} | Simples Nacional: ${simplesNacional}</div>`)
		$('.centralizar').fadeIn(1500);
		$('#codigo').focus();
		}
	},
	},
}
});

function msgNaoPadrao(){
$.alert({
	// columnClass: 'col-md-4 col-md-offs	et-8 col-xs-4 col-xs-offset-8 col-xl-8',
	columnClass: 'col-md-4 col-md-offs	et-8 col-xs-4 col-xs-offset-8',
	containerFluid: true,
	type: 'red',
	theme: 'dark',
	title: '<strong>Atenção!</strong>',
	icon: 'fas fa-exclamation-triangle',
	onOpenBefore: function () {},
	content: '<div style="text-align:justify;">Os parâmetros não estão no padrão desse estado! ' + 
	'<b>Deseja continuar assim mesmo?</b><br /><br />Note que, caso opte por continuar, ' +
	'os valores não serão calculados corretamente, a opção de continuar fora do padrão '+
	'serve apenas para estudos/desenvolvimento!</div>',
buttons: {
    Continuar: {
	btnClass: 'btn-warning',
	keys: ['enter'],
	action: function () {$('.status').text('Não Padrão (Aceito)')},
	},
	Ajustar: {
	btnClass: 'btn-green',
	keys: ['enter'],
	action: function () {},
	},
}
});
}
}

