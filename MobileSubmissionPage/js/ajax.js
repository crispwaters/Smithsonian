//ajax.js
function postEventData(toSend)
{
	$.ajax({
		type: "POST",
		url: "../Events/MobileCreate",
		data: toSend,
		success: function() { 
			doAlert("Successfully added", "greenGradient", "shield_check");
		},
		error: function(msg) {
			doAlert("Error occurred: " + msg, "redGradient", "alert");
		}
	});
}

function addCustomDescription(toSend)
{
	$.ajax({
		type: "POST",
		url: "../ServiceDescription/MobileCreate",
		data: toSend,
		success: function(response) { 
			doAlert("Successfully added", "greenGradient", "shield_check");
			$('#settingsCustomDesc').append('<li sdid="' + response + '"><a href="#">' + $("#customdescription2").val() + '</a><a href="#" class="delBtn" style="display:block" onclick="settingsRemove($(this))" title="Delete">Delete</a></li>');
				$('#settingsCustomDesc').listview('refresh');
				$("#customdescription2").val("");
		},
		error: function(msg) {
			doAlert("Error occurred: " + msg, "redGradient", "alert");
		}
	});
}

function deleteCustomDescription(toSend, item)
{
	$.ajax({
		type: "POST",
		url: "../ServiceDescription/Delete/" + toSend,
		data: toSend,
		success: function() { 
			doAlert("Successfully deleted", "greenGradient", "shield_check");
			$(item).parent().remove();
		},
		error: function(msg) {
			doAlert("Error occurred: " + msg, "redGradient", "alert");
		}
	});
}