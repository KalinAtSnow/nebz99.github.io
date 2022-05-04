window.addEventListener("load", function(){
        let hint = this.document.getElementById("hint");
        let copout = this.document.getElementById("nofun");
    setTimeout(function(){
        hint.style = "visibility: visible";
        AddHint1(hint);
    }, 50000); 
    // setInterval(function(){
    //     copout.style = "visibility: visible";
    // }, 600000); //giveaway hint shows
});
