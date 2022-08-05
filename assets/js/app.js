

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

//Primary care section
//Clicking on managing infection button.
function closePCGC() {
	var x = document.getElementById("PCGeneralGuidelines");
	var y = document.getElementById("managingInfectionsPC");
	if (y.style.display === "none") {
		y.style.display = "flex";
	} else {
		y.style.display = "none";
	}
	if (x.style.display === "flex") {
		x.style.display = "none";
	}
}
//Clicking on gen guidelines button
function closePCMI() {
	var x = document.getElementById("managingInfectionsPC");
	var y = document.getElementById("PCGeneralGuidelines");
	if (y.style.display === "none") {
		y.style.display = "flex";
	} else {
		y.style.display = "none";
	}
	if (x.style.display === "flex") {
		x.style.display = "none";
	}
}
//Intermediate care section
//Clicking on managing infection button.
function closeICGC() {
	var x = document.getElementById("ICGeneralGuidelines");
	var y = document.getElementById("managingInfectionsIC");
	if (y.style.display === "none") {
		y.style.display = "flex";
	} else {
		y.style.display = "none";
	}
	if (x.style.display === "flex") {
		x.style.display = "none";
	}
}
//Clicking on gen guidelines button
function closeICMI() {
	var x = document.getElementById("managingInfectionsIC");
	var y = document.getElementById("ICGeneralGuidelines");
	if (y.style.display === "none") {
		y.style.display = "flex";
	} else {
		y.style.display = "none";
	}
	if (x.style.display === "flex") {
		x.style.display = "none";
	}
}
//Clicking on A&E Paed button
function onlyPaedInpat() {
	var a = document.getElementById("PaedInHC");
	var b = document.getElementById("AdInHC");
	var c = document.getElementById("HCGeneralGuidelines");
	var d = document.getElementById("HCProphylaxis");
	if (a.style.display === "none") {
		a.style.display = "flex";
	} else {
		a.style.display = "none";
	}
	if (b.style.display === "flex") {
		b.style.display = "none";
	}
	if (c.style.display === "flex") {
		c.style.display = "none";
	}
	if (d.style.display === "flex") {
		d.style.display = "none";
	}
}
//Clicking on A&E Adults button
function onlyAdInpat() {
	var a = document.getElementById("AdInHC");
	var b = document.getElementById("PaedInHC");
	var c = document.getElementById("HCGeneralGuidelines");
	var d = document.getElementById("HCProphylaxis");
	if (a.style.display === "none") {
		a.style.display = "flex";
	} else {
		a.style.display = "none";
	}
	if (b.style.display === "flex") {
		b.style.display = "none";
	}
	if (c.style.display === "flex") {
		c.style.display = "none";
	}
	if (d.style.display === "flex") {
		d.style.display = "none";
	}
}
//Clicking on Hosp Guidelines button
function onlyHospGuide() {
	var a = document.getElementById("HCGeneralGuidelines");
	var b = document.getElementById("PaedInHC");
	var c = document.getElementById("AdInHC");
	var d = document.getElementById("HCProphylaxis");
	if (a.style.display === "none") {
		a.style.display = "flex";
	} else {
		a.style.display = "none";
	}
	if (b.style.display === "flex") {
		b.style.display = "none";
	}
	if (c.style.display === "flex") {
		c.style.display = "none";
	}
	if (d.style.display === "flex") {
		d.style.display = "none";
	}
}

//show hosp guidelines button options
function showHospButtons() {
	var manInf = document.getElementById('managingInfectionsH');
	if(manInf.style.display === "flex") {
		manInf.style.display = 'none';
	} else {
		manInf.style.display = 'flex';
	}
		
		
}
//Clicking on Prophylaxis Guidelines button
function onlyProph() {
	var a = document.getElementById("HCProphylaxis");
	var b = document.getElementById("PaedInHC");
	var c = document.getElementById("AdInHC");
	var d = document.getElementById("HCGeneralGuidelines");
	if (a.style.display === "none") {
		a.style.display = "flex";
	} else {
		a.style.display = "none";
	}
	if (b.style.display === "flex") {
		b.style.display = "none";
	}
	if (c.style.display === "flex") {
		c.style.display = "none";
	}
	if (d.style.display === "flex") {
		d.style.display = "none";
	}
}



function closeInfoModal() {
	if (window.navigator.standalone) {
		$('#infoModal').modal('hide');
	}
}

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

window.addEventListener('beforeinstallprompt', function(e) {
	//console.log(e.platforms);
	var installed = localStorage.getItem('installed');
	if(installed === 'true'){
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
	a2hsBtn.style.display = "block";
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

closeInfoModal();

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

const rememberUser = () => {
	localStorage.setItem('installed', 'true');
}

//Load info popup on 3 seconds after page load
$(document).ready(function () {
	var rememberMe = localStorage.getItem('installed');
	if (!rememberMe) {
		setTimeout(function () {
			$('#infoModal').modal('show');
		}, 2000) 
	};
});