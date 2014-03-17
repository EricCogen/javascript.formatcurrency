//Author: Eric I Cogen
//https://plus.google.com/u/0/+EricCogen
//https://twitter.com/ericcogen
function FormatCurrency(id)
{

	var Sep = ","; //change to your countries thousands seperator;
  	var Obj = document.getElementById(id); //optionally pass an obj in as the parameter, instead of an objects ID;
    var valArray = Obj.value.split(".");
    var Integer = 0;
    var Fractional = 0;
    
    if(valArray.length == 2)
    {
        Integer = valArray[0];
        Fractional = valArray[1];
    }
    else
    {
        Integer = valArray[0];
        Fractional = "00";
    }

	Integer = Integer.replace(/[^0-9]/ig, "");
	var _Integer = "";
	var c;
  
 	for(I = 0; I <= Integer.length; I++)
	{	
        c = Integer.charAt(Integer.length - I);
		if((I % 3) == 0)
		{
			if(I == 0)
			{
				_Integer += c;
			}
			else
			{
				_Integer += c + Sep;
			}
		}
		else
		{
			_Integer += c;
		}
    }
	
	Integer = _Integer.split("").reverse().join("");
	
	if(Integer.charAt(0) == Sep)
	{
		Integer = Integer.substr(1, Integer.length);
	}
    
    Obj.value = Integer + "." + Fractional;
}
