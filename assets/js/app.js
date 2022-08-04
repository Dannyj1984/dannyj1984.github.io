function closeInfoModal() {
	if (window.navigator.standalone) {
		$('#infoModal').modal('hide');
	}
}

closeInfoModal();



//Load info popup on 3 seconds after page load
$(document).ready(function () {
	var rememberMe = localStorage.getItem('installed');
	if (!rememberMe) {
		setTimeout(function () {
			$('#infoModal').modal('show');
		}, 2000) // add ,1000 to load it after 1 seconds from page load
	};
});


//Check if user is using an android webapp  and if so dont show the info modal.
window.addEventListener('beforeinstallprompt', function(e) {
	//console.log(e.platforms);
	if(e.platforms == "web"){
		$("#infoModal").modal("hide");
		console.log("web");
	} else {
		console.log("Not web");
		
	}
});



var deferredPrompt;
window.addEventListener('beforeinstallprompt', function (e) {
	deferredPrompt = e;
	showAddToHomeScreen();
});

function showAddToHomeScreen() {
	var a2hsBtn = document.querySelector("#infoModal");
	var installed = sessionStorage.getItem('installed');
	if(installed === 'true'){
		a2hsBtn.style.display = "hide";
	} else {
		a2hsBtn.style.display = "block";
	}
	
	a2hsBtn.addEventListener("click", addToHomeScreen);
}

function addToHomeScreen() {
	var a2hsBtn = document.querySelector("#infoModal");
	// hide our user interface that shows our A2HS button 
	a2hsBtn.style.display = 'none';
	// Show the prompt 
	deferredPrompt.prompt();
	// Wait for the user to respond to the prompt 
	deferredPrompt.userChoice.then(function (choiceResult) {
		if (choiceResult.outcome === 'accepted') {
			console.log('User accepted the A2HS prompt');
		} else {
			console.log('User dismissed the A2HS prompt');
		}
		deferredPrompt = null;
	});
}

if('serviceWorker' in navigator){
	navigator.serviceWorker.register('/sw.js')
	  .then(reg => console.log('service worker registered'))
	  .catch(err => console.log('service worker not registered', err));
  }

  const rememberUser = () => {
	localStorage.setItem('installed', 'true');
}

// if ("serviceWorker" in navigator) {
// 	window.addEventListener("load", function() {
// 	navigator.serviceWorker
// 		.register("/serviceWorker.js")
// 		.then(res => console.log("service worker registered"))
// 		button.onclick = function() {
// 		registration.update();
// 		}
// 		.catch(err => console.log("service worker not registered", err))
		
		
// 	})
// }