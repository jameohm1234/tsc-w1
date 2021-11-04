var firstName = "mark"; //global variable
function a() {
    //var msg : string = "welcome to Tyscript"; //local variable
    //var name : string = "mark";
    var x = 30;
    return function b() {
        var y = x + 50;
        return y;
    };
}
var c = a();
console.log(c());
