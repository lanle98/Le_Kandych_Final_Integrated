(()=>{

console.log("a")

let bar		= document.querySelectorAll('#bar')
	oval	= document.querySelectorAll('g#Oval')
	text	= document.querySelectorAll(".years")
	projectToggle = document.querySelectorAll('.projectDetail_toggle')
	project = document.querySelectorAll(".project img")
	open = document.querySelector(".projectOpen")
	menuBar = document.querySelector(".menuBar")
	mobileNav = document.querySelector(".mobileNav")


menuBar.addEventListener('click', function(){
	mobileNav.classList.toggle("mobileNav_open")
	

	
})


// timeline for About page
oval.forEach((e,index)=> e.addEventListener("click", function(){
	if(bar[index].style.display == "block")
	{
		bar[index].style.display = "none"
	}
	else
	{
		bar[index].style.display = "block"
	}
	
}))


// open projects for Projects Page
project.forEach((e,index)=>e.addEventListener("click",function()
{

	projectToggle[index].classList.toggle("projectOpen")

}))



})()