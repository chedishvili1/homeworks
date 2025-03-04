function js_style() 
{
    text.style.fontSize = "14pt";
    text.style.fontFamily = "Comic Sans MS";
    text.style.color = "green";
}

2.
function getFormvalue()
{
  var x=document.getElementById("form1");
  for (var i=0;i<x.length;i++)
  {
    if (x.elements[i].value!='Submit')
    {  
      console.log(x.elements[i].value);
    }  
  }
}

4.
function getAttributes()
{
    var u = document.getElementById("w3r").href;
    alert('The value of the href attribute of the link is : '+u);
    var v = document.getElementById("w3r").hreflang;   
    alert('The value of the hreflang attribute of the link is : '+v);
    var w = document.getElementById("w3r").rel; 
    alert('The value of the rel attribute of the link is : '+w);
    var x = document.getElementById("w3r").target; 
    alert('The value of the target attribute of the link is : '+x);
    var y = document.getElementById("w3r").type; 
    alert('The value of the type attribute of the link is : '+y);  
}
