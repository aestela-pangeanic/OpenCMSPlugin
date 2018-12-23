class EditFormFrame {
	static getDocument() {
		return 	window.frames["edit"].window.frames['editform'].document;
	}


	static loadCss() {
		var edit_frame_document = EditFormFrame.getDocument()
		var style = document.createElement("style");
		style.type = "text/css"; 
		var css = `
			.sample-text-input {
				width:700px;
			}


			.text-input-wrapper {
				position: relative;
				padding: 0px;
				display: block;
				width:100%;
				/*background:red;
				padding:1px*/
			}
			.translate-button {
			  	background-color: #4CAF50;
			    border: none;
			    color: white;
			    width:16px;
			    height:16px;
			    padding:0;
			    text-align: center;
			    text-decoration: none;
			    display: block;
			    font-size: 12px !important;
			    margin:0 !important;
			    font-weight: bold;
			    font-family: "Times New Roman", Times, serif !important;
			    line-height: 14px;
			    border-radius: 2px;
			    position:absolute;
			    right:0;
			    top:0;
			    color:#FFFFFF !important;
			    cursor:pointer;
			}


			.loader {
			  border: 4px solid #f3f3f3;
			  border-radius: 50%;
			  border-top: 4px solid #4CAF50;
			  width: 16px;
			  height: 16px;
			  -webkit-animation: spin 1s linear infinite; /* Safari */
			  animation: spin 1s linear infinite;
			  position:absolute;
			  top:0;
			  right:0;
			  background: rgba(255, 0, 0, 0);

			}

			/* Safari */
			@-webkit-keyframes spin {
			  0% { -webkit-transform: rotate(0deg); }
			  100% { -webkit-transform: rotate(360deg); }
			}

			@keyframes spin {
			  0% { transform: rotate(0deg); }
			  100% { transform: rotate(360deg); }
			}

			#ctrlbar-container {
				height:100px;
				background:blue;	

			}
			#ctrlbar {
				background:red;
				height:100px;
				position:absolute;
				width:100%;
				bottom:0;
			}
		`;

		css = edit_frame_document.createTextNode(css) 
		style.appendChild(css)
		edit_frame_document.head.appendChild(style);
	}
}