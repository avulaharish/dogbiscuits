/*
	This extension...
*/
/*
	Run the javascript when the display loads.
*/
$evt.addEventHandler($display, "start", onDisplayStartedDropDown);

function onDisplayStartedDropDown() {

	//$evt.removeEventHandler($display, "start", onDisplayStartedDropDown);
	/*
	Only run the rest of the code windows with drop downs.
	*/
	if ($display.getView().getId() == "PublishQueueView") {
		var check = window.setInterval(function() {
			if (document.getElementById("dropdownpanel_1_frame_details")) {			
				window.clearInterval(check);
				
				var myIframe = document.getElementById('dropdownpanel_1_frame_details');

				var script = myIframe.contentWindow.document.createElement("script");
				script.type = "text/javascript";
				script.src = "/CustomPages/groupcontact/jquery.js";
				myIframe.contentWindow.document.head.appendChild(script);

				setTimeout(function(){
					var script2 = myIframe.contentWindow.document.createElement("script");
					script2.type = "text/javascript";
					script2.src = "/CustomPages/groupcontact/jquery-ui-1.10.3.custom.js";
					myIframe.contentWindow.document.head.appendChild(script2);}, 500
				)

				setTimeout(function(){
				var script3 = myIframe.contentWindow.document.createElement("script");
				script3.type = "text/javascript";
				script3.src = "/CustomPages/groupcontact/jquery.dataTables.min.js";
				myIframe.contentWindow.document.head.appendChild(script3);}, 1000
				)

				setTimeout(function(){
				var script4 = myIframe.contentWindow.document.createElement("script");
				script4.type = "text/javascript";
				script4.src = "/CustomPages/groupcontact/jquery.dataTables.columnFilter.js";
				myIframe.contentWindow.document.head.appendChild(script4); } ,1500
				)
				
				setTimeout(function(){
				var script5 = myIframe.contentWindow.document.createElement("script");
				script5.type = "text/javascript";
				script5.src = "/CustomPages/groupcontact/script.js";
				//myIframe.contentWindow.document.body.appendChild(script5);				
				myIframe.contentWindow.document.head.appendChild(script5);	}, 2000
				)		

				myIframe.contentWindow.document.documentElement.attributes.removeNamedItem("style");
				myIframe.contentWindow.document.body.attributes.removeNamedItem("style");
				
				//myIframe.contentWindow.focus();

				parent.window["daryld"] = myIframe;
			}
		}, 100);
	}
}
