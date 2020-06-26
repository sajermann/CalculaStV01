//remover Itens
$('#remove').click(chooseItemRemove);

function chooseItemRemove(){
	$.confirm({
    title: 'Excluir Item!',
	icon: 'fas fa-exclamation-triangle',
	theme:'dark',
	content: '' +
    '<form action="" class="formName">' +
    '<div class="form-group">' +
    '<div class="input-group mb-3" style="display:n/one">'+
	'<div class="input-group-prepend">'+
	'<span class="input-group-text" id="inputGroup-sizing-default" style="border-radius:0">Identificação do Item</span>'+
	'</div>'+
    '<input type="number" placeholder="ID" class="name form-control" required autofocus style="width: 69px;"/>' +
	'</div>'+
	'</div>' +
    '</form>'+
	'<script>'+
	'$(".form-control").val(linhaSelecionada)'+
	'</script>',
    buttons: {
        formSubmit: {
            text: 'Confirmar',
            btnClass: 'btn-green',
			keys: ['enter'],
            action: function () {
                var name = this.$content.find('.name').val();
                if(!name){
                    modelConfirm('Esse campo não pode ficar em branco!');
                    return false;
                }
				if ($('#itensAdicionados').find('.linha' + name).length == 0){
					modelConfirm('Item não encontrado!');
					return false;
				}
				var indexItem = relacaoItens.findIndex(function(item){return item.id == name;})
				deleteItem(name, indexItem);
            }
        },
         Cancelar: {
			btnClass: 'btn-red',
			keys: ['esc'],
			action: function () {
            //close
			
			}},
    },
    onContentReady: function () {
        // bind to events
        var jc = this;
        this.$content.find('form').on('submit', function (e) {
            // if the user submits the form by pressing enter in the field.
            e.preventDefault();
            jc.$$formSubmit.trigger('click'); // reference the button and click it
        });
    }
});

}


function deleteItem(idItem, indexItem){
//Remove Linha	
$( ".linha" + idItem).fadeOut(1500, function() {
	$( ".linha" + idItem).remove();
});
//Remove Do Array Relação de Itens
relacaoItens.splice(indexItem,1);
//Recalcula
if($('#codigo').val() == ''){
	$('#codigo').val('1800');calc();
	$('#codigo').val('');$('#descricao').text('');
	$('#ncm').text('')
	}
baseCalculoHeader =  calculoBaseCalculoHeader();
icmsHeader =  calculoIcmsHeader();
baseIcmsStHeader =  calculoBaseIcmsStHeader();
stHeader =  calculoStHeader();
totalProdutosHeader =  calculoTotalProdutosHeader();
fecpHeader = calculoFecpHeader();
difal = calculoDifal();
pisHeader =  calculoPisHeader();
cofinsHeader =  calculoCofinsHeader();
ipiHeader =  calculoIpiHeader();
totalNotaHeader =  calculoTotalNotaHeader();
$('#baseCalculoHeader').text(visualFormat(null, baseCalculoHeader));
$('#icmsHeader').text(visualFormat(null, icmsHeader));
$('#baseIcmsStHeader').text(visualFormat(null, baseIcmsStHeader));
$('#stHeader').text(visualFormat(null, stHeader));
$('#totalProdutosHeader').text(visualFormat(null, totalProdutosHeader));
$('#fecpHeader').text(visualFormat(null, fecpHeader));
$('#pisHeader').text(visualFormat(null, pisHeader));
$('#cofinsHeader').text(visualFormat(null, cofinsHeader));
$('#ipiHeader').text(visualFormat(null, ipiHeader));
$('#totalNotaHeader').text(visualFormat(null, totalNotaHeader));
modelConfirm('Item excluído com sucesso!');
};

