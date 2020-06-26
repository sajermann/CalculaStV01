//######################################################################################################
//########################################## | ADD NEW ITEM | ##########################################
//######################################################################################################
var linha = 0

//Control + Enter
$('body').keydown(function (e) {
if (e.ctrlKey && e.keyCode == 13) {
try{  
addNewItem(id, cod, desc, ncm, quant, preco, total, ipi, baseCalculo, icms, baseIcmsSt, st, valorTotal, acresc, mva, icmsPorcentagem, intraPorcentagem, pis, cofins, fecp, difal)
}catch{modelConfirm('Algum campo não está preenchido corretamente!');}
}
});

//Botão Adicionar
$('#addNew').on('click', function(){
try{ 
addNewItem(id, cod, desc, ncm, quant, preco, total, ipi, baseCalculo, icms, baseIcmsSt, st, valorTotal, acresc, mva, icmsPorcentagem, intraPorcentagem, pis, cofins, fecp, difal)
}catch{modelConfirm('Algum campo não está preenchido corretamente!');}
});


function addNewItem(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u){
if($('#total').text() == '' || $('#total').text() == 'R$0,00'){
modelConfirm('Algum campo não está preenchido corretamente!');
}else{	
relacaoItens.push({id: a, cod: b, desc: c, ncm: d, quant: e, preco: f, total: g, ipi: h, baseCalculo: i, icms: j, baseIcmsSt: k, st: l, valorTotal: m, acresc: n, mva: o, icmsPorcentagem: p, intraPorcentagem: q, pis: r, cofins: s, fecp: t, difal: u}) //add
// $('.labelItensAdicionados').fadeIn(1500);
// $('.oculto').fadeIn(1500);
/*$('.oculto').animate({
    opacity: 1.00,
	height: "toggle"
  }, 500, function() {
    // Animation complete.
  });*/
  //$('.labelItensAdicionados').animate({opacity: 1.0}, 199);
  $('.oculto').animate({opacity: 1.0}, 299);
  $('#itensAdicionados').append(`<div class="linha${linha} linha" linha="${linha}"  style="opacity: 0.00;"><div class="item divConteudo" item="${linha}">${$('#item').html()}</div><div class="codigo divConteudo" codigo="${linha}">${$('#codigo').val()}</div> <div class="descricao divConteudo" descricao="${linha}">${$('#descricao').html()}</div> <div class="ncm divConteudo" ncm="${linha}">${$('#ncm').html()}</div> <div class="quantidade divConteudo" quantidade="${linha}">${$('#quantidade').val().replace('.',',')}</div> <div class="preco divConteudo" preco="${linha}">${$('#preco').val().replace('.',',')}</div> <div class="total divConteudo" total="${linha}">${$('#total').html()}</div> <div class="ipi divConteudo" ipi="${linha}">${$('#ipi').html()}</div> <div class="st divConteudo" st="${linha}">${$('#st').html()}</div> <div class="valorTotal divConteudo" valorTotal="${linha}">${$('#valorTotal').html()}</div> <div class="acresc divConteudo" acresc="${linha}">${$('#acresc').html().replace('.',',')}</div> <div class="mva divConteudo" mva="${linha}">${$('#mva').html().replace('.',',')}</div> <div class="icms divConteudo" icms="${linha}">${$('#icms').html().replace('.',',')}</div> <div class="intra divConteudo" intra="${linha}">${$('#intra').html().replace('.',',')}</div> </div>`)
  $(`.linha${linha}`).animate({opacity: 1.0}, 1000);
  

 
// $(`.linha${linha}`).fadeIn(1500);
//$('.detalhes').fadeIn(1500);
//$('.labelItensAdicionados').removeClass('oculto');
linha++
$('#item').html(linha)
$('#codigo').val(''); $('#quantidade').val(''); $('#preco').val(''); $('#codigo').focus();
}
}
