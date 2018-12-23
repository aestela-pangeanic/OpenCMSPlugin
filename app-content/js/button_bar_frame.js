class ButtonBarFrame {
	static getDocument() {
		return 	window.frames["edit"].window.frames['buttonbar'].document;;
	}

	static loadCss() {
		var button_bar_document = ButtonBarFrame.getDocument()
		var style = document.createElement("style");
		style.type = "text/css"; 
		var css = `
			#logo {
			  	background-color: #4CAF50;
			    border: none;
			    color: white;
				padding-right:5px;
			    text-decoration: none;
			    display: block;
			    font-size: 15px !important;
			    margin:0 !important;
			    font-weight: bold;
			    font-family: "Times New Roman", Times, serif !important;
			    line-height: 18px;
			    color:#FFFFFF !important;
			
			}
			
			#translation-button-bar td {
				line-height:18px;
				padding:0;
				height:18px !important;
			}
			#translation-button-bar  {
				background-color: #4CAF50;
				-webkit-border-radius: 5px;
				-moz-border-radius: 5px;
				border-radius: 5px;
				padding:0 10px;

			}

			#translation-button-bar select{
				background-color: #4CAF50;
				font-family: "Times New Roman", Times, serif !important;
				color:#FFF;
				font-size:13px !important;
				border:None;
			}
		`;
		css = button_bar_document.createTextNode(css) 
		style.appendChild(css)
		button_bar_document.head.appendChild(style);
	}


}