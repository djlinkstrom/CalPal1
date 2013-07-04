var PARSE_APP = "8nkGkTHJFzaNp731ZsjpMlqIGhDuQnQRibNsbhWI";
var PARSE_JS = "9S6VHeESePTLxN3vfL7ZXOPU6CjsxlGa9rJn01iv";
$(document).ready(function() {

    Parse.initialize(PARSE_APP, PARSE_JS);


    var TestObject = Parse.Object.extend("UserObject");
    //NoteObject = Parse.Object.extend("NoteObject");


    function getNotes() {
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
                alert(objToString(error));
            }
        });
    }

    $("#addNoteBtn").on("touchend", function(e) {
    e.preventDefault();

    //Grab the note details, no real validation for now
    var title = $("#noteTitle").val();
    var body = $("#noteBody").val();
    alert("This was your name "+title+" ??");

    var note = new TestObject();
    note.save({foo:title, testData:body}, {
        success:function(note) {
            console.log("Saved the object!");
            alert("Step4");
        },
        error:function(note,error) {

            alert("I saved it. Sort Of");
            alert(objToString(error));
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