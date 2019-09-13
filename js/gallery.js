(()=>{
	console.log("gallery")
	let		eventBtn	=	document.querySelectorAll(".eventTop .seemoreEvent")
			popUp 		=	document.querySelector(".popup")
			closeBtn	=	document.querySelector(".closeBtn")
			contentImg	=	document.querySelector(".contentImg img")
			title		=	document.querySelector(".contentImg h3")
			paragraph	=	document.querySelector(".text p")
			eventName	=	document.querySelectorAll(".eventName h3")


	let		galleryArray	=	[




["Stream Habitat Work Party",

`A few TRAA members cleared a number of fallen trees and other blockages on October 13th.<br>
					Dan Shinkelshoek made a video of the proceedings and it's worth a look so click on the picture to view.<br>
					If you have further questions about TRAA stream habitat projects and events, please come out to the TRAA General Meeting on Wednesday, November 14th or contact us.`],






["Annual TRAA Paddle & Fish",


`This year we be mixed it up a bit by having the Annual TRAA Paddle & Fish on Sharon Creek Reservoir.<br>
					A thunderstorm threatened but only gave us a few minutes of rain to cool us off.<br>
					Fish targeted were largemouth bass, crappie and other panfish as well as some bruiser carp.<br>
					Many bass were caught with some crappies mixed in to make it interesting. Paul Holmes ended up with the largest fish, a nice smallmouth bass.

`],







["Stream Habitat Work Party",


`We were very excited to have a group from the MNRF's Stewardship Youth Rangers Program to do some work on Komoka Creek. This program gives groups of 16 or 17 year-olds an opportunity to spend 8 weeks working outdoors on natural resource management projects in their own community.<br>

They worked on clearing a section of Komoka Creek upstream of the TRAA trout hatchery.  A major tree had fallen and a lot of the bank went with it. This created a blockage and was diverting the stream, increasing the likelihood of further bank side damage and erosion.<br>
We were also fairly certain that this was a barrier to migratory and resident fish passage. `],
				





["Hatchery Roof Repair",


`As most members already know, a large tree was blown down during high winds on May 2nd.<br>

Ironically, barely a week before this happened, we had already removed a couple of dead trees that had been identified as potential hazards to the hatchery.<br>

At the time, we thought this tree wasn't a threat as it was well up the hill and well off to one side.<br>
It unfortunately glanced off of a couple of other trees as it fell, steering it directly on to the hatchery roof!

The resulting damage, shown in this picture after the tree was removed, will required the replacement of these metal roof panels and the plywood sheathing underneath them. In addition, a couple of the roof trusses needed to be repaired.<br>

It was an incredibly hot morning but the job was finished in record time. 
There were materials left over for the tool shed roof as well but that will be another day!<br>

If you have questions about this event or would like to get involved with other hatchery projects, please contact us.<br>

`],






["Family Fishing Day",


`This year we were pleased to welcome visitors from Chipewas of the Thames First Nation, to tour the trout hatchery and assist us with the release of more than 40,000 rainbow trout.<br>

Everyone was thrilled that the bald eagles with their young ones were keeping an eye on the proceedings at the release site.<br>

This was another successful year and those volunteers on the trout hatchery rotation are to be commended.<br>

The trout hatchery will undergo roof repairs as a result of a damaging blow from a fallen tree.<br>

Otherwise, the hatchery will be idle for the summer except for routine maintenance.<br>

If you'd like to be part of the hatchery rotation and other TRAA activities just contact us.<br>

`],







["3rd Annual TRAA Paddle & Fish",



`We held our 3rd Annual Paddle & Fish July 18th. <br>
Members met at the Tim Horton's on Veteran's Memorial Parkway and then left from there to the put-in at the Veteran's Memorial Parkway bridge.<br>
From there we paddled and fished our way down to Pottersburg Park.<br>

The access point was washed out from the recent rains so we had to "portage" from the road.<br>

After that though, the launch was smooth and easy as the fog lifted on what was to be a hot sunny day.`],








["Rainbow Trout Release",



`This spring's hatch of rainbow trout was incredibly successful with low mortality resulting in a phenomenal total of over 40,000 fry ready for release day on Saturday June 21, 2014.<br>

TRAA members and guests met at the Country Hearth Restaurant in Komoka and car-pooled to the TRAA hatchery site to help out moving the fry from the hatchery to the TRAA transfer tank.<br>

The rainbow trout fry were released into Dingman Creek.<br>

A big THANK YOU goes out to everyone on the trout hatchery rotation whose dedication ensured a visit every day of the week from the fall when we got the brown trout and the brook trout eggs, through the winter and into the spring when we got the rainbow trout eggs.<br>

Thanks also go out to Chris Coligan volunteering his pickup truck to transport the transfer tank to the release site.<br>

The pictures below from this event are courtesy Rob Huber.`],
				






["Brook Trout Release",


`The brook trout fingerlings went on the annual road trip throughout rural areas northeast of London to be released into several different cold water tributaries. These were brook trout eggs that we harvested with folks from the Upper Thames Conservation Authority (UTRCA) to be raised in the TRAA trout hatchery.<br>

Thanks to everyone that has put in their time and effort to collect the brook trout eggs, monitor them in the hatchery and participate in the release.<br>

TRAA members Rob and Owen Huber, Stan Gibbs, and Bill Vandewetering did most of the transfer and transportation duties with the support of the Upper ThamesConservation Authority, Ministry of Natural Resources.<br>

Special thanks to all of the landowners for being involved with the habitat improvements of these little coldwater streams into which these trout were released.`],
				








["Angling Sports Barbeque",


`There was hotdogs, burgers and lots of fun going on at this informal get-together.<br>

Paul Noble put his barbequing skills to the test supplying a steady stream of hungry customers.<br>

Ryan Simard spent most of his time trying to sell tickets for the "Count the Bobbers Contest". Ryan was also the main guy in organizing and pulling this whole event together - nice work Ryan!<br>

Your ticket gave you a chance at a $100 gift certificate courtesy of Angling Sports! As an additional bonus, you also got the equivalent of the tax taken off any purchase in the Angling Sports store!<br>

All the proceeds went to benefit the TRAA and our projects.`]

				]



	//open popup function
	function openPopup(elm){
		// open popup window
		popUp.classList.toggle("openPopup")

		//scroll effect
		let openPopup	=	document.querySelector("#windowPopup")
		TweenLite.to(window,.5,{
			scrollTo:{y:`#${openPopup.id}`,offsetY:20}	
		})
		


	}



	//close button function
	function closePopup(){
		
	}



	//event title loop
	for(i=0; i<eventName.length; i++)
	{
		eventName[i].innerHTML = galleryArray[i][0]
	}




	//event click for buttons
	eventBtn.forEach( function(e,index) {

		e.addEventListener("click", ()=>{
			//add content to specific event
			title.innerHTML 		=	galleryArray[index][0]
			paragraph.innerHTML		=	galleryArray[index][1]
			contentImg.src 			=	`images/events/img${index+1}.jpg`

			//call popup function
			openPopup()
			

		})
		
		

	})


	// event click for closebtn
	closeBtn.addEventListener("click", closePopup)

})()