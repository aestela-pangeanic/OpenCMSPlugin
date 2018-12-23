class EditForm {
	static get() {
		return $(EditFormFrame.getDocument()).find('#EDITOR')
	}

	static hackLive() {
		window.addEventListener("load",function(event) {
			EditForm.hack()
		 	setInterval(EditForm.hack, 500);
		},false);		
	}

	static hack() {
		var edit_form = EditForm.get()
		if (!edit_form.hasClass('hacked')) {			
			edit_form.addClass('hacked')

			// Load CSS
			EditFormFrame.loadCss()
	
			// Text inputs
			var inputs = edit_form.find('input:text');
			inputs.each(function(i) {
				var text_input = new TextInput($(this),i, translator)
			})

			// Textareas
			var textareas = edit_form.find('textarea');
			textareas.each(function(i) {
				var textarea = new Textarea($(this), i, translator)
			})

			// HTML editors
			var editors = edit_form.find('span.mceEditor');
			editors.each(function(i) {
				var editor = new HTMLInput($(this), translator)
			})

		}
	}

}