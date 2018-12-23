class IaPlugin {
	static debug(something) {
		console.log(something);
	}
	init() {
		
		IaSettingsUi.init();
		
		if (!IaSettings.areSet()) {
			IaUi.showSettingsSection();
			return;
		} 

		if (IaSession.isOpened()) {
			IaUi.showTranslationSection();
		} else {
			IaSession.openSession(IaSettings.getAccessPointUri(), IaSettings.getApiKey()).then(function(result){
				IaUi.showTranslationSection();
			}).catch(function(e){
				IaUi.showSettingsSection();
			});	
		}		
	}
}