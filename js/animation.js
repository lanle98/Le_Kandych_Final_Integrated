(()=>{

	title		=		document.querySelector(".animation h3")
	line		=		document.querySelector(".aniline")
	paragraph	=		document.querySelector(".animation p")

	function titleAnimation(){
		let Tline = new TimelineLite()

			Tline.to(line,1,{
			height:"20vw"
		})

			.to(title,1,{
			x: "-101%"
		})

			.to(paragraph,1,{
			x: "100%"
		})
	}


	window.addEventListener("load", titleAnimation)

})()