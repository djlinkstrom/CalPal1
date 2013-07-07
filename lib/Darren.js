var PARSE_APP = "8nkGkTHJFzaNp731ZsjpMlqIGhDuQnQRibNsbhWI";
var PARSE_JS = "9S6VHeESePTLxN3vfL7ZXOPU6CjsxlGa9rJn01iv";
$(document).ready(function() {

    Parse.initialize(PARSE_APP, PARSE_JS);


    var TestObject = Parse.Object.extend("UserObject");
    //NoteObject = Parse.Object.extend("NoteObject");


    function getNotes() {
        alert("In Get Users.");
        var query = new Parse.Query(TestObject);

        query.find({
            success:function(results) {
                console.dir(results);
                alert("results: "+results.length);
                var s = "";
                for(var i=0, len=results.length; i<len; i++) {
                    var note = results[i];
                    s += "<p>";
                    s += "<b>"+note.get("foo")+"</b><br/>";
                    s += "<b>Written "+note.createdAt + "<br/>";
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

    var user = new TestObject();
    user.save({firstName:firstName, lastName:lastName, eMail:eMail, phoneNumber:phoneNumber}, {
        success:function(object) {
            alert("Step4");
        },
        error:function(object,error) {

            alert("I saved it. Sort Of");
            alert(error.get("code")+" " + error.get("message"));
        }
    });
        //call getNotes immediately
        getNotes();

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