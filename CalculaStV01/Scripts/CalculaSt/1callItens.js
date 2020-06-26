//######################################################################################################
//########################################### | CALL ITENS | ###########################################
//######################################################################################################
//<summary>
//</summary>
$(document).on('dblclick', '#itensAdicionados>div', function(){
	try{
linhaClicada = $(this).attr('linha')
linhaClicadaIndex = relacaoItens.findIndex(function(item){return item.id == linhaClicada;})
//console.log(linhaClicadaIndex)
callItens(linhaClicadaIndex)
}catch{}
});

function callItens(linhaClicadaIndex){
$.alert({
	columnClass: 'col-md-4 col-md-offs	et-8 col-xs-4 col-xs-offset-8',
	
	containerFluid: true,
	theme: 'dark',
	title: '<strong>Descrição Completa!</strong>',
	icon: 'fas fa-exclamation-triangle',
	onOpenBefore: function () {},
	onAction: function () {},
	content: 
'<div class="telaGeral">'+
'<span class="descSelecionado cabecalho todosIncomum"></span>'+
'<div class="linhaItemSelecionado">'+
'<span class="colunaItemSelecionado cabecalho todosIncomum">ID</span>'+
'<span class="colunaItemSelecionado cabecalho todosIncomum">Cód</span>'+
'<span class="colunaItemSelecionado cabecalho todosIncomum">N.C.M</span>'+
'</div>'+
'<div class="linhaItemSelecionado">'+
'<span class="idSelecionado colunaItemSelecionado todosIncomum">'+
'</span><span class="codSelecionado colunaItemSelecionado todosIncomum"></span>'+
'<span class="ncmSelecionado colunaItemSelecionado todosIncomum"></span>'+
'</div>'+

'<div class="linhaItemSelecionado">'+
'<span class="colunaItemSelecionado cabecalho todosIncomum">Quant.</span>'+
'<span class="colunaItemSelecionado cabecalho todosIncomum">Preço</span>'+
'<span class="colunaItemSelecionado cabecalho todosIncomum">Total</span>'+
'</div>'+

'<div class="linhaItemSelecionado">'+
'<span class="quantSelecionado colunaItemSelecionado todosIncomum"></span>'+
'<span class="precoSelecionado colunaItemSelecionado todosIncomum"></span>'+
'<span class="totalSelecionado colunaItemSelecionado todosIncomum"></span>'+
'</div>'+

'<div class="linhaItemSelecionado">'+
'<span class="colunaItemSelecionado cabecalho todosIncomum">IPI</span>'+
'<span class="colunaItemSelecionado cabecalho todosIncomum">St</span>'+
'<span class="colunaItemSelecionado cabecalho todosIncomum">V. Total</span>'+
'</div>'+

'<div class="linhaItemSelecionado">'+
'<span class="ipiSelecionado colunaItemSelecionado todosIncomum"></span>'+
'<span class="stSelecionado colunaItemSelecionado todosIncomum"></span>'+
'<span class="valorTotalSelecionado colunaItemSelecionado todosIncomum"></span>'+
'</div>'+

'<div class="linhaItemSelecionado">'+
'<span class="colunaItemSelecionado cabecalho todosIncomum">Acresc.</span>'+
'<span class="colunaItemSelecionado cabecalho todosIncomum">M.V.A</span>'+
'<span class="colunaItemSelecionado cabecalho todosIncomum">IcmsPorc</span>'+
'</div>'+

'<div class="linhaItemSelecionado">'+
'<span class="acrescSelecionado colunaItemSelecionado todosIncomum"></span>'+
'<span class="mvaSelecionado colunaItemSelecionado todosIncomum"></span>'+
'<span class="icmsPorcentagemSelecionado colunaItemSelecionado todosIncomum"></span>'+
'</div>'+

'<div class="linhaItemSelecionado">'+
'<span class="colunaItemSelecionado cabecalho todosIncomum">IntraPorc</span>'+
'<span class="colunaItemSelecionado cabecalho todosIncomum">Pis</span>'+
'<span class="colunaItemSelecionado cabecalho todosIncomum">Cofins</span>'+
'</div>'+

'<div class="linhaItemSelecionado">'+
'<span class="intraPorcentagemSelecionado colunaItemSelecionado todosIncomum"></span>'+
'<span class="pisSelecionado colunaItemSelecionado todosIncomum"></span>'+
'<span class="cofinsSelecionado colunaItemSelecionado todosIncomum"></span>'+
'</div>'+

'<div class="linhaItemSelecionado">'+
'<span class="colunaItemSelecionado cabecalho todosIncomum">BaseIcmsSt</span>'+
'<span class="colunaItemSelecionado cabecalho todosIncomum">Icms</span>'+
'<span class="colunaItemSelecionado cabecalho todosIncomum">BaseCal.</span>'+
'</div>'+
'<div class="linhaItemSelecionado">'+
'<span class="baseCalculoSelecionado colunaItemSelecionado todosIncomum"></span>'+
'<span class="icmsSelecionado colunaItemSelecionado todosIncomum"></span>'+
'<span class="baseIcmsStSelecionado colunaItemSelecionado todosIncomum"></span>'+
'</div>'+

'<div class="linhaItemSelecionado">'+
'<span class="colunaItemSelecionado cabecalho todosIncomum">Fecp</span>'+
'<span class="colunaItemSelecionado cabecalho todosIncomum">Difal</span>'+
// '<span class="colunaItemSelecionado cabecalho todosIncomum">BaseCal.</span>'+
'</div>'+
'<div class="linhaItemSelecionado">'+
'<span class="fecpSelecionado colunaItemSelecionado todosIncomum"></span>'+
'<span class="difalSelecionado colunaItemSelecionado todosIncomum"></span>'+
// '<span class="baseIcmsStSelecionado colunaItemSelecionado todosIncomum"></span>'+
'</div>'+

'</div>'+
'<script>'+
//'var linhaClicadaIndex = relacaoItens.findIndex(function(item){return item.id == linhaClicadaIndex;})'+
//'console.log(linhaClicadaIndex);'+
'$(".descSelecionado").text(relacaoItens[linhaClicadaIndex].desc);'+
'$(".idSelecionado").text(relacaoItens[linhaClicadaIndex].id);'+
'$(".codSelecionado").text(relacaoItens[linhaClicadaIndex].cod);'+
'$(".ncmSelecionado").text(relacaoItens[linhaClicadaIndex].ncm);'+
'$(".quantSelecionado").text(relacaoItens[linhaClicadaIndex].quant);'+
'$(".precoSelecionado").text(relacaoItens[linhaClicadaIndex].preco);'+
'$(".totalSelecionado").text(visualFormat(relacaoItens[linhaClicadaIndex].total));'+
'$(".ipiSelecionado").text(visualFormat(relacaoItens[linhaClicadaIndex].ipi));'+
'$(".stSelecionado").text(visualFormat(relacaoItens[linhaClicadaIndex].st));'+
'$(".valorTotalSelecionado").text(visualFormat(relacaoItens[linhaClicadaIndex].valorTotal));'+
'$(".acrescSelecionado").text(visualPercentFormat(null, relacaoItens[linhaClicadaIndex].acresc));'+
'$(".mvaSelecionado").text(visualPercentFormat(relacaoItens[linhaClicadaIndex].mva));'+
'$(".icmsPorcentagemSelecionado").text(visualPercentFormat(relacaoItens[linhaClicadaIndex].icmsPorcentagem));'+
'$(".intraPorcentagemSelecionado").text(visualPercentFormat(relacaoItens[linhaClicadaIndex].intraPorcentagem));'+
'$(".pisSelecionado").text(visualFormat(null, relacaoItens[linhaClicadaIndex].pis));'+
'$(".cofinsSelecionado").text(visualFormat(null, relacaoItens[linhaClicadaIndex].cofins));'+
'$(".baseCalculoSelecionado").text(visualFormat(null, relacaoItens[linhaClicadaIndex].baseCalculo));'+
'$(".icmsSelecionado").text(visualFormat(null, relacaoItens[linhaClicadaIndex].icms));'+
'$(".baseIcmsStSelecionado").text(visualFormat(null, relacaoItens[linhaClicadaIndex].baseIcmsSt));'+
'$(".fecpSelecionado").text(visualFormat(relacaoItens[linhaClicadaIndex].fecp));'+
'$(".difalSelecionado").text(visualFormat(relacaoItens[linhaClicadaIndex].difal));'+
'</script>'+
'<style>'+
'.telaGeral{display:flex;flex-direction:column;justify-content:center;align-items:center;}'+
'.linhaItemSelecionado{display:flex;flex-direction:row;justify-content:center;align-items:center}'+
'.descSelecionado{display:flex;flex-direction: row;justify-content: center;align-items: center;width: 390px;}'+
'.colunaItemSelecionado{width: 130px;}'+
'.cabecalho{background:gray;}'+
'.todosIncomum{border: 1px solid white; text-align:center}'+
'</style>',
buttons: {
    Ok: {
	btnClass: 'btn-green',
	keys: ['enter'],
	action: function () {},
	},
	Excluir: {
	btnClass: 'btn-red',
	keys: ['delete'],
	action: function () {
		var id = $(".idSelecionado").text();
		var indexItem = relacaoItens.findIndex(function(item){return item.id == id;})
		deleteItem(id, indexItem);
},
},
	Alterar: {
	btnClass: 'btn-warning',
	keys: ['A'],
	action: function () {
		changeItem(relacaoItens[linhaClicadaIndex].cod, relacaoItens[linhaClicadaIndex].desc, relacaoItens[linhaClicadaIndex].quant, relacaoItens[linhaClicadaIndex].preco)
		},
	},
}
});
}