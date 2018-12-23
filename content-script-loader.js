
chrome.runtime.sendMessage({cmd: 'load_content_script'}, function(response) {
	console.log('Loading scripts...')
});


