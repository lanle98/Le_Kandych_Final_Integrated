(()=>{

console.log("a")

let bar			= document.querySelectorAll('#bar')
	oval		= document.querySelectorAll('g#Oval')
	text		= document.querySelectorAll(".years")
	projectToggle 	= document.querySelectorAll('.projectDetail_toggle')
	promoImg 	= document.querySelectorAll(".promoImg")
	project 	= document.querySelectorAll(".project")
	open 		= document.querySelector(".projectOpen")
	menuBar	 	= document.querySelector(".menuBar")
	mobileNav 	= document.querySelector(".mobileNav")
	traa		= document.querySelectorAll(".traa")
	articles	= document.querySelectorAll(".articles")



//menuBar for mobile 
menuBar.addEventListener('click', function(){
	mobileNav.classList.toggle("mobileNav_open")
	

	
})


// open projects for Projects Page
project.forEach((e,index)=>e.addEventListener("click",function()
{	
	project[index].classList.toggle("projectHover")
	projectToggle[index].classList.toggle("projectOpen")


}))

// Traa data chart toggle
traa.forEach((e,index)=>e.addEventListener("click",function()
{	
	articles[index].classList.toggle("articlesToggle")


}))



})()