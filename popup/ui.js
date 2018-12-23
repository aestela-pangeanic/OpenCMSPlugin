class IaUi {
	static get(id) {
	
		var el = document.getElementById(id);
	
		return el;
	}
	static showSettingsSection() {
		IaPlugin.debug('Show Settings ');	
		$( "#settingsSection" ).fadeIn( "slow");
	}
	static hideSettingsSection() {
		
		$( "#settingsSection" ).hide();
	}
	static showTranslationSection() {
		IaPlugin.debug('Show translation section');	
		$( "#translationSection" ).fadeIn( "slow");
	}
}