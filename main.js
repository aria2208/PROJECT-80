guestnames=[]

function submit(){
  for(j=1;j<guestnames;j++)
  {
      var names= document.getElementById("guest_names" + j).value;
      guestnames.push(names);
  }
   document.getElementById("displaynames").innerHTML.guestnames;
}

/*function show(){
  document.getElementById("displaynames").innerHTML.guestnames;
}*/

function sorting(){
  guestnames.sort();
  document.getElementById("displaynames").innerHTML.guestnames;
}

function search(){
  var search=document.getElementById("find_names").value;
  var found=0;
  var f;
    for(f=0; f<guestnames.length; f++)
    {
      if(search==guestnames[f]){
        found= found+1;
      }
    }
 document.getElementById("names_found").innerHTML="Name Found"+ found + "Time/Times";
 console.log("Name Found"+ found + "Time/Times");
}
 
var d= document.getElementById("displaynames");
d.style.left= 164;
d.style.top= 25;
/*
var d = document.getElementById('yourDivId');
d.style.position = "absolute";
d.style.left = x_pos+'px';
d.style.top = y_pos+'px';
*/