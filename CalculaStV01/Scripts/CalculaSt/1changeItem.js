//######################################################################################################
//########################################## | CHANGE ITENS | ##########################################
//######################################################################################################
//<summary>
//Autor: Bruno Sájermann
//Plugin: jquery-confirm (https://craftpip.github.io/jquery-confirm/)
//Função com quatro parâmetros
//1º Params: codigoIraAlterar
//2º Params: descricaoIraAlterar
//3º Params: quantidadeIraAlterar
//4º Params: precoIraAlterar
//</summary>
function changeItem(codigoIraAlterar, descricaoIraAlterar, quantidadeIraAlterar, precoIraAlterar){
$.alert({
	columnClass: 'col-md-4 col-md-offs	et-8 col-xs-4 col-xs-offset-8',
	containerFluid: true,
	theme: 'dark',
	title: '<strong>Alteração de Item</strong>',
	icon: 'fas fa-exclamation-triangle',
	onOpenBefore: function () {},
	onAction: function () {},
	content: 
'<div class="telaGeral">'+
'<div class="linha">'+
'<span class="coluna cabecalho todosIncomum" style="width:126px">Código</span>'+
'<span class="coluna cabecalho todosIncomum" style="width:70px">Quant.</span>'+
'<span class="coluna cabecalho todosIncomum" style="width:70px">Preço</span>'+
'</div>'+

'<div class="linha">'+
'<div style="width:126px;height:30px;border: 1px solid white;display:flex;justify-content:center;align-items:center;"><input type="number" class="codigoAlteracao" value="'+codigoIraAlterar+'" style="width:95px;height:26px;"/><i class="fas fa-search pesquisarAlteracao"></i></div><br>'+
'<div style="width:70px;height:30px;border: 1px solid white;display:flex;justify-content:center;align-items:center;"><input type="number" class="quantidadeAlteracao" value="'+quantidadeIraAlterar+'" style="width:66px;height:26px;"/></div><br>'+
'<div style="width:70px;height:30px;border: 1px solid white;display:flex;justify-content:center;align-items:center;"><input type="number" class="precoAlteracao" value="'+precoIraAlterar+'" style="width:66px;height:26px;"/></div><br>'+
'</div>'+

'<div class="linha">'+
'<span class="coluna cabecalho todosIncomum" style="width:266px;">Descrição</span>'+
'</div>'+

'<div class="linha">'+
'<div class="descAlteracao" style="width:266px;height:30px;border: 1px solid white;">'+ descricaoIraAlterar + '</div><br>'+
'</div>'+


'</div>'+
'<script>'+
'$(".codigoAlteracao").on("keyprees keyup keydown change", function(){alteracao();}); '+
'$(".quantidadeAlteracao").on("keyprees keyup keydown change", function(){alteracao();}); '+
'$(".precoAlteracao").on("keyprees keyup keydown change", function(){alteracao();}); '+
'$(".pesquisarAlteracao").on("click", function(){quemMeAbriu = "pesquisarAlteracao";console.log(quemMeAbriu); produtos();});'+
/*'codigoAlterado = $(".codigoAlteracao").val();'+
'var produtoLocalizadoAlteracao = bancoDadosProdutos.filter(function(produto){return produto.codigo == $(".codigoAlteracao").val();});'+
'cod = $(".codigoAlteracao").val();'+
'if(produtoLocalizadoAlteracao.length == 0){desc = ""; ncm = ""}else{desc = produtoLocalizadoAlteracao[0].descricao; ncm = produtoLocalizadoAlteracao[0].ncm}'+
'$(".descAlteracao").text(desc);'+
'});'+*/
'function alteracao(){;'+
'try{;'+
'var codigoDigitadoAlterado = "";'+
'var descricaoProdutoAlterado = "";'+
'var produtoLocalizado = bancoDadosProdutos.filter(function(produto){return produto.codigo == $(".codigoAlteracao").val();});'+
'id = linhaClicadaIndex;'+
'cod = $(".codigoAlteracao").val();'+

'if(produtoLocalizado.length == 0){desc = ""; ncm = ""}else{desc = produtoLocalizado[0].descricao; ncm = produtoLocalizado[0].ncm};'+
'$(".descAlteracao").text(desc);'+
'if(ncm == ""){'+
'	 total = ""; ipi = ""; baseCalculo = ""; icms = ""; baseIcmsSt = ""; st = ""; valorTotal = ""; acresc = ""; mva = ""; icmsPorcentagem = ""; intraPorcentagem = ""; pis = ""; cofins = "";'+
'	}else{;'+
'		quant = $(".quantidadeAlteracao").val().replace(",", ".");'+
'		preco = $(".precoAlteracao").val().replace(",", ".");'+
'		total = $(".quantidadeAlteracao").val().replace(",", ".") * $(".precoAlteracao").val().replace(",", ".");'+
'		ipi = definirIpi(estadoSelecionado, destinoMaterial, ncm, total);'+
'		baseCalculo = definirBaseCalculo(estadoSelecionado, destinoMaterial, total, ipi);'+
'		icms = definirIcms(estadoSelecionado, baseCalculo);'+
'		baseIcmsSt = definirBaseIcmsSt(estadoSelecionado, destinoMaterial, total, ipi, ncm, simplesNacional, icms, st, tipoCalculo, contribuinte);'+
'		st = definirSt(estadoSelecionado, destinoMaterial, icms, baseIcmsSt, simplesNacional, baseCalculo, ipi, contribuinte, tipoCalculo);'+
'		baseIcmsSt = definirBaseIcmsSt(estadoSelecionado, destinoMaterial, total, ipi, ncm, simplesNacional, icms, st, tipoCalculo, contribuinte);'+
'		valorTotal = total + ipi + st;'+
'		acresc = st / total * 100;'+
'		mva = definirMva(estadoSelecionado, ncm, simplesNacional, destinoMaterial);'+
'		icmsPorcentagem = recuperarIcms(estadoSelecionado);'+
'		intraPorcentagem = recuperarIntra(estadoSelecionado);'+
'		pis = total * 0.0165;'+
'		cofins = total  * 0.0760;'+
'		fecp = definirFecp(estadoSelecionado, destinoMaterial, total, ipi, baseIcmsSt);'+
'		valorTotal = verificaFecpTotalNota() ;'+
'		difal = definirDifal(estadoSelecionado, total, ipi);'+
'		baseCalculoHeader =  calculoBaseCalculoHeader();'+
'		icmsHeader =  calculoIcmsHeader();'+
'		baseIcmsStHeader =  calculoBaseIcmsStHeader();'+
'		stHeader =  calculoStHeader();'+
'		totalProdutosHeader =  calculoTotalProdutosHeader();'+
'		fecpHeader = calculoFecpHeader();'+
'		pisHeader =  calculoPisHeader();'+
'		cofinsHeader =  calculoCofinsHeader();'+
'		ipiHeader =  calculoIpiHeader();'+
'		totalNotaHeader =  calculoTotalNotaHeader();'+
'	}	'+
'var itensLancados = [{},];'+
'}catch{}'+
'}'+
'$(".pesquisarAlteracao").on({'+
'  mouseover: function() {'+
'    $(this).css("background-color", "green");'+
'	$(this).css("color", "white");'+
'	$(this).css("cursor", "pointer");'+
'  }, mouseleave: function() {'+
'    $(this).css("background-color", "");'+
'	$(this).css("color", "");'+
'	$(this).css("cursor", "");'+
 ' }'+
'});'+
'</script>'+
'<style>'+
'.pesquisarAlteracao{font-size: 24px;margin-left: 2px;padding:1px;}'+
//'.pesquisarAlteracao:hover{backgroundColor:green;color:white;transition:0.9s;cursor:pointer;}'+
'.telaGeral{display:flex;flex-direction:column;justify-content:center;align-items:center;}'+
'.linha{display:flex;flex-direction:row;justify-content:center;align-items:center}'+
'.descSelecionado{display:flex;flex-direction: row;justify-content: center;align-items: center;width: 390px;}'+
// '.coluna{width: 95px;}'+
'.cabecalho{background:gray;}'+
'.todosIncomum{border: 1px solid white; text-align:center}'+
'</style>',

buttons: {
    Cancelar: {
	btnClass: 'btn-red',
	keys: ['esc'],
	action: function () {},
	},
	Confirmar: {
	btnClass: 'btn-success',
	keys: ['enter'],
	action: function () {
relacaoItens[linhaClicadaIndex].cod = cod;
relacaoItens[linhaClicadaIndex].desc = desc;
relacaoItens[linhaClicadaIndex].ncm = ncm;
relacaoItens[linhaClicadaIndex].quant = quant;
relacaoItens[linhaClicadaIndex].preco = preco;//errado
relacaoItens[linhaClicadaIndex].total = total;
relacaoItens[linhaClicadaIndex].ipi = ipi;
relacaoItens[linhaClicadaIndex].st = st;
relacaoItens[linhaClicadaIndex].baseCalculo = baseCalculo;
relacaoItens[linhaClicadaIndex].icms = icms;
relacaoItens[linhaClicadaIndex].baseIcmsSt = baseIcmsSt;
relacaoItens[linhaClicadaIndex].valorTotal = valorTotal;//errado
relacaoItens[linhaClicadaIndex].acresc = acresc;
relacaoItens[linhaClicadaIndex].mva = mva;
relacaoItens[linhaClicadaIndex].icmsPorcentagem = icmsPorcentagem;
relacaoItens[linhaClicadaIndex].intraPorcentagem = intraPorcentagem;
relacaoItens[linhaClicadaIndex].pis = pis;
relacaoItens[linhaClicadaIndex].cofins = cofins;
relacaoItens[linhaClicadaIndex].fecp = fecp;
relacaoItens[linhaClicadaIndex].difal = difal;
$('#itensAdicionados>div').find(`[codigo = ${linhaClicada}]`).text($(".codigoAlteracao").val())
$('#itensAdicionados>div').find(`[descricao = ${linhaClicada}]`).text($(".descAlteracao").text())
$('#itensAdicionados>div').find(`[ncm = ${linhaClicada}]`).text(ncm)
$('#itensAdicionados>div').find(`[quantidade = ${linhaClicada}]`).text($(".quantidadeAlteracao").val().replace('.', ','))
$('#itensAdicionados>div').find(`[preco = ${linhaClicada}]`).text($(".precoAlteracao").val().replace('.', ','))

$('#itensAdicionados>div').find(`[total = ${linhaClicada}]`).text(visualFormat(total));
$('#itensAdicionados>div').find(`[ipi = ${linhaClicada}]`).text(visualFormat(ipi));
$('#itensAdicionados>div').find(`[st = ${linhaClicada}]`).text(visualFormat(st));
$('#itensAdicionados>div').find(`[valortotal = ${linhaClicada}]`).text(visualFormat(valorTotal));
$('#itensAdicionados>div').find(`[acresc = ${linhaClicada}]`).text(visualPercentFormat(null, acresc));
$('#itensAdicionados>div').find(`[mva = ${linhaClicada}]`).text(visualPercentFormat(mva));
$('#itensAdicionados>div').find(`[icms = ${linhaClicada}]`).text(visualPercentFormat(icmsPorcentagem))
$('#itensAdicionados>div').find(`[intra = ${linhaClicada}]`).text(visualPercentFormat(intraPorcentagem))
$('#baseCalculoHeader').text(visualFormat(null, baseCalculoHeader))
$('#icmsHeader').text(visualFormat(null, icmsHeader))
$('#baseIcmsStHeader').text(visualFormat(null, baseIcmsStHeader))
$('#stHeader').text(visualFormat(null, stHeader))
$('#totalProdutosHeader').text(visualFormat(null, totalProdutosHeader))
$('#fecpHeader').text(visualFormat(null, fecpHeader))
$('#pisHeader').text(visualFormat(null, pisHeader))
$('#cofinsHeader').text(visualFormat(null, cofinsHeader))
$('#ipiHeader').text(visualFormat(null, ipiHeader))
$('#totalNotaHeader').text(visualFormat(null, totalNotaHeader))
if($('#codigo').val() == ''){$('#codigo').val('1800');calc();$('#codigo').val('');$('#descricao').text('');$('#ncm').text('')}

},

},
	//Teste: {btnClass: 'btn-red', action: function(Ok){console.log('bruno')},}


}
});

}