console.log("a")

let bar		= document.querySelectorAll('#bar')
	oval	= document.querySelectorAll('g#Oval')
	text	= document.querySelectorAll(".years")


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