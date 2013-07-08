var PARSE_APP = "8nkGkTHJFzaNp731ZsjpMlqIGhDuQnQRibNsbhWI";
var PARSE_JS = "9S6VHeESePTLxN3vfL7ZXOPU6CjsxlGa9rJn01iv";
$(document).ready(function() {

    Parse.initialize(PARSE_APP, PARSE_JS);
    var TestObject = Parse.Object.extend("UserObject");

    function getNotes() {
        alert("In Get Users.");
        var query = new Parse.Query(TestObject);

        query.find({
            success:function(results) {

                alert("results: "+results.length);
                var s = "";
                for(var i=0, len=results.length; i<len; i++) {
                    var note = results[i];
                    s += "<p>";
                    s += "<b>"+note.get("firstName")+"</b><br/>";
                    s += "<b>Created on "+note.createdAt + "<br/>";
                    s += "</p>";
                }
                $("#notes").html(s);
            },
            error:function(results,error) {
                alert("Error when getting users!");
                alert("results: "+results.length);
                alert(error.get("code")+" " + error.get("message"));
            }
        });
    }

    $("#addNoteBtn").on("touchend", function(e) {
    e.preventDefault();

    //Grab the note details, no real validation for now
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var eMail = $("#eMail").val();
    var phoneNumber = $("#phoneNumber").val();
    alert("This was your name "+firstName+" ??");

    var user = new Parse.User();
    alert("TestObject Created");
    /*user.set("firstName",firstName);
    user.set("lastName",lastName);
     user.set("phoneNumber",phoneNumber);*/
    user.set("email",eMail);
    user.set("password", "Abc123!!");
    user.set("username",firstName);
        user.signUp(null, {
            success:function(user) {
                currentUser = user;
                cylon.loadPage("./confirmation.html");
            },
            error:function(user, error) {
                console.log("ERROR!");
                alert("Error!!!");
                console.dir(error);
                $("#regstatus").html(error.message).addClass("errorDiv");
            }
        });

        //getNotes();

});
});

function objToString (obj) {
    var str = '';
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            str += p + '::' + obj[p] + '\n';
        }
    }
    return str;
}