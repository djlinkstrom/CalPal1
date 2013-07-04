//Parse related keys
var PARSE_APP = "8nkGkTHJFzaNp731ZsjpMlqIGhDuQnQRibNsbhWI";
var PARSE_JS = "9S6VHeESePTLxN3vfL7ZXOPU6CjsxlGa9rJn01iv";
$(document).ready(function() {

   // Parse.initialize(PARSE_APP, PARSE_JS);
    alert("Step0");
    var TestObject = Parse.Object.extend("TestObject");
    alert("Step0.5");
    var testObject = new TestObject();
    alert("Step0.75");
    testObject.save({foo: "Darren"}, {
        /*success: function(object) {
            alert("yay! it worked");
        },
        error:function(object,error) {

            alert("Sorry, I couldn't save it.");
            alert(error);
        }      */
    });

});