url = 'http://prod.pangeamt.com:8080/NexRelay/v1/translate' //'http://prod.pangeamt.com:8080/NexRelay/v1/translate'
api_key = '000000'
translator = new Translator(url, api_key )

ButtonBar.hackLive()
EditForm.hackLive()


/*
function find_edit_form() {
	edit_form = EditForm.get()
	if (!edit_form.hasClass('loaded')) {
		go()
	}
}*/


/*function go() {		
	var d = window.frames["edit"].window.frames['editform'].document;
	editor = $(d).find('#EDITOR')
	editor.addClass('loaded')
	


	var inputs = $(d).find('input:text');
	inputs.each(function(i) {
		text_input = new TextInput($(this),i, translator)
	}) 
	loadCss() 


	var tiny = $(d).find('.mceIframeContainer iframe').contents().find( '#tinymce');
	//console.log('tiny');
	//$(mceD)
	console.log( tiny);	

	//tiny.append('<p>Hello man</p>');
	tiny.on('focus',function() {
		console.log('xxxxxx')
	})

}*/




