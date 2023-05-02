/*

v1.1

*/

var xmldoc = null;

function runbundle( cmdname )
{


scriptfiletxt =  document.getElementById("scriptfile").value;
   
 var parser = new DOMParser();
 xmldoc = parser.parseFromString(scriptfiletxt, "text/xml");

 console.log("---DOC---");
 console.log(xmldoc);
 
 var bundle = xmldoc.getElementsByTagName("bundle");

 console.log("--- ---");
 
  
  var batchsize = bundle.length;
console.log("batchsize: " + batchsize);

   




  
  
var theactions = [];



  

 

var buffer = "";

for (var i=0; i<bundle.length; i++)    
    {
    name = bundle[i].getElementsByTagName("name")[0].childNodes[0].nodeValue; 
    
    if (name == cmdname)
    {

    cmd = bundle[i].getElementsByTagName("cmd");
    console.log(" cmd.length: " + cmd.length);
     
    for (var i2=0; i2 < cmd.length; i2++) 
        {
        action  = cmd[i2].getElementsByTagName("action")[0].childNodes[0].nodeValue; 
        assetid = cmd[i2].getElementsByTagName("assetid")[0].childNodes[0].nodeValue; 

        console.log(i2 + " -- action: " + action + " assetid: " + assetid);
        
        
 
    if (action == 'disabletower')
    {
    var action = {
                 account: "sovspacegame",
                 name: 'setnftoption',
                 authorization: [{
                                actor: global_account,
                                permission: "active"
                                }],
                 data: {
                       "assetid": assetid,
                       "type": "disabled",
                       "user": global_account,
                       "value": 1 


                       }
                 };




    theactions.push(action);
    } // if (action == 'disabletower')

    
    if (action == 'enabletower')
    {
    var action = {
                 account: "sovspacegame",
                 name: 'setnftoption',
                 authorization: [{
                                actor: global_account,
                                permission: "active"
                                }],
                 data: {
                       "assetid": assetid,
                       "type": "disabled",
                       "user": global_account,
                       "value": "" 


                       }
                 };




    theactions.push(action);
    } // if (action == 'enabletower')
      
        
        // move;sovtrader333;2199025559774;w
        
    if (action == 'move')
    {
    dir = cmd[i2].getElementsByTagName("dir")[0].childNodes[0].nodeValue; 
    sovamount = Number(3).toFixed(4) + " SOV";

    
    var memo = "move;"+global_account+";"+assetid+";"+dir;
    var action = {
                 account: "sovmintofeos",
                 name: 'transfer',
                 authorization: [{
                                actor: global_account,
                                permission: "active"
                                }],
                 data: {
                       "from": global_account,
                       "to": "sovspacegame",
                       "quantity": sovamount,
                       "memo": memo
                       }
                 };





    theactions.push(action);
    } // if (action == 'move')
    
  
    if (action == 'attack')
    {
    target = cmd[i2].getElementsByTagName("target")[0].childNodes[0].nodeValue; 
    sovamount = Number(3).toFixed(4) + " SOV";

    if (target == "x")
       {
       target = globalselection['assetid'];
       console.log("T: "+ target );       
       }
    
    var memo = "attack;"+global_account+";"+assetid+";"+target;
    var action = {
                 account: "sovmintofeos",
                 name: 'transfer',
                 authorization: [{
                                actor: global_account,
                                permission: "active"
                                }],
                 data: {
                       "from": global_account,
                       "to": "sovspacegame",
                       "quantity": sovamount,
                       "memo": memo
                       }
                 };

 

    theactions.push(action);
    } // if (action == 'attack')
    
    
        
        } // for i2..
     
  //  disabletower = bundle[i].getElementsByTagName("disabletower")[0].childNodes[0].nodeValue; 


    buffer += i+" - " +  name + "<br>";
    console.log("X name: " + name);
    
    console.log("---");
    
    
    
    } // if (name == cmdname)
        
    } // for i...

 

 











if (1)
   {
   transact( func_success, func_error, theactions );
   }


  
} // runbundle 






function runscript( cmdname )
{

scriptfiletxt =  document.getElementById("scriptfile").value;
   
 var parser = new DOMParser();
 xmldoc = parser.parseFromString(scriptfiletxt, "text/xml");

 console.log("---DOC---");
 console.log(xmldoc);
 
 var bundle = xmldoc.getElementsByTagName("bundle");

 console.log("--- ---");
 
  
  var batchsize = bundle.length;
console.log("batchsize: " + batchsize);

  
  
  
var theactions = [];



  

 

var buffer = "";

for (var i=0; i<bundle.length; i++)    
    {
    name = bundle[i].getElementsByTagName("name")[0].childNodes[0].nodeValue; 

    cmd = bundle[i].getElementsByTagName("cmd");
    console.log(" cmd.length: " + cmd.length);
     
    for (var i2=0; i2 < cmd.length; i2++) 
        {
        action  = cmd[i2].getElementsByTagName("action")[0].childNodes[0].nodeValue; 
        assetid = cmd[i2].getElementsByTagName("assetid")[0].childNodes[0].nodeValue; 

        console.log(i2 + " -- action: " + action + " assetid: " + assetid);
        
        
 
    if (action == 'disabletower')
    {
    var action = {
                 account: "sovspacegame",
                 name: 'setnftoption',
                 authorization: [{
                                actor: global_account,
                                permission: "active"
                                }],
                 data: {
                       "assetid": assetid,
                       "type": "disabled",
                       "user": global_account,
                       "value": 1 


                       }
                 };




    theactions.push(action);
    } // if (action == 'disabletower')

    
    if (action == 'enabletower')
    {
    var action = {
                 account: "sovspacegame",
                 name: 'setnftoption',
                 authorization: [{
                                actor: global_account,
                                permission: "active"
                                }],
                 data: {
                       "assetid": assetid,
                       "type": "disabled",
                       "user": global_account,
                       "value": "" 


                       }
                 };




    theactions.push(action);
    } // if (action == 'enabletower')
      
        
        // move;sovtrader333;2199025559774;w
        
    if (action == 'move')
    {
    dir = cmd[i2].getElementsByTagName("dir")[0].childNodes[0].nodeValue; 
    sovamount = Number(3).toFixed(4) + " SOV";

    
    var memo = "move;"+global_account+";"+assetid+";"+dir;
    var action = {
                 account: "sovmintofeos",
                 name: 'transfer',
                 authorization: [{
                                actor: global_account,
                                permission: "active"
                                }],
                 data: {
                       "from": global_account,
                       "to": "sovspacegame",
                       "quantity": sovamount,
                       "memo": memo
                       }
                 };





    theactions.push(action);
    } // if (action == 'move')
    
    
    // attack;sovtrader333;2199025559889;2199025559363
    //<cmd> <action>attack</action> <assetid>2199025559889</assetid> <target>2199025559363</target>  </cmd>
    
    if (action == 'attack')
    {
    target = cmd[i2].getElementsByTagName("target")[0].childNodes[0].nodeValue; 
    sovamount = Number(3).toFixed(4) + " SOV";

    
    var memo = "attack;"+global_account+";"+assetid+";"+target;
    var action = {
                 account: "sovmintofeos",
                 name: 'transfer',
                 authorization: [{
                                actor: global_account,
                                permission: "active"
                                }],
                 data: {
                       "from": global_account,
                       "to": "sovspacegame",
                       "quantity": sovamount,
                       "memo": memo
                       }
                 };

 

    theactions.push(action);
    } // if (action == 'attack')
    
    
        
        } // for i2..
     
  //  disabletower = bundle[i].getElementsByTagName("disabletower")[0].childNodes[0].nodeValue; 


    buffer += i+" - " +  name + "<br>";
    console.log("X name: " + name);
    
    console.log("---");
    } // for i...

 

 











if (1)
   {
   transact( func_success, func_error, theactions );
   }





} // runscript




var runsequncecnt = 0;
var sequence_array = [];

function runsequence( cmdname )
{

scriptfiletxt =  document.getElementById("scriptfile").value;
   
 var parser = new DOMParser();
 xmldoc = parser.parseFromString(scriptfiletxt, "text/xml");

 console.log("---DOC---");
 console.log(xmldoc);
 
 var sequence = xmldoc.getElementsByTagName("sequence");

 console.log("--- ---");
 
  
  var batchsize = sequence.length;
console.log("batchsize: " + batchsize);

   



 
 sequence_array = [];
 /*
// -- 




tmpobject = new Object();
tmpobject['action']  = "delay";
tmpobject['value'] = 5100;

sequence_array.push(tmpobject);



tmpobject = new Object();
tmpobject['action']  = "move";
tmpobject['assetid'] = 2199025576412;
tmpobject['dir']     = "e";

sequence_array.push(tmpobject);



tmpobject = new Object();
tmpobject['action']  = "delay";
tmpobject['value'] = 5100;

sequence_array.push(tmpobject);



sequence_thread();
*/

/*
<cmd> <action>move</action> <assetid>2199025576412</assetid> <dir>e</dir> </cmd>
<cmd> <action>delay</action> <value>6100</value></cmd>
<cmd> <action>move</action> <assetid>2199025576412</assetid> <dir>e</dir> </cmd> 
<cmd> <action>delay</action> <value>6100</value></cmd>
<cmd> <action>refresh</action> <value></value></cmd>
*/
// --- 
 
  
 

  

 

var buffer = "";

for (var i=0; i<sequence.length; i++)    
    {
    name = sequence[i].getElementsByTagName("name")[0].childNodes[0].nodeValue; 
    
    if (name == cmdname)
    {

    cmd = sequence[i].getElementsByTagName("cmd");
    console.log("sequence cmd.length: " + cmd.length);
     
    for (var i2=0; i2 < cmd.length; i2++) 
        {
        action  = cmd[i2].getElementsByTagName("action")[0].childNodes[0].nodeValue; 
       // assetid = cmd[i2].getElementsByTagName("assetid")[0].childNodes[0].nodeValue; 

        console.log(i2 + " -- action: " + action  );
        
         
        
        if (action == 'move')
           {
           dir     = cmd[i2].getElementsByTagName("dir")[0].childNodes[0].nodeValue; 
           assetid = cmd[i2].getElementsByTagName("assetid")[0].childNodes[0].nodeValue; 
                  
           var tmpobject = new Object();
           tmpobject['action']  = action;
           tmpobject['assetid'] = 2199025576412;
           tmpobject['dir']     = "e";

           sequence_array.push(tmpobject);          
           } // if (action == 'move')
    
    

        if (action == 'delay')
           {           
           value   = cmd[i2].getElementsByTagName("value")[0].childNodes[0].nodeValue; 
                  
           var tmpobject = new Object();
           tmpobject['action']  = action;
           tmpobject['value']   = value;
          

           sequence_array.push(tmpobject);          
           } // if (action == 'move')
                     
   		if (action == 'refresh')
           {                  
           var tmpobject = new Object();
           tmpobject['action']  = action;                    

           sequence_array.push(tmpobject);          
           } // if (action == 'move')
                         
   
        
        } // for i2..
     
  //  disabletower = bundle[i].getElementsByTagName("disabletower")[0].childNodes[0].nodeValue; 


   
    
    
    
    } // if (name == cmdname)
        
    } // for i...

 

 

console.log("sequence_array LIST:");
console.log(sequence_array);
 
runsequncecnt = 0;
sequence_thread();





/*
if (1)
   {
   transact( func_success, func_error, theactions );
   }
*/


} // runsequence





function sequence_thread()
{

if (document.getElementById("parsescriptdebug") )
   {
   document.getElementById("parsescriptdebug").innerHTML = "abc... " + runsequncecnt;
   }


console.log("SEQ: " + runsequncecnt);

if ( runsequncecnt < sequence_array.length )
   {
   var thedelay = 1000;
   
   if ( sequence_array[runsequncecnt]['action'] == "move" )
      {
      console.log("MOVE...");
      var assetid = sequence_array[runsequncecnt]['assetid'];
      var dir     = sequence_array[runsequncecnt]['dir'];
      sovamount = Number(3).toFixed(4) + " SOV";   
         
      var theactions = [];

      var memo = "move;"+global_account+";"+assetid+";"+dir;
       var action = {
                 account: "sovmintofeos",
                 name: 'transfer',
                 authorization: [{
                                actor: global_account,
                                permission: "active"
                                }],
                 data: {
                       "from": global_account,
                       "to": "sovspacegame",
                       "quantity": sovamount,
                       "memo": memo
                       }
                 };





      theactions.push(action);
     
      if (1)
         {
         transact( func_success, func_error, theactions );
         }
   
   
      } // move

   if ( sequence_array[runsequncecnt]['action'] == "delay" )
      {
      thedelay = sequence_array[runsequncecnt]['value'];
       is_sleep(thedelay)
      console.log("DELAY...");
      } // delay

   if ( sequence_array[runsequncecnt]['action'] == "refresh" )
      {
      refreshboard();
      console.log("REFRESH...");
      
     
      
      } // refresh
      
      
   
   var thetime = setTimeout("sequence_thread()", 1000);

   runsequncecnt++;
   
   if (runsequncecnt >= sequence_array.length) 
      {
      console.log("Sequence finished !!!!!!!!!!!!!!!!");
      } 
      
   } // if ( runsequncecnt < sequence_array.length )

} //// sequence_thread




 
 
 function is_sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
 

function parsescript()
{

scriptfiletxt =  document.getElementById("scriptfile").value;
   
 var parser = new DOMParser();
 xmldoc = parser.parseFromString(scriptfiletxt, "text/xml");

 console.log("---DOC---");
 console.log(xmldoc);
 
 var bundle = xmldoc.getElementsByTagName("bundle");
 var sequence = xmldoc.getElementsByTagName("sequence");

 console.log("--- ---");
 
  
var batchsize    = bundle.length;
var sequencesize = sequence.length;
console.log("batchsize: " + batchsize);
console.log("sequencesize: " + sequencesize);

  
 

var buffer = "";



//
// bundles
//
 
 
for (var i=0; i<bundle.length; i++)    
    {
    name = bundle[i].getElementsByTagName("name")[0].childNodes[0].nodeValue; 

    cmd = bundle[i].getElementsByTagName("cmd");
    console.log(" cmd.length: " + cmd.length);
     
    for (var i2=0; i2 < cmd.length; i2++) 
        {
        action  = cmd[i2].getElementsByTagName("action")[0].childNodes[0].nodeValue; 
        assetid = cmd[i2].getElementsByTagName("assetid")[0].childNodes[0].nodeValue; 

        console.log(i2 + " -- action: " + action + " assetid: " + assetid);
        
        
        
        } // for i2..
     




    buffer +=  "<div onclick=\"runbundle('"+name+"');\" style='float:left;margin:5px;padding:5px;background:#004400;border:1px solid #ffffff;cursor:pointer;'>" +  name + "</div>";
    console.log("X name: " + name);
    
    console.log("---");
    } // for i...


 //
 // sequences
 //
 
 var sequence = xmldoc.getElementsByTagName("sequence");

 console.log("--- ---");
 
  
 var batchsize = sequence.length;
 console.log("batchsize: " + batchsize);

  
 
 

for (var i=0; i<sequence.length; i++)    
    {
    name = sequence[i].getElementsByTagName("name")[0].childNodes[0].nodeValue; 

    cmd = bundle[i].getElementsByTagName("cmd");
    console.log(" cmd.length: " + cmd.length);
     
  
    buffer +=  "<div onclick=\"runsequence('"+name+"');\" style='float:left;margin:5px;padding:5px;background:#440000;border:1px solid #ffffff;cursor:pointer;'>" +  name + "</div>";
    console.log("X name: " + name);
    
    console.log("---");
    } // for i...

 
 
 

 document.getElementById("scriptactions").innerHTML = buffer;;


 


} // parsescript


/*
example scripts 

<script>
<bundle>
<name>All Towers off</name>

<cmd> <action>disabletower</action> <assetid>2199025558235</assetid> </cmd>
<cmd> <action>disabletower</action> <assetid>2199025558288</assetid> </cmd>
<cmd> <action>disabletower</action> <assetid>2199025558510</assetid> </cmd>

 
</bundle>
</script>

---


--- Enable all

<script>
<bundle>
<name>All Towers off</name>

<cmd> <action>enabletower</action> <assetid>2199025558235</assetid> </cmd>
<cmd> <action>enabletower</action> <assetid>2199025558288</assetid> </cmd>
<cmd> <action>enabletower</action> <assetid>2199025558510</assetid> </cmd>


</bundle>


<bundle>
<name>All Towers off</name>

<cmd> <action>move</action> <assetid>2199025563567</assetid> <dir>e</dir> </cmd>


</bundle>



<sequence>
<name>Tramseq 1</name>


 
<cmd> <action>move</action> <assetid>2199025563567</assetid> <dir>s</dir> </cmd>
<cmd> <action>delay</action> <value>5100</value></cmd>
<cmd> <action>move</action> <assetid>2199025563567</assetid> <dir>s</dir> </cmd> 
<cmd> <action>delay</action> <value>5100</value></cmd>

</sequence>

</script>


 
*/