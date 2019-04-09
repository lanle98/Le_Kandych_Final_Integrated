(()=>{
	console.log("gallery")
	let		eventBtn	=	document.querySelectorAll(".eventTop .seemore")
			popUp 		=	document.querySelector(".popup")
			closeBtn	=	document.querySelector(".closeBtn")
			console.log(eventBtn)

	function openPopup(){
		popUp.classList.toggle("openPopup")
	}

	function closePopup(){
		popUp.classList.remove("openPopup")
	}

	eventBtn.forEach(e => e.addEventListener("click", openPopup))
	closeBtn.addEventListener("click", closePopup)

})()