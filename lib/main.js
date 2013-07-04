//Parse related keys
var PARSE_APP = "8nkGkTHJFzaNp731ZsjpMlqIGhDuQnQRibNsbhWI";
var PARSE_JS = "9S6VHeESePTLxN3vfL7ZXOPU6CjsxlGa9rJn01iv";
$(document).ready(function() {


    alert("Step0");
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "Darren"}, {
        success: function(object) {
            alert("yay! it worked");
        }
    });
    alert("Step1");
    NoteObject = Parse.Object.extend("NoteObject");
    alert("Step2");
    $("#addNoteBtn").on("touchend", function(e) {
        e.preventDefault();
        alert("In the loop");
        //Grab the note details, no real validation for now
        var title = $("#noteTitle").val();
        var body = $("#noteBody").val();
        alert("This was your title "+title+" ??");

        var note = new NoteObject();
        alert("Step3");
        note.save({title:title, body:body}, {
            success:function(object) {
                console.log("Saved the object!");
                alert("Step4");
            },
            error:function(object,error) {
                console.dir(error);
                alert("Sorry, I couldn't save it.");
                alert("Step4b");
            }
        });
        testObject.save({foo: title}, {
            success: function(object) {
                alert("yay! it worked");
                alert("Step5");
            }
        });
    });
});