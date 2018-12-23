class IaSettings {
	static areSet() {
		if (this.getApiKey() === null || this.getApiKey() === null) return false;
		return true;
	}
	static getApiKey() {
		return localStorage.getItem('apiKey');
	}
	static getAccessPointUri() {
		return localStorage.getItem('accessPointUri');
	}

	static save(accessPointUri, apiKey) {

		localStorage.setItem('apiKey',apiKey);
		localStorage.setItem('accessPointUri',accessPointUri);
		
	}
	static restore() {
		localStorage.removeItem('apiKey');
		localStorage.removeItem('accessPointUri');	
	}
}