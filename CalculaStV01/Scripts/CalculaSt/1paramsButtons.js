//######################################################################################################
//######################################### | PARAMS BUTTONS | #########################################
//######################################################################################################

function padronizacaoDosParametros(){
$(".parametros").text($(".textBoxEstado").val() + 
destinoMaterial + tipoCalculo + contribuinte + simplesNacional);}

function verificaPadrao(){
var padrao = [
"ACConsumoNaoNao", "ALConsumoNaoNao", "APConsumoNaoNao", 
"APConsumoForaSimNao", "APRevendaSimNao", "AMConsumoNaoNao", 
"BAConsumoNaoNao", "CEConsumoNaoNao", "DFConsumoNaoNao", 
"DFConsumoForaSimNao", "DFRevendaSimNao", "ESConsumoNaoNao", 
"GOConsumoNaoNao", "MAConsumoNaoNao", "MTConsumoNaoNao", "MSConsumoNaoNao", 
"MGConsumoNaoNao", "MGConsumoDentroSimNao", "MGRevendaSimNao", 
"PAConsumoNaoNao", "PBConsumoNaoNao", "PRConsumoNaoNao", 
"PRConsumoDentroSimNao", "PRRevendaSimNao", "PRRevendaSimSim", 
"PEConsumoNaoNao", "PEConsumoBS DuplaSimNao", "PERevendaSimNao", 
"PIConsumoNaoNao", "RJConsumoNaoNao", "RJConsumoForaSimNao", 
"RJRevendaSimNao", "RNConsumoNaoNao", "RSConsumoNaoNao", 
"RSConsumoDentroSimNao", "RSRevendaSimNao", "ROConsumoNaoNao", 
"RRConsumoNaoNao", "SCConsumoNaoNao", "SPRevendaSimNao", 
"SEConsumoNaoNao", "TOConsumoNaoNao"];
if(padrao.indexOf($('.parametros').text()) == -1){
$('.status').text('Não Padrão');
}else{$('.status').text('Padrão');}
}

function ajeitaBotoesParametros(){
	if(destinoMaterial == "Consumo"){
//Se é consumo, precisa ter o tipo de cálculo ativo
$(".radioTipoCalculoFora").removeAttr('disabled');
$(".radioTipoCalculoDentro").removeAttr('disabled');
$(".radioTipoCalculoBsDupla").removeAttr('disabled');

//Se é consumo, então contribuinte fica ativo
$(".radioContribuinteSim").removeAttr('disabled');
$(".radioContribuinteNao").removeAttr('disabled');

//Se é consumo, Não precisa ter Simples Nacional Ativo
$(".radioSimplesNacionalSim").attr('disabled','true');
$(".radioSimplesNacionalSim").prop('checked',false);
$(".radioSimplesNacionalNao").prop('checked','true');
$(".radioSimplesNacionalNao").attr('disabled','true');
simplesNacional = 'Nao';
}
else if(destinoMaterial == "Revenda" && simplesNacional =='Nao'){
//Se é revenda, não precisa do tipo de cálculo
$(".radioTipoCalculoFora").attr('disabled', 'true');
$(".radioTipoCalculoDentro").attr('disabled', 'true');
$(".radioTipoCalculoBsDupla").attr('disabled', 'true');
$(".radioTipoCalculoFora").prop('checked',false);
$(".radioTipoCalculoDentro").prop('checked',false);
$(".radioTipoCalculoBsDupla").prop('checked',false);
tipoCalculo = '';
//Se é revenda, então é contribuinte
$(".radioContribuinteSim").attr('disabled', 'true');
$(".radioContribuinteSim").prop('checked', 'true');
$(".radioContribuinteNao").attr('disabled', 'true');
$(".radioContribuinteNao").prop('checked',false);
contribuinte = 'Sim';
//Se é revenda, precisa ter Simples Nacional Ativo
$(".radioSimplesNacionalSim").removeAttr('disabled');
$(".radioSimplesNacionalNao").removeAttr('disabled');
$(".radioSimplesNacionalSim").prop('checked',false);
$(".radioSimplesNacionalNao").prop('checked',true);
simplesNacional = 'Nao'
}

else if(destinoMaterial == "Revenda" && simplesNacional =='Sim'){
//Se é revenda, não precisa do tipo de cálculo
$(".radioTipoCalculoFora").attr('disabled', 'true');
$(".radioTipoCalculoDentro").attr('disabled', 'true');
$(".radioTipoCalculoBsDupla").attr('disabled', 'true');
tipoCalculo = '';
//Se é revenda, então é contribuinte
$(".radioContribuinteSim").attr('disabled', 'true');
$(".radioContribuinteNao").attr('disabled', 'true');
contribuinte = 'Sim';
//Se é revenda, precisa ter Simples Nacional Ativo
$(".radioSimplesNacionalSim").removeAttr('disabled');
$(".radioSimplesNacionalNao").removeAttr('disabled');
simplesNacional = 'Sim'
}

else if(destinoMaterial == "Revenda"){
//Se é revenda, não precisa do tipo de cálculo
$(".radioTipoCalculoFora").attr('disabled', 'true');
$(".radioTipoCalculoDentro").attr('disabled', 'true');
$(".radioTipoCalculoBsDupla").attr('disabled', 'true');
tipoCalculo = '';
//Se é revenda, então é contribuinte
$(".radioContribuinteSim").attr('disabled', 'true');
$(".radioContribuinteSim").prop('checked', 'true');
$(".radioContribuinteNao").attr('disabled', 'true');
contribuinte = 'Sim';
//Se é revenda, precisa ter Simples Nacional Ativo
$(".radioSimplesNacionalSim").removeAttr('disabled');
$(".radioSimplesNacionalNao").removeAttr('disabled');
$(".radioSimplesNacionalSim").prop('checked',false);
$(".radioSimplesNacionalNao").prop('checked',false);
simplesNacional=''
}

if(contribuinte == "Sim" && destinoMaterial == "Consumo"){
$(".radioTipoCalculoFora").removeAttr('disabled');
$(".radioTipoCalculoDentro").removeAttr('disabled');
$(".radioTipoCalculoBsDupla").removeAttr('disabled');

}
else if(contribuinte == "Nao"){
//Se é não contribuinte, não precisa do tipo de cálculo
$(".radioTipoCalculoFora").attr('disabled', 'true');
$(".radioTipoCalculoDentro").attr('disabled', 'true');
$(".radioTipoCalculoBsDupla").attr('disabled', 'true');
$(".radioTipoCalculoFora").prop('checked',false);
$(".radioTipoCalculoDentro").prop('checked',false);
$(".radioTipoCalculoBsDupla").prop('checked',false);
tipoCalculo = '';
}

padronizacaoDosParametros()
verificaPadrao();
}