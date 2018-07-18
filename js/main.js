// Test number 1
var list = [17, 3, 89, -7, 18, 67.5];

function sortArray(arr){
	var count = arr.length - 1;
		for (var i = 0; i < count; i++) 
		    for (var j = 0; j < count-i; j++)
			    if (arr[j]> arr[j + 1]) {
		    	    var temp = arr[j];
			        list[j] = arr[j + 1];
				    arr[j + 1] = temp;
				}		
	return arr;
}
list = sortArray(list);
function showArray(){
	alert(list);
}
// Test number 2

function isTrueArray(arr){
	var myisArray = {}.toString;
	if(arr){
		return myisArray.call(arr) === '[object Array]';
	}
	return false;
}
function showisArray(){
	alert(isTrueArray(list));
}

// Test number 3


//callback

function boo(){
	alert('World');
}
function foo(callback){
	alert('Hello');
	callback();
}
//setTimeout
function foo(){
	setTimeout(function afterFiveSeconds(){
		alert('World');
	}, 5000);
	alert('Hello');
}

// Test number 4

var name = "Иван";
var count = 5;
String.prototype.format = function format() {
    return this.replace("%s", name).replace("%s", count);  
};
var string = "Привет %s! У вас %s сообщений".format();

function showString(){
	alert(string);
}