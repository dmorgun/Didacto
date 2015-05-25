//Strings
//JavaScript strings are created by surrounding a string of characters with quotation marks or single quotes.
// This is called a string literal.

var firstName = "Bob";
var lastName = 'Smith'

//Length
//String instances have a propery length that returns the number of characters in the string.
firstName.length;
// => 3

lastName.length;
// => 5

//The variable 'sicp' contains an exerpt from 'Structure and Interpretation of Computer Programs' by Harold Abelson and
// Gerald Jay Sussman. Define a variable called 'exerptLength' and assign to it the length of the sicp exerpt:
var sicp = "As one would expect from its goals, artificial intelligence research generates many significant programming problems. In other programming cultures this spate of problems spawns new languages. Indeed, in any very large programming task a useful organizing principle is to control and isolate traffic within the task modules via the invention of language. These languages tend to become less primitive as one approaches the boundaries of the system where we humans interact most often. As a result, such systems contain complex language-processing functions replicated many times. Lisp has such a simple syntax and semantics that parsing can be treated as an elementary task. Thus parsing technology plays almost no role in Lisp programs, and the construction of language processors is rarely an impediment to the rate of growth and change of large Lisp systems. Finally, it is this very simplicity of syntax and semantics that is responsible for the burden and freedom borne by all Lisp programmers. No Lisp program of any size beyond a few lines can be written without being saturated with discretionary functions. Invent and fit have fits and reinvent! We toast the Lisp programmer who pens his thoughts within nests of parentheses.";
var exerptLength = sicp.length;

//Accessing a Character
//You can access the character at a particular index in a string by using the charAt method.
// The index of the first character is 0, the index of the second character is 1 and so on.
//    The value returned from the charAt method is a string containing a single character, because
// JavaScript has no character data type.

var input = 'abcdef';

input.charAt(0);
// => 'a'

input.charAt(1);
// => 'b'

input.charAt(5);
// => 'f'

//The variable 'sicp' contains an exerpt from 'Structure and Interpretation of Computer Programs' by Harold Abelson and
//Gerald Jay Sussman. Define a variable called 'ninetyNinth' and assign to it the character at index 99 of the variable 'sicp':
var sicp = "As one would expect from its goals, artificial intelligence research generates many significant programming problems. In other programming cultures this spate of problems spawns new languages. Indeed, in any very large programming task a useful organizing principle is to control and isolate traffic within the task modules via the invention of language. These languages tend to become less primitive as one approaches the boundaries of the system where we humans interact most often. As a result, such systems contain complex language-processing functions replicated many times. Lisp has such a simple syntax and semantics that parsing can be treated as an elementary task. Thus parsing technology plays almost no role in Lisp programs, and the construction of language processors is rarely an impediment to the rate of growth and change of large Lisp systems. Finally, it is this very simplicity of syntax and semantics that is responsible for the burden and freedom borne by all Lisp programmers. No Lisp program of any size beyond a few lines can be written without being saturated with discretionary functions. Invent and fit have fits and reinvent! We toast the Lisp programmer who pens his thoughts within nests of parentheses.";
var ninetyNinth = sicp.charAt(99);

//Concatenation
//JavaScript uses the + operator to join two strings into a third string.
//
//    The concat method can be used to join a larger number of strings.

var start = 'start';
var end = 'end';
start + end;
// => 'startend'

start + 'middle' + end;
// => 'startmiddleend'

start.concat('middle', end);
// => 'startmiddleend'