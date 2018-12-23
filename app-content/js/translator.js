class Translator {
	constructor(url, api_key) {
		this._url = url;
		this._api_key = api_key;		
	}
	translate(srcs, src_lang, tgt_lang) {
		api_key = this._api_key
		url = this._url
		return new Promise(function(resolve, reject) {
			var data = { 
				src: src_lang,
				tgt: tgt_lang,
				apikey: api_key,
				mode: "2",
				text: srcs
			};
			$.ajax({
				type:'post',
				url: url,
				data: JSON.stringify(data),
				contentType: 'application/json',
				success: function(data) {
					resolve(data)	 				
				},
				error: function(xhr, ajaxOptions, thrownError) {
					reject(xhr)			
				}
			});			
		})
	}	
}

