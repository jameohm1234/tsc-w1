var firstName : string = "mark"; //global variable

function a(){
    //var msg : string = "welcome to Tyscript"; //local variable
    //var name : string = "mark";
    var x : number= 30;
    return function b(){
     var y:number = x + 50;
     return y ; 
}

}
//console.log(a()());//ok
var c = a();
console.log(c());//ok
