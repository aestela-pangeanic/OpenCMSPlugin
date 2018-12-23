class ButtonBar {
	static get() {
		return $(ButtonBarFrame.getDocument()).find('table');
	}

	static hackLive() {
		window.addEventListener("load",function(event) {
		 	setInterval(ButtonBar.hack, 500);
		},false);	
	}

	static hack() {	
		var button_bar = ButtonBar.get();
		if (!button_bar.hasClass('hacked')) {
			ButtonBarFrame.loadCss()			
			button_bar.addClass('hacked');
			console.log('aaaa');
			//var vertical_bar = '<td><span class="norm"><span unselectable="on" class="txtbutton" style="padding-right: 0px; padding-left: 5px;"></span></span></td>';
			var blank_cell = '<td>&nbsp;</td>';
			var sep = '<td><span class="separator"></span></td>';
			var panel = `
			<td>
				<div id="translation-button-bar">
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td><div id="logo">T</div></td>
							<td>
								<select id="src_lang">
									<option value="es">Español</option>
								</select>
							<td>
								<select id="tgt_lang">
									<option value="en">Inglés</option>
									<option value="de">Alemán</option>
									<option value="fr">Francés</option>
									<option value="it">Italiano</option>
									<option value="ru">Ruso</option>
								</select>
							</td>
						</tr>
					</table>
				</div>				
			</td>`;
			var insert = blank_cell + sep + blank_cell + blank_cell +    panel;
			var cell = $(ButtonBar.get()).find('td.maxwidth');
			$(insert).insertBefore(cell);
		


		}
	}

	static getSrcLang() {
		return 	 ButtonBar.get().find('#src_lang').val();	
	}

	static getTgtLang() {
		return 	 ButtonBar.get().find('#tgt_lang').val();	
	}

}