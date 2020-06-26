$('.pesquisarProd').on('click', function(){quemMeAbriu = 'pesquisarProd';console.log(quemMeAbriu); produtos()});
// $('.pesquisarAlteracao').on('click', function(){quemMeAbriu = 'pesquisarAlteracao';console.log(quemMeAbriu); produtos()});
function produtos(){
$.alert({
	// columnClass: 'col-md-4 col-md-offs	et-8 col-xs-4 col-xs-offset-8',
	columnClass: 'col-md-6 col-md-offset-3',
		containerFluid: true,
	//theme: 'dark',
	title: '<strong>Produtos Cadastrados</strong>',
	icon: 'fas fa-exclamation-triangle',
	onOpenBefore: function () {},
	onClose: function () {quemMeAbriu = ''},
	onAction: function () {},
	content: 
'<div class="telaGeral">'+
'<table id="example" class="display compact" style="width:100%">'+
       ' <thead>'+
      '      <tr>'+
     '           <th>Código</th>'+
    '            <th>Descrição</th>'+
   '             <th>N.C.M</th>'+
  '          </tr>'+
 '       </thead>'+
'		<tbody>'+
'		</tbody>'+
/*'		<tfoot>'+
'            <tr>'+
'               	<th>codigo</th>'+
'                <th>descricao</th>'+
'                <th>ncm</th>'+
'            </tr>'+
'        </tfoot>'+*/
'    </table>'+
'</div>'+
'</div>'+
'<script>'+
'$(document).ready(function() {'+
'for(i = 1; i < bancoDadosProdutos.length; i++){'+
'$("tbody").append("<tr><td>" + bancoDadosProdutos[i].codigo + "</td>"+"<td>" + bancoDadosProdutos[i].descricao + "</td>"+'+
'"<td>" + bancoDadosProdutos[i].ncm + "</td></tr>")}'+
// 'var table = $("#example").DataTable();'+
'var table = $("#example").DataTable({'+
'   "iDisplayLength": 5,'+
 '   "aLengthMenu": [[5, 10, 25, 50, 100, -1], [5, 10, 25, 50, 100, "All"]]'+
'	});'+



'$("#example tbody").on( "click", "tr", function () {'+
 '       if ( $(this).hasClass("selected") ) {'+
'            $(this).removeClass("selected");'+
'        }'+
'        else {'+
'            table.$("tr.selected").removeClass("selected");'+
'            $(this).addClass("selected");'+
'        }'+
'});'+

'$("#example tbody").on( "click", "tr", function () {'+
'console.log($(this).find("td:eq(0)").text());'+
'codigoSelecionado = $(this).find("td:eq(0)").text()'+
'});'+



'});'+

'</script>'+
'<style>'+
'.telaGeral{display:flex;flex-direction:column;justify-content:center;align-items:center;}'+
'.linha{display:flex;flex-direction:row;justify-content:center;align-items:center}'+
'.descSelecionado{display:flex;flex-direction: row;justify-content: center;align-items: center;width: 390px;}'+
'.coluna{width: 195px;}'+
'.cabecalho{background:gray;}'+
'.todosIncomum{border: 1px solid white; text-align:center}'+
//'tr{background-color: #444;}'+
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
		if(quemMeAbriu == 'pesquisarProd'){$('#codigo').val(codigoSelecionado);calc();$('#quantidade').focus();}
		else if(quemMeAbriu == 'pesquisarAlteracao'){$('.codigoAlteracao').val(codigoSelecionado);calc();try{alteracao();$('.quantidadeAlteracao').select();}catch{}}
		else{}
		
},

},
	//Teste: {btnClass: 'btn-red', action: function(Ok){console.log('bruno')},}


}
});

}
