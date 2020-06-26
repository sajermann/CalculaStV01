//######################################################################################################
//############################################ | DIFAL MT | ############################################
//######################################################################################################
var cargaMediaMT = '';
function cargaMediaMTConsumo(){
$.confirm({
    title: 'Atenção',
	icon: 'fas fa-exclamation-triangle',
	theme:'dark',
    content: 'Informe a Carga Média Tributária do cliente em questão, essa informação quem passa é a São Vicente.' + 
	'<input type="number" placeholder="Apenas o Número, exemplo 17" class="name form-control" required="" autofocus="">',
    buttons: {
		formSubmit: {
			text: 'Ok',
            btnClass: 'btn-green',
			keys: ['enter', 'esc'],
            action: function () {
				cargaMediaMT = $('.name').val()
			},
		Cancelar: {
		btnClass: 'btn-danger',
		keys: ['enter'],
		action: function () {}
	}
	},
	}
});


}