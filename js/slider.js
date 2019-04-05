(()=>{

	console.log("slider")


	sliderButton 		=		document.querySelectorAll('.slider span')
	title				=		document.querySelectorAll(".title")
	slideBoard			=		document.querySelector(".slideShow")
	firstbtn			=		sliderButton[0].classList.add("sliderActive")

	console.log(sliderButton)

	function slideShow()
	{
		// remove the active class for all
		for(let i=0; i<sliderButton.length; i++)
		{
			sliderButton[i].classList.remove("sliderActive")
		}

		// add active class to current target
		this.classList.add("sliderActive")
		console.log(this)

		// set the right value
		let offsetValue = this.dataset.offset * 100

		
			let animation = TweenMax.to(slideBoard,0.5, {
		ease:Linear.easeNone, right: `${offsetValue}vw`}
		);

		if(offsetValue == 0)
		{
			
		}

	}

	
	sliderButton.forEach(e => e.addEventListener("click", slideShow))

})()