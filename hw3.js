/////////////// 1. Email Address Validator

function validateEmailAddress(email) { 
var j=0;
  array=email.split("") ;

for (var i=0 ; i< array.length ; i++) {
    if(array[i] == "@")
      j++;
    }
if(j < 1 || j > 1)
return false
else {
  var at = email.indexOf("@");
        var left = array.slice(0, at) ;
        var right = array.slice(at+1, array.length) ;
      }
if (left.length > 32 || left.length < 8)
  return false;

 var numbers = 0;
  for (var i=0 ; i<left.length ; i++) 
        if (isNaN(left[i]) == false)
          numbers++ ;
        if (numbers == left.length )
        return false ;
if (left.indexOf("$") > -1 || left.indexOf("%") > -1)
  return false;

if (right.indexOf(".") > 16 || right.indexOf(".") < 6)
  return false;

if (right[right.length-1] == "m" && right[right.length-2] == "o" && right[right.length-3] == "c")
 return true; 

 else if (right[right.length-1] == "g" && right[right.length-2] == "r" && right[right.length-3] == "o")
 return true; 

else if (right[right.length-1] == "e" && right[right.length-2] == "d")
 return true; 

else
 return false;
}

console.log(validateEmailAddress("123456aa@outlook.com"));


///////////////////////////// 2. HTML List Generator
function listGenerator( numItems ) {
  var ourlist = "";
for ( var i=1; i<=numItems ; i++)
  ourlist = ourlist + "<li>index "+ i +"</li>" + "\n" ;
  return "<ul>" + "\n" + ourlist + "</ul>";
}
//////////////////////////// 3. HTML Template
var websiteTemplate =
"<html>" + "\n" 
+"<head>" + "\n"
+"<title>%TITLE</title>" + "\n" 
+"</head>" + "\n" 
+"<body>" + "\n"  
+"<div>%MYLIST</div>" + "\n" 
+"</body>" + "\n"
+"</html>";

function createTemplate( title , numItems ) {
	var result = websiteTemplate.replace("%TITLE", title)
								              .replace("%MYLIST", listGenerator( numItems ));
	return result;
}
 console.log(createTemplate("hello" , 4));

/////////////////////////////// 4. Code Generator
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var digits = [0,1,2,3,4,5,6,7,8,9];

var characters = [];

function randomNumber(max) {
return Math.round(Math.random() * max, 0);
}

function generateCode( codeLength ) {
  for (var i=0; i<codeLength ; i++) {
    var j = Math.abs(Math.round(Math.random() * alphabet.concat(digits).length-1,0)); // alphabet.length, 0); string all characters are randomly chosen from alphabet
      characters[i] = alphabet.concat(digits)[j]; // alphabet[j]; //
  }
return characters;
}
console.log(generateCode(6));