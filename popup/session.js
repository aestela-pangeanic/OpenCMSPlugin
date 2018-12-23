class IaSession{	
	static setSessionId(value) {
		chrome.extension.getBackgroundPage().sessionId = value;
	}
	static getSessionId() {
		return chrome.extension.getBackgroundPage().sessionId;
	}
	static isOpened() {
		return (IaSession.getSessionId() != null)
	}
	static openSession(accessPointUri, apiKey) {
		return  new Promise(function(resolve, reject) {
			setTimeout(function(){
				if (accessPointUri == 'pangeanic-online.com' && apiKey == '123456') {
					IaSession.setSessionId('123456789');
					resolve(1)
				} else {
					reject('Authentication failed');	
				}
			}, 1000);						
		});	
	}
}