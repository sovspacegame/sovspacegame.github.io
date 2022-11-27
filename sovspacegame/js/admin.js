

function admin_createarea()
{
console.log("Create AREA");

x =  document.getElementById("newarea_x").value*1; 
y =  document.getElementById("newarea_y").value*1; 
w =  document.getElementById("newarea_w").value*1; 
h =  document.getElementById("newarea_h").value*1; 

// alert("x__: " + x+" "+y+" "+w+" "+h+" ");

var theactions = [];


for (var x2=x; x2< (x+w); x2++)
for (var y2=y; y2< (y+h); y2++)
    {
    tile = admin_getRandomInt(4)+1;
    console.log("X2: " + x2 + " y2: " + y2 + " R:"+tile); 
    
    
param = "initarea;"+x2+";"+y2+";"+tile;
 
    
   
    var action = {
                 account: "sovspacegame",
                 name: 'admin',
                 authorization: [{
                                actor: global_account,
                                permission: "active"
                                }],
                 data: {
                       "param": param 
                      
                       }
                 };

 
    theactions.push(action);
    
    } // for x2,y2...


console.log(theactions);





   

 
 
 
if (1)
   {
   transact( func_success, func_error, theactions );
   }
   
   
   

} // create area


function admin_getRandomInt(max) {
  return Math.floor(Math.random() * max);
}