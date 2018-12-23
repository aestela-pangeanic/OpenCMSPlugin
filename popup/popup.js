$(function(){

	//IaSettings.restore();

	var plugin = new IaPlugin();
	plugin.init();


	$('#openSettings').click(function(e){
		e.preventDefault();
		//$('#settingsSection').show();
		$( "#settingsSection" ).fadeIn( "slow", function() {
			    // Animation complete
		});
		$('#translationSection').hide();
	});
});