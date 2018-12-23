class Textarea {
  constructor(textarea, id, translator) { // jquery
    this._textarea = textarea;
    this._id = id;
    this._translator = translator;
    this._textarea.wrap('<font class="text-input-wrapper" id="text-input-wrapper-' + this._id +'"></font>');
    this._wrapper = this._textarea.parent();
    this._translate_button = false;
    this._textarea.on('focus',this.create_translate_button.bind(this)); 
    $(EditFormFrame.getDocument()).on('focus_input',this.on_focus_textarea.bind(this));
  }

  on_focus_textarea(event, wrapper_id) {
    if (wrapper_id != this._wrapper.attr('id')) {
      this.remove_translate_button()
      this.translate_button = false
    }
  }

  remove_translate_button() {
    $('.translate-button', this._wrapper).remove()
    this._translate_button = false
  }

  create_translate_button() {
    // First we trigger an event to remove other button
    var edit_frame = EditFormFrame.getDocument()      
    $(edit_frame).trigger('focus_input', this._wrapper.attr('id'));

    // Create only one
    if (this._wrapper.find('.translate-button').length >0) {
      return;
    }
    
    // Create a translate button
    this._translate_button = $('<button class="translate-button">T</button>').insertAfter(this._textarea);

    // Adjust the position of the button
    var d = (this._wrapper.outerHeight() - this._translate_button.outerHeight())/2 + 'px'
    this._translate_button.css('top', 'auto')
    this._translate_button.css('bottom', '0px')
    this._translate_button.css('right', '0px')

    // Create click handler
    this._translate_button.click(this.on_click_translate_button.bind(this))
  }

  on_click_translate_button() {
    var to_translate = this._textarea.val()
    this.anim_start()
    this._translator.translate([to_translate],'es','en').then(
    function(result){
      this.anim_end()
      this._textarea.val(result[0][0]['tgt'])
    }.bind(this), function(err) {
      this.anim_end()
    }.bind(this));
  }

  anim_start() {
    // Remove animation
    this.anim_end()
    
    // Create animation 
    this._anim = $('<div class="loader"></div>').insertAfter(this._textarea);
    var t = (this._wrapper.outerHeight() - this._anim.outerHeight())/2 + 'px'
    this._anim.css('top', t)
    var r = (-this._anim.outerHeight() - 5) + 'px'  
    this._anim.css('right', r)    
  }

  anim_end() {
    this._wrapper.find('.loader').remove()
  }
}