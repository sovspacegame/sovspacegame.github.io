var xmldoc = null;

function runscript()
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
        
        
      /*

setnftoption
assetid 
type disabled 
user 
value = ""
*/

  /*
        


eosforpower = Number(eosforpower).toFixed(4) + " EOS";



var memo = global_account+"";



//var quantityeos = globaldata['a_sov'] / 10000;
//quantitysov = Number(quantitysov).toFixed(4) + " SOV";

  */
 
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


/*
 const assetId = disableTowers[i].getElementsByTagName("assetid")[0].childNodes[0].nodeValue;
 
 
disableTowers[i].getElementsByTagName("assetid")[0].childNodes[0].nodeValue;
*/


 // document.getElementById("scriptactions").innerHTML = buffer;;












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

  

 /*

var jsonraw = xmlToJson(xmldoc);
   console.log(jsonraw);
   console.log("123: " );
 var json = json2array( jsonraw );
 
console.log("456: " );

    console.log(json);
var batchsize = json.batch.length;
console.log("batchsize: " + batchsize);
*/
//alert("script");

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
     
  //  disabletower = bundle[i].getElementsByTagName("disabletower")[0].childNodes[0].nodeValue; 


    buffer += i+" - " +  name + "<br>";
    console.log("X name: " + name);
    
    console.log("---");
    } // for i...


/*
 const assetId = disableTowers[i].getElementsByTagName("assetid")[0].childNodes[0].nodeValue;
 
 
disableTowers[i].getElementsByTagName("assetid")[0].childNodes[0].nodeValue;
*/


 document.getElementById("scriptactions").innerHTML = buffer;;





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
</script>

--- Attack


<script>
<bundle>
<name>Attack</name>

<cmd> <action>attack</action> <assetid>2199025559889</assetid> <target>2199025559942</target>  </cmd>
<cmd> <action>attack</action> <assetid>2199025559941</assetid> <target>2199025559942</target>  </cmd>
 
</bundle>
</script>
*/