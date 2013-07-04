//Parse related keys
var PARSE_APP = "8nkGkTHJFzaNp731ZsjpMlqIGhDuQnQRibNsbhWI";
var PARSE_JS = "9S6VHeESePTLxN3vfL7ZXOPU6CjsxlGa9rJn01iv";
$(document).ready(function() {

    Parse.initialize(PARSE_APP, PARSE_JS);
    alert("I am an alert box!");
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}, {
        success: function(object) {
            alert("yay! it worked");
        }
    });
    alert("I am an alert box!");
    NoteObject = Parse.Object.extend("NoteObject");

    $("#addNoteBtn").on("touchend", function(e) {
        e.preventDefault();
        alert("I am an alert box2   !");
        //Grab the note details, no real validation for now
        var title = $("#noteTitle").val();
        var body = $("#noteBody").val();
        alert("I am an alert box2   !"+title+"??");

        var note = new NoteObject();
        note.save({title:title, body:body}, {
            success:function(object) {
                console.log("Saved the object!");
            },
            error:function(object,error) {
                console.dir(error);
                alert("Sorry, I couldn't save it.");
            }
        });
    });
});