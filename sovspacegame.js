
function board_update()
{
var parentelement =  document.getElementById('gameboard');
var parent_width  =  parentelement.offsetWidth;
var parent_height =  parentelement.offsetHeight;

mls_width = parent_width;

var height = 0;

/*
if (parent_width >= 400)
   mls_height = mls_width*0.6;

if (parent_width < 400 )
*/
   mls_height = mls_width*0.92;
    
document.getElementById('gameboard').style.height = mls_height + 'px';


// ... gameboardmain
var parentelement =  document.getElementById('gameboardmain');
var parent_width  =  parentelement.offsetWidth;
  mls_height = parent_width * 0.92;
document.getElementById('gameboardmain').style.height = mls_height + 'px';

//document.getElementById('mls_resp_back').style.width  = mls_width + 'px';
//document.getElementById('mls_resp_back').style.height = mls_height + 'px';


 
} // mps_update



window.addEventListener("resize", function()
{ 
 
board_update();
//mls_app_draw();
  
}, true);
