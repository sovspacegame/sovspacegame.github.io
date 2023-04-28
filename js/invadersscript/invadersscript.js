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



 

function parsescript()
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
        
        
        
        } // for i2..
     




    buffer +=  "<div onclick=\"runbundle('"+name+"');\" style='float:left;margin:5px;padding:5px;background:#004400;border:1px solid #ffffff;cursor:pointer;'>" +  name + "</div>";
    console.log("X name: " + name);
    
    console.log("---");
    } // for i...

 

 document.getElementById("scriptactions").innerHTML = buffer;;



return;

var theactions = [];



eosforpower = Number(eosforpower).toFixed(4) + " EOS";



var memo = global_account+"";



//var quantityeos = globaldata['a_sov'] / 10000;
//quantitysov = Number(quantitysov).toFixed(4) + " SOV";




    var action = {
                 account: "eosio.token",
                 name: 'transfer',
                 authorization: [{
                                actor: global_account,
                                permission: "active"
                                }],
                 data: {
                       "from": global_account,
                       "to": "powerupcalc1",
                       "quantity": eosforpower,
                       "memo": memo,


                       }
                 };




    theactions.push(action);





if (1)
   {
   transact( func_success, func_error, theactions );
   }





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
</script>


 
*/