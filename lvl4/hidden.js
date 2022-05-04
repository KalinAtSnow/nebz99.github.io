window.addEventListener("load", ()=>{
    let pixel = this.document.getElementById("pixel");
    pixel.addEventListener("click", ()=>{
        pixel.innerText ="Wow you found me";
    });
});