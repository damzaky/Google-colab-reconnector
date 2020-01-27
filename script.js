window.onload = function() { 
	MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

	function check() {
		var connect = document.getElementById('connect')
		var ok = document.getElementById('ok')
		// console.log("checking")

		if (typeof(connect) != 'undefined' && connect != null)
		{
			if(connect.textContent.includes("Reconnect")){
				console.log('reconnecting...')
				connect.click()
			}
		}
		if(typeof(ok) != 'undefined' && ok != null)
		{
			console.log('reconnecting...')
		 	ok.click()
		}
	}

	var observer = new MutationObserver(function(mutations, observer) {
		check()
	});
	observer.observe(document.body, {
	  subtree: true,
	  attributes: true
	});
}

