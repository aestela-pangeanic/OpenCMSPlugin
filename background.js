scripts = [
    'app-content/js/jquery-3.3.1.min.js',
    
    // inputs
	'app-content/js/inputs/text_input.js',
	'app-content/js/inputs/html_input.js',
	'app-content/js/inputs/textarea.js',
  	
  	// Translator
	'app-content/js/translator.js',
	
	// Edit form
	'app-content/js/edit_form_frame.js',
	'app-content/js/edit_form.js',
	
	// Button Bar
	'app-content/js/button_bar_frame.js',
	'app-content/js/button_bar.js',
	
	// Main
	'app-content/js/main.js',

]
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){	
	if (message.cmd == 'load_content_script') {
		scripts.forEach(function(script) {
		  console.log(script);
		  chrome.tabs.executeScript(null, {file:script});
		});				
	    return true;// Important
	}
});