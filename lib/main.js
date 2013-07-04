//Parse related keys
var PARSE_APP = "8nkGkTHJFzaNp731ZsjpMlqIGhDuQnQRibNsbhWI";
var PARSE_JS = "9S6VHeESePTLxN3vfL7ZXOPU6CjsxlGa9rJn01iv";

$(document).ready(function() {
	Parse.initialize(PARSE_APP, PARSE_JS);

	UserObject = Parse.Object.extend("UserObject");

	function getUsers() {
		var query = new Parse.Query(UserObject);

		query.find({
			success:function(results) {
				console.dir(results);
				var s = "";
				for(var i=0, len=results.length; i<len; i++) {
					var user = results[i];
					s += "<p>";
					s += "<b>"+user.get("title")+"</b><br/>";
					s += "<b>Written "+user.createdAt + "<br/>";
					s += user.get("body");
					s += "</p>";
				}
				$("#users").html(s);
			},
			error:function(error) {
				alert("Error when getting users!");
			}
		});
	}

	$("#addUserBtn").on("touchend", function(e) {
		e.preventDefault();

		//Grab the note details, no real validation for now
		var title = $("#userName").val();
		var body = $("#description").val();

		var note = new UserObject();
		note.save({title:title, body:body}, {
			success:function(object) {
				console.log("Saved the object!");
				$("#userName").val("");
				$("#description").val("");
				getUsers();
			}, 
			error:function(object,error) {
				console.dir(error);
				alert("Sorry, I couldn't save it.");
			}
		});
	});

	//call getNotes immediately
	getNotes();

});