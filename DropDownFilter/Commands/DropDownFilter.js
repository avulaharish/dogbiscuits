/*
This extension allow for a filter box to be shown on top of any Tridion drop down that will automaticly sort the items as the user types.
*/
/*
Run the javascript when the display loads.
*/

// Set the event for the start of the display
$evt.addEventHandler($display, "start", onLoadDropDownFilter); 

// Function for the extension
function onLoadDropDownFilter(){

	// Boolean to toggle the close of the filter and drop down
	var dontClose = true;
	
	// Wait for an interval to load the JS
	var check = window.setInterval(function(){
		
		// Duck punch the existing _toggle fuction to add our jQuery filter box
		Tridion.Controls.Dropdown.prototype._toggle = function Dropdown$_toggle() {					
			if (this.properties.expanded)
			{
				this._close(); 
			}
			else
			{ 
				this._open(); 
				 
				/* WCM Team Customization starts */
				
				// Set a object for the filter
				var objDropDownFilter=this;
				
				// Set the posistion of the filter box above the drop down
				topP=jQuery(".dropdownpanel").position().top-58;
				leftP=jQuery(".dropdownpanel").position().left;
				
				// Add the filter box before the drop down
				jQuery(".dropdownpanel").parent().before("<div id='customDropDown' style='z-index:1000;position:absolute;top:"+topP+"px;left:"+leftP+"px;height:20px;background:#a1a9b2;border:1px solid #a1a9b2;padding:5px 5px 8px 15px;'><span style='font-family: Verdana;font-size:11px'>Filter By:</span>&nbsp;<input type=text size=50 id='dropDownFilter' style='height:20px;'/></div>");
				
				// Set the event to filter on the text in the filter box
				jQuery("#dropDownFilter").on("keyup",function(){
					$search = jQuery("#dropDownFilter").val();
					
					// Search regular expression with the value replacing the spaces
					$search = new RegExp($search.replace(new RegExp(' ', 'g'), '\\s'), 'i');
					
					// Scroll to the top of the box on filter
					jQuery("#dropdownpanel_1_frame_details").contents().scrollTop(0);
					jQuery("#dropdownpanel_1_frame_details").contents().find(".item").show();
					
					// Loop through the array and hide what does not match
					jQuery("#dropdownpanel_1_frame_details").contents().find(".item").each(function(){
						text =jQuery(this).find(".text");
						if(!text.text().match($search))
							jQuery(this).hide();
					});
				});
				/* WCM Team Customization ends */
			}
		};

		Tridion.Controls.Dropdown.prototype._close = function Dropdown$_close()
		{
			/* WCM Team Customization starts */
			
			// Allow the filter box to be typed into and not close
			if(jQuery("#dropDownFilter").is(":focus") && dontClose){
				
				// Set the toggle for the close on next selection
				dontClose = false;
				
				// Jump out of the method
				return;
			}

			// Remove the filter box
			jQuery("#customDropDown").remove();
			
			// Toggle the close for the next time
			dontClose = true;
			
			/* WCM Team Customization ends */
			 
			if (this.properties.expanded)
			{
				var panel = Tridion.Controls.Dropdown._getPanel();

				$css.pixelLeft(panel, -(panel.offsetWidth + 100));
				$css.pixelTop(panel, -(panel.offsetHeight + 100));

				$evt.removeEventHandler($display, "resize", this.getDelegate(this._close));

				this.properties.expanded = false;
				this.fireEvent("close");
			}
		};	
	,500);}
}
