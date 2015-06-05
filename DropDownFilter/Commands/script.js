$('document').ready(function(){
	buildTable();
});

function buildTable(){

	$('table').prepend("<thead><tr><td><div class='icon' style='background-image: url(/WebUI/Editors/CME/Themes/Carbon/icon_v7.1.0.66.5_.png?name=T65552L0P0S1&amp;size=16);'></div></td><td> Sort By Name </td></tr></thead>");
	$("#item_null").append("<td>(All)</td>");

	setTimeout(function(){
		parent.window["daryl"] = $('table').dataTable({
			"bJQueryUI": true,
			"sPaginationType": "full_numbers",
			"iDisplayLength": 25,
			"orderClasses": false,
			"deferRender": true,
			"aaSorting": [[0, 'desc']],
			"bAutoWidth": false, // Disable the auto width calculation 
			"oLanguage": {    "sSearch": "Filter: "  },
			"bPaginate": false // Turn off pagination
		});

		$("#DataTables_Table_0_filter input").attr("id","search");
		$("#DataTables_Table_0_filter input").attr("style","z-index: 0;");
		//$("#DataTables_Table_0_filter input").attr("autofocus","autofocus");
		
		 $("#search").focusin(function(event){
			event.stopPropagation();
			alert("focus...");
		});
		
		/*var elem = document.getElementById("search");
		elem.value = "My default value";
		//elem.addEventListener('click', function() { alert("click"); }, false);
		elem.addEventListener('dblclick', function() { elem.focus(); }, false);
		elem.addEventListener('focusin', function() { alert("focusin"); }, false);
		elem.addEventListener('focusout', function() { alert("focusout"); }, false);
		elem.addEventListener('keydown', function() { alert("keydown"); }, false);
		elem.addEventListener('keypress', function() { alert("keypress"); }, false);
		elem.addEventListener('keyup', function() { alert("keyup"); }, false);
		//elem.addEventListener('mousedown', function() { alert("mousedown"); }, false);
		//elem.addEventListener('mouseup', function() { alert("mouseup"); }, false);
		elem.addEventListener('paste', function() { alert("paste"); }, false);*/
		
		
		
		document.getElementById("search").focus();


		//parent.window["test"] = $("#DataTables_Table_0_filter input").attr("z-index",1000000);
		
	},500);	
}



/*setTimeout(function(){
	$(function () {
		$("#search").hover(function () {
			$(this).focus();
		});
	});
	$("#search").keyup(function() {
        var dInput = $(this).val();
        alert(dInput);
        //$(".dDimension:contains('" + dInput + "')").css("display","block");
    });
},500);*/
