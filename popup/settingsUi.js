class IaSettingsUi {
	static init() {
		if (IaSettings.areSet()) {
			IaUi.get('accessPointUri').value = IaSettings.getAccessPointUri();
			IaUi.get('apiKey').value = IaSettings.getApiKey();
		}
		
		// We add a listerner to the save button
		IaUi.get('save').addEventListener('click', function(){
			IaSettingsUi.saveSettings();
		});
		
		//we add a listener to the toggleApiKey 
		IaUi.get('toggleApiKey').addEventListener('click', function(e){
			e.preventDefault();
			var apiKey = IaUi.get('apiKey');
			if (apiKey.getAttribute('type') == 'password') {
				apiKey.setAttribute('type','text');

			} else {
				apiKey.setAttribute('type','password');
			}		
		});

		document.addEventListener ("keydown", function (zEvent) {
		    if (zEvent.ctrlKey && zEvent.code === "KeyD") {
		        alert('hello')
		    }
		} );

		if (!IaSettings.areSet()) {
			IaUi.get('back').remove();
		}
		// We add a listener to the restore link 
		IaUi.get('restore').addEventListener('click', function(e){
			e.preventDefault();
			IaSettings.restore();
			IaUi.get('accessPointUri').value = null;
			IaUi.get('apiKey').value = null;
		});


	}
	


	static saveSettings() {
		var accessPointUri = IaUi.get('accessPointUri').value;
		var apiKey = IaUi.get('apiKey').value;

	 	IaSpinnerUi.start();
		IaSettingsUi.removeError();

		IaSession.openSession(accessPointUri, apiKey).then(function(){
			IaSettings.save(accessPointUri, apiKey) ;
			IaSpinnerUi.end();
			IaUi.showTranslationSection();
			IaUi.hideSettingsSection();

		}).catch(function(e){
			IaSpinnerUi.end();
			IaSettingsUi.showError('The access point URI or the api key might be wrong')
		});
		
			
	}

	static showError(text) {
		var errorMessage = document.createElement('p');
		errorMessage.className = 'error';
		var text = document.createTextNode(text);
		errorMessage.appendChild(text);
		
		IaUi.get('notification').appendChild(errorMessage);


	}
	static removeError() {
		var notification =  document.getElementById("notification");
		while (notification.firstChild) {
		    notification.removeChild(notification.firstChild);
		}
	}

	static showAdvancedSettings() {

	}
}