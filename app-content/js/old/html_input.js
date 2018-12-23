class HTMLInput {
	constructor(mce_editor, translator) { // jquery
    this._mce_editor = mce_editor
    this._translator = translator;	   		
    
    this._mce_iframe_id = mce_editor.attr('id').replace('_parent','_ifr')

    // In tinymce 
    this._input = mce_editor.find('.mceIframeContainer iframe').contents().find( '#tinymce')
      
    // The translate button appears when the field is focused
    this._input.on('focus',this.create_translate_button.bind(this)); 
    
    // The status bar
    this._status_bar = this._mce_editor.find('.mceStatusbar');
    this._status_bar.css('position','relative')	
    
    // The words count in the status bar 
    this._count_words = this._status_bar.find('div:last')	

    // Listen to costum event "focus_input" to hide the translate button when another input is focused
    $(EditFormFrame.getDocument()).on('focus_input',this.on_focus_text_input.bind(this));
  }
  
  create_translate_button() {
    // First we trigger an event to remove other translate button
    var edit_frame = EditFormFrame.getDocument()  		
    $(edit_frame).trigger('focus_input', this._mce_iframe_id)

    // skip if translate button exists 
    if (this._mce_editor.find('.translate-button').length >0) {
    	return
    }

    // Create translate button
    this._count_words.css('padding-right', '25px')  		
    this._translate_button = $('<button class="translate-button HTMLInput" style="float:right">T</button>').insertAfter(this._count_words);

    // Adjust the button size
    this._translate_button.css('height', this._status_bar.outerHeight() + 'px')
    this._translate_button.css('width', this._status_bar.outerHeight() + 'px')
    	
    // Create click handler for the translate button
    this._translate_button.click(this.on_click_translate_button.bind(this))
	}

	on_click_translate_button() {
    var to_translate = this._input.html()
    console.log(to_translate)
    this.anim_start()
		this._translator.translate([to_translate],'es','en').then(
			function(result){
				this.anim_end()
				this._input.html(result[0][0]['tgt'])
				console.log('dddddddddddddddd')
			}.bind(this), function(err) {
				this.anim_end()
			}.bind(this));
	}

  on_focus_text_input(event, object_id) {
    console.log()
    if (object_id !=  this._mce_iframe_id) {
      this.remove_translate_button()
      this.translate_button = false
    }
  }

  remove_translate_button() {
    $('.translate-button', this._status_bar).remove()
    this._translate_button = false
  }

  anim_start() {
  	// Remove animation
  	this.anim_end()
  	
  	// Create animation 
    this._count_words.css('padding-right','60px')
  	this._anim = $('<article class="loader"></article>').insertAfter(this._translate_button);
    var t = (this._status_bar.outerHeight() - this._anim.outerHeight())/2 + 'px'
    this._anim.css('top', t)
    var r =  '30px'	
    this._anim.css('right', r) 		
  }
  	
  anim_end() {
  	this._status_bar.find('.loader').remove();
    this._count_words.css('padding-right', '25px') 
  }
}