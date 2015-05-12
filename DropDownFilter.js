/*
	This extension automatically sorts the target types list when the Publish popup is loaded.
	It also removes all previously checked boxes for publishing.
*/

/*
	Run the javascript when the display loads.
*/
$evt.addEventHandler($display, "start", onDisplayStartedPublishPopup);

function onDisplayStartedPublishPopup() {
	var usersToExclude = ["px47", "r6ui", "a8db"]

	$evt.removeEventHandler($display, "start", onDisplayStartedPublishPopup);
	/*
		Only run the rest of the code on the Publish popup.
	*/
	if ($display.getView().getId() == "PublishQueueView") {
	
		alert("congrats...moron");

		var check = window.setInterval(function() {
			if (document.getElementById("TargetTypeList_frame_details")) {
				window.clearInterval(check);
				var table = document.getElementById("TargetTypeList_frame_details").contentDocument.getElementsByTagName("table")[0];
				var rows = table.getElementsByClassName("item even");
				var titles = new Array();
				for (var i = 0; i < rows.length; i++) {
					titles.push(rows[i].getAttribute("title").toLowerCase());
				}
				titles.sort();
				for (var j = 0; j < titles.length; j++) {
					var title = titles[j];
					for (var k = 0; k < rows.length; k++) {
						if (title == rows[k].getAttribute("title").toLowerCase()) {
							rows[k].parentNode.appendChild(rows[k]);
						}
					}
				}
				
/* 				// After sorting remove all previously slected checkboxes
				
				console.log(arrayContains(Tridion.UI.UserSettings.getJsonUserSettings(true).User.Data.Name,usersToExclude);
			
			if(!arrayContains(Tridion.UI.UserSettings.getJsonUserSettings(true).User.Data.Name,usersToExclude){
			alert('inside');
					var publishCheckBoxes = document.getElementById("TargetTypeList_frame_details").contentDocument.getElementsByTagName('input');
					for (var l = 0; l < publishCheckBoxes.length; l++) {
						if (publishCheckBoxes[l].checked == true)
							publishCheckBoxes[l].click();
					}
				} */
			}
		}, 1);
		
		
	}
}

//Helper
function arrayContains(wordToCheck, arrayName) {
	for (var i = 0; i != arrayName.length; i++) {
	   var substring = arrayName[i];
	   if (wordToCheck.toLowerCase().indexOf(substring) != - 1) {
		 return true;
	   }
	}
	return false; 
}
