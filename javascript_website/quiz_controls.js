
var today = new Date().toLocaleDateString();
var date = new Date(1232).toLocaleDateString();
var custom = new Date("10 November, 2011").toLocaleDateString();
var digits = new Date(2011, 10).toLocaleDateString();
var dilis = new Date()
document.write(dilis.getDate());
document.write(dilis.getTime());
//document.write(today,date,custom,digits);
function getAnswer()
		
{

var secretName = "harry potter";
var myTextBox = document.getElementById("txtName");
var lowername = myTextBox.value;
var name = lowername.toLowerCase();
alert("got here");
var jelar = document.getElementById("message")

for (var i = 1; i <= 10; i++)
{
if (name.length <= 0)
{
alert("I didn't get your answer can you try again");
alert(i)
break
}	  

else if (name.match(secretName)) 
{
alert("You got it")
jelar.innerHTML = "That is all for now";
break
}

else
{
alert("You gotta try again")

}
}
}



function init()
{
var myButton = document.getElementById("btnAnswer");
myButton.value = "So you clicked it"
getAnswer()
}

	  