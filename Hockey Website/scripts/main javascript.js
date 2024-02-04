
//Javascript for the basics website
function OnClickFunction() {
    document.location.href = "scripts/The basics-page 1.html";
} 


function grabInfo(id,exitID) {
        var popup = document.getElementById(id);
        var xsign = document.getElementsByClassName(exitID);
       
    
        popup.classList.toggle("show");
        xsign.classList.toggle("show");
      
        

    

}


function closeInfo(id,exitID) {

   
    var popup = document.getElementById(id);
    var xsign = document.getElementsByClassName(exitID);
   

    
    popup.classList.toggle("exitPopup");
    xsign.classList.toggle("exitPopup");

        
    
   

}

