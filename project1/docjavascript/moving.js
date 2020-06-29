// JavaScript Document
document.getElementById("demo").innerHTML="I am using javascript";

var j = document.getElementById("demo").style;
	
	j.fontsize="100px";
	
	j.color="red";
		
	j.backgroundcolor="yellow";	

var pic;	
	function bulb(sw)
		{
			if(sw==0)
  			 pic="bulb-off.jpg";
			else
			 pic="bulb-on.jpg";
		 document.getElementById('MyImage').src=pic;	
		}

function myfunction()
  {
	alert("You clicked the powersource"); 
  }
 	
  function hifunction(){
	  var x = document.getElementsByClassName("city");
	  for ( var i=0;i<x.length;i++)
		  x[i].style.display = "none";
  }	 

var weight, height;

function bmi(weight, height)
{
	var b;
	var mh=height*height;
	b=weight/mh;
	return b;
}