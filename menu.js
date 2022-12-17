var menubar = document.getElementById("menubar");
menubar.style.maxHeight = "0px";

function menutoggle(){
    if(menubar.style.maxHeight = "0px")
    {
        menubar.style.maxHeight = "200px";
    }
    else{
        menubar.style.maxHeight = "0px";
    }
}