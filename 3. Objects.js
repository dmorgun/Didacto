/**
 * Created by dmorgun on 5/18/2015.
 */
//A JavaScript object is a collection of properties, separated by commas.
// Each property is an identifier and a value, separated by a colon. Some basic object definitions are:

var emptyObject = {};

var objectWithSimpleProperties = {
    a: 1,
    b: 2
};

//The value of an object's property can be retrieved using dot notation or bracket notation:
objectWithSimpleProperties.a;
// => 1

objectWithSimpleProperties['b'];
// => 2

//You can also add properties to an object that has already been defined, again using dot notation or backet notation:
objectWithSimpleProperties.c = 3;

objectWithSimpleProperties['d'] = 4;

//Define an object called 'bucket':
var bucket = {};

//Define an object called 'bucket' with a property called 'color' that has a string value:
var bucket = {
    color : "red"
}