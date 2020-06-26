var relacaoItens= []
var id, cod, desc, ncm, total, ipi, baseCalculo, icms, baseIcmsSt, st, valorTotal, acresc, mva, icmsPorcentagem, intraPorcentagem, pis, cofins, difal, baseCalculoHeader, icmsHeader, baseIcmsStHeader, stHeader, totalProdutosHeader, pisHeader, cofinsHeader, ipiHeader, totalNotaHeader = '';
var selecao = '';
var codigoSelecionado = ''
var quemMeAbriu = ''
var linhaSelecionada = '';
var estadoSelecionado = "";
var destinoMaterial = "";
var tipoCalculo = "";
var contribuinte = "";
var simplesNacional = "";
$('#codigo, #quantidade, #preco').on('keypress keyup keydown change', function(){calc();});

function calc(){
try{
var codigoDigitado = '';
var descricaoProduto = '';

var produtoLocalizado = bancoDadosProdutos.filter(function(produto){return produto.codigo == $('#codigo').val();})
id = $('#item').text();
cod = $('#codigo').val();
if(produtoLocalizado.length == 0){desc = ''; ncm = ''}else{desc = produtoLocalizado[0].descricao; ncm = produtoLocalizado[0].ncm}
$('#descricao').text(desc);
$('#ncm').text(ncm)

if(ncm == ''){
	 total = ''; ipi = ''; baseCalculo = ''; icms = ''; baseIcmsSt = ''; st = ''; valorTotal = ''; acresc = ''; mva = ''; icmsPorcentagem = ''; intraPorcentagem = ''; pis = ''; cofins = ''; fecp = ''; difal = 0; 
	
	}else{
		quant = $('#quantidade').val().replace(',', '.')
		preco = $('#preco').val().replace(',', '.');
		total = $('#quantidade').val().replace(',', '.') * $('#preco').val().replace(',', '.');
		ipi = definirIpi(estadoSelecionado, destinoMaterial, ncm, total);
		baseCalculo = definirBaseCalculo(estadoSelecionado, destinoMaterial, total, ipi)
		icms = definirIcms(estadoSelecionado, baseCalculo)
		baseIcmsSt = definirBaseIcmsSt(estadoSelecionado, destinoMaterial, total, ipi, ncm, simplesNacional, icms, st, tipoCalculo, contribuinte)
		st = definirSt(estadoSelecionado, destinoMaterial, icms, baseIcmsSt, simplesNacional, baseCalculo, ipi, contribuinte, tipoCalculo)
		baseIcmsSt = definirBaseIcmsSt(estadoSelecionado, destinoMaterial, total, ipi, ncm, simplesNacional, icms, st, tipoCalculo, contribuinte)
		valorTotal = total + ipi + st;
		acresc = st / total * 100;
		mva = definirMva(estadoSelecionado, ncm, simplesNacional, destinoMaterial)
		icmsPorcentagem = recuperarIcms(estadoSelecionado);
		intraPorcentagem = recuperarIntra(estadoSelecionado);
		pis = total * 0.0165;
		cofins = total  * 0.0760;
		fecp = definirFecp(estadoSelecionado, destinoMaterial, total, ipi, baseIcmsSt);
		valorTotal = verificaFecpTotalNota() 
		difal = definirDifal(estadoSelecionado, total, ipi);
		baseCalculoHeader =  calculoBaseCalculoHeader()
		icmsHeader =  calculoIcmsHeader()
		baseIcmsStHeader =  calculoBaseIcmsStHeader()
		stHeader =  calculoStHeader()
		totalProdutosHeader =  calculoTotalProdutosHeader()
		fecpHeader = calculoFecpHeader()
		pisHeader =  calculoPisHeader()
		cofinsHeader =  calculoCofinsHeader()
		ipiHeader =  calculoIpiHeader()
		totalNotaHeader =  calculoTotalNotaHeader()
		
	}	
$('#total').text(visualFormat(total));
$('#ipi').text(visualFormat(ipi));
$('#st').text(visualFormat(st));
$('#valorTotal').text(visualFormat(valorTotal));
$('#acresc').text(visualPercentFormat(null, acresc));
$('#mva').text(visualPercentFormat(mva));
$('#icms').text(visualPercentFormat(icmsPorcentagem))
$('#intra').text(visualPercentFormat(intraPorcentagem))
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
$('#observacao').text(definirObs(estadoSelecionado, destinoMaterial, contribuinte, difal, tipoCalculo, simplesNacional, fecpHeader))
var itensLancados = [
{},
]

}catch{}
	
}
//######################################################################################################
//################################### | FORMATAÇÃO MONETÁRIA VISUAL | ##################################
//######################################################################################################
function visualFormat(a, b){
// 2 Parâmetros conforme descrito abaixo, para chamar essa função anule o outro parâmetro não usado
//(Real com Cifrão (2 Casas) / Real sem Cifrão (2 Casas)
//debugger
if(a != null){if(isNaN(a) ||a =='' || a == undefined){return 'R$0,00'}else{return 'R$' + a.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.')}	}
else if(b != null){if(isNaN(b) || b =='' || b == undefined){return '0,00'}else{return b.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.')}}	
else if(a == undefined || b == undefined){return '0,00'}
else{return console.error('Erro na fórmula FORMATAÇÃO MONETÁRIA VISUAL (Entrada a: '+a+' Entrada b: '+b);}	
}
//######################################################################################################
//################################## | FORMATAÇÃO PECENTUÁRIA VISUAL | #################################
//######################################################################################################
function visualPercentFormat(a, b){
// 2 Parâmetros conforme descrito abaixo, para chamar essa função anule o outro parâmetro não usado
//(Porcentagem com (2 Casas) / Porcentagem com (4 Casas)
// if(a != null){if(isNaN(a) || a == ''){return '0,00%'}else{return a.charAt(2) + a.charAt(3) + '.' + a.charAt(4) + a.charAt(5) + '%'}	}
if(a != null){if(isNaN(a) || a == ''){return '0,00%'}else{return a.replace('.', ',') + "%"}}
else if(b != null){if(isNaN(b) || b == ''){return '0,0000%'}else{return b.toFixed(4).replace('.', ',') + '%'}}
else{return console.error('Erro na fórmula FORMATAÇÃO PECENTUÁRIA VISUAL (Entrada a: '+a+' Entrada b: '+b)}
}

function calculoBaseCalculoHeader(){
	var temp = baseCalculo;
//debugger
for(i = 0; i<relacaoItens.length; i++){
temp = parseFloat(relacaoItens[i].baseCalculo) + parseFloat(temp)
}
if(temp == undefined){return 0}else{return temp;}
}

function calculoIcmsHeader(){
	var temp = icms;
//debugger
for(i = 0; i<relacaoItens.length; i++){
temp = parseFloat(relacaoItens[i].icms) + parseFloat(temp)
}
return temp;
}

function calculoBaseIcmsStHeader(){
	var temp = baseIcmsSt;

for(i = 0; i<relacaoItens.length; i++){
temp = parseFloat(relacaoItens[i].baseIcmsSt) + parseFloat(temp)
}
return temp;
}

function calculoStHeader(){
	var temp = st;
for(i = 0; i<relacaoItens.length; i++){
temp = parseFloat(relacaoItens[i].st) + parseFloat(temp)
}
return temp;
}

function calculoTotalProdutosHeader(){
	var temp = total;
for(i = 0; i<relacaoItens.length; i++){
temp = parseFloat(relacaoItens[i].total) + parseFloat(temp)
}
return temp;
}

function calculoFecpHeader(){
	var temp = fecp;
for(i = 0; i<relacaoItens.length; i++){
temp = parseFloat(relacaoItens[i].fecp) + parseFloat(temp)
}
return temp;
}

function calculoPisHeader(){
	var temp = pis;
for(i = 0; i<relacaoItens.length; i++){
temp = parseFloat(relacaoItens[i].pis) + parseFloat(temp)
}
return temp;
}

function calculoCofinsHeader(){
	var temp = cofins;
for(i = 0; i<relacaoItens.length; i++){
temp = parseFloat(relacaoItens[i].cofins) + parseFloat(temp)
}
return temp;
}

function calculoIpiHeader(){
	var temp = ipi;
for(i = 0; i<relacaoItens.length; i++){
temp = parseFloat(relacaoItens[i].ipi) + parseFloat(temp)
}
return temp;
}

function calculoTotalNotaHeader(){
	var temp = valorTotal;
for(i = 0; i<relacaoItens.length; i++){
temp = parseFloat(relacaoItens[i].valorTotal) + parseFloat(temp)
}
return temp;
}

function definirDifal(estadoSelecionado, total, ipi){
	var aliquotasLocalizado = bancoDadosIcms.filter(function(el){return el.estado == estadoSelecionado;})
	var porcentagemIntraLocalizado = aliquotasLocalizado[0].porcentagemIntra
	var porcentagemIcmsLocalizado = aliquotasLocalizado[0].porcentagemIcms
		
	if(porcentagemIntraLocalizado < 10){
		porcentagemIntraLocalizado = "0.0" + porcentagemIntraLocalizado
	}else{porcentagemIntraLocalizado = "0." + porcentagemIntraLocalizado}
	
	if(porcentagemIcmsLocalizado < 10){
		porcentagemIcmsLocalizado = "0.0" + porcentagemIcmsLocalizado
	}else{porcentagemIcmsLocalizado = "0." + porcentagemIcmsLocalizado}
		
	var difal = (total + ipi) * (parseFloat(porcentagemIntraLocalizado) - parseFloat(porcentagemIcmsLocalizado))
	return difal;
}

function calculoDifal(){
	var temp = difal;
	for(i = 0; i<relacaoItens.length; i++){
		temp = parseFloat(relacaoItens[i].difal) + parseFloat(temp)
	}
	return temp;
}

function definirFecp(estadoSelecionado, destinoMaterial, total, ipi, baseIcmsSt){
	var fecpLocalizado = bancoDadosIcms.filter(function(fecp){return fecp.estado == estadoSelecionado;})
	if(fecpLocalizado[0].fecp < 10){
		fecpLocalizado = "0.0" + fecpLocalizado[0].fecp;
	}else{fecpLocalizado = "0." + fecpLocalizado[0].fecp;}	
		
		if(destinoMaterial == 'Revenda'){
		return baseIcmsSt * fecpLocalizado;
		}
		else if(destinoMaterial == 'Consumo'){
		return (total + ipi) * fecpLocalizado;
		}
}

function recuperarIntra(estadoSelecionado){
	var icmsLocalizado = bancoDadosIcms.filter(function(icms){return icms.estado == estadoSelecionado;})
		return icmsLocalizado[0].porcentagemIntra;
}
function recuperarIcms(estadoSelecionado){
	var icmsLocalizado = bancoDadosIcms.filter(function(icms){return icms.estado == estadoSelecionado;})
		return icmsLocalizado[0].porcentagemIcms;
}	

function definirMva(estadoSelecionado, ncm, simplesNacional, destinoMaterial){
		if (destinoMaterial == 'Revenda'){
		var mvaLocalizado = bancoDadosMva.filter(function(mva){return mva.ncm == ncm;})
		return eval(`mvaLocalizado[0].${estadoSelecionado}IvaSimplesNacional${simplesNacional}`)
		}else {return 0}
}

function definirSt(estadoSelecionado, destinoMaterial, icms, baseIcmsSt, simplesNacional, baseCalculo, ipi, contribuinte, tipoCalculo){
	var aliquotasLocalizado = bancoDadosIcms.filter(function(el){return el.estado == estadoSelecionado;})
	var porcentagemIntraLocalizado = aliquotasLocalizado[0].porcentagemIntra
	var porcentagemIcmsLocalizado = aliquotasLocalizado[0].porcentagemIcms
		
	if(porcentagemIntraLocalizado < 10){
		porcentagemIntraLocalizado = "0.0" + porcentagemIntraLocalizado
	}else{porcentagemIntraLocalizado = "0." + porcentagemIntraLocalizado}
	
	if(porcentagemIcmsLocalizado < 10){
		porcentagemIcmsLocalizado = "0.0" + porcentagemIcmsLocalizado
	}else{porcentagemIcmsLocalizado = "0." + porcentagemIcmsLocalizado}
	
	
	if(estadoSelecionado == 'MT' && destinoMaterial == 'Revenda' && simplesNacional == 'Nao'){
		//return (parseFloat(baseCalculo) + ipi) * 0.1015;
		return 0;
	}
	else if(destinoMaterial == 'Revenda' && simplesNacional == 'Nao'){
		return parseFloat(baseIcmsSt) * parseFloat(porcentagemIntraLocalizado) - parseFloat(icms);
	}
	else if(destinoMaterial == 'Consumo' && tipoCalculo == 'Fora' && contribuinte == 'Sim'){
		return definirDifal(estadoSelecionado, total, ipi);
	}
	else if(destinoMaterial == 'Consumo' && tipoCalculo == 'Dentro' && contribuinte == 'Sim'){
		return baseIcmsSt * parseFloat(porcentagemIntraLocalizado) - icms;
	}
	else if(destinoMaterial == 'Consumo' && tipoCalculo == 'BS Dupla' && contribuinte == 'Sim'){
		// var aliquotasLocalizado = bancoDadosIcms.filter(function(el){return el.estado == estadoSelecionado;})
		// var porcentagemIntraLocalizado = aliquotasLocalizado[0].porcentagemIntra
		// var porcentagemIcmsLocalizado = aliquotasLocalizado[0].porcentagemIcms
		return baseIcmsSt * (parseFloat(porcentagemIntraLocalizado) - parseFloat(porcentagemIcmsLocalizado))
	}
	
	
else{return 0;}
}

function definirIpi(estadoSelecionado, destinoMaterial, ncm, total){
	if(estadoSelecionado == "AM"){return 0}
	else{
		var ipiLocalizado = bancoDadosIpi.filter(function(ipi){return ipi.ncm == ncm;})
		if(ipiLocalizado[0].porcentagemIpi < 10){
			ipiLocalizado = "0.0" + ipiLocalizado[0].porcentagemIpi
		}else{ipiLocalizado = "0." + ipiLocalizado[0].porcentagemIpi}
	return total * ipiLocalizado
	}
}
function definirBaseCalculo(estadoSelecionado, destinoMaterial, total, ipi){
	//if (estadoSelecionado == 'AM'){return total}
	if(destinoMaterial == 'Revenda' || estadoSelecionado == 'AM'){return total;	}
	else if(destinoMaterial == 'Consumo'){return total + ipi;}
}
function definirIcms(estadoSelecionado, baseCalculo){
	var icmsLocalizado = bancoDadosIcms.filter(function(icms){return icms.estado == estadoSelecionado;})
		if(icmsLocalizado.length == 0){return 0}else{
		if(icmsLocalizado[0].porcentagemIcms < 10){
			icmsLocalizado = "0.0" + icmsLocalizado[0].porcentagemIcms
		}else{icmsLocalizado = "0." + icmsLocalizado[0].porcentagemIcms}
	return baseCalculo * icmsLocalizado}
}

function definirBaseIcmsSt(estadoSelecionado, destinoMaterial, total, ipi, ncm, simplesNacional, icms, st, tipoCalculo, contribuinte){
	if(estadoSelecionado == 'MT' && destinoMaterial == 'Revenda' && simplesNacional == 'Nao'){
		//var porcentagemIntraLocalizado = bancoDadosIcms.filter(function(el){return el.estado == estadoSelecionado;})
		//if(porcentagemIntraLocalizado[0].porcentagemIntra < 10){
		//porcentagemIntraLocalizado = "0.0" + porcentagemIntraLocalizado[0].porcentagemIntra
		//}else{porcentagemIntraLocalizado = "0." + porcentagemIntraLocalizado[0].porcentagemIntra}
		//return (icms + st) / parseFloat(porcentagemIntraLocalizado);
		return 0;
	}
	else if(destinoMaterial == 'Revenda'){
		var mvaLocalizado = bancoDadosMva.filter(function(mva){return mva.ncm == ncm;})
		mvaLocalizado = 100 * eval(`mvaLocalizado[0].${estadoSelecionado}IvaSimplesNacional${simplesNacional}`)
		if (mvaLocalizado >= 10000) {
			mvaLocalizado = "2." + mvaLocalizado
		} else {
			mvaLocalizado = "1." + mvaLocalizado

		}
		return (total + ipi) * mvaLocalizado
	}
	else if(destinoMaterial == 'Consumo' && tipoCalculo == 'Fora' && contribuinte == 'Sim'){
		return total + ipi
	}
	else if(destinoMaterial == 'Consumo' && (tipoCalculo == 'Dentro' || tipoCalculo == 'BS Dupla') && contribuinte == 'Sim'){
		var icmsIntraLocalizado = bancoDadosIcms.filter(function(el){return el.estado == estadoSelecionado;})
		if(icmsIntraLocalizado[0].porcentagemIntra < 10){
			icmsIntraLocalizado = "0.0" + icmsIntraLocalizado[0].porcentagemIntra
		}else{icmsIntraLocalizado = "0." + icmsIntraLocalizado[0].porcentagemIntra}
		icmsIntraLocalizado = (100 - (parseFloat(icmsIntraLocalizado) * 100)) / 100
		console.log(icmsIntraLocalizado)
		return (total + ipi - icms) / icmsIntraLocalizado
	}
}

function verificaFecpTotalNota(){
	if(estadoSelecionado == 'RJ' && contribuinte == 'Sim'){
		return valorTotal + fecp;
	}else{return valorTotal;}
}
	
function definirObs(estadoSelecionado, destinoMaterial, contribuinte, difal, tipoCalculo, simplesNacional, fecpHeader){
	var difalTotalJaCalculado = visualFormat(calculoDifal())
	var obsLocalizada = bancoDadosObservacoes.filter(function(obs){return obs.estado == estadoSelecionado && obs.destino == destinoMaterial && obs.tipo == tipoCalculo && obs.simplesNacional == simplesNacional && obs.contribuinte == contribuinte;})
	var obsMontada = ""
	if (obsLocalizada[0].protocolo != ""){obsMontada = `Protocolo do estado: ${obsLocalizada[0].protocolo}`}
	if (obsLocalizada[0].obs != ""){obsMontada = `${obsMontada} Observação: ${obsLocalizada[0].obs}`}
	if (estadoSelecionado == 'RJ' && (!isNaN(fecpHeader) || fecpHeader!= 0.00)){obsMontada = `${obsMontada} R$${visualFormat(null, fecpHeader)}`}
	if (contribuinte == 'Nao'){obsMontada = `${obsMontada}. Difal: R$ ${difalTotalJaCalculado}`}
	if (obsLocalizada[0].tipoClienteSiga != ""){obsMontada = `${obsMontada}. Tipo Cliente: ${obsLocalizada[0].tipoClienteSiga}`}
	if (obsLocalizada[0].grupoClienteSiga != ""){obsMontada = `${obsMontada}. Grupo Tributário: ${obsLocalizada[0].grupoClienteSiga}`}
	if (obsLocalizada[0].formula != ""){obsMontada = `${obsMontada}. Fórmula: ${obsLocalizada[0].formula}`}
	if (obsLocalizada[0].tesSIpi != ""){obsMontada = `${obsMontada},. Tes Sem Ipi: ${obsLocalizada[0].tesSIpi}`}
	if (obsLocalizada[0].tesCIpi != ""){obsMontada = `${obsMontada}. Tes Com Ipi: ${obsLocalizada[0].tesCIpi}`}
	if (obsLocalizada[0].cfop != ""){obsMontada = `${obsMontada}. CFOP: ${obsLocalizada[0].cfop}`}
	return obsMontada
	
		//if(destinoMaterial == 'Revenda'){
		//return baseIcmsSt * fecpLocalizado[0].fecp;
		//}
}