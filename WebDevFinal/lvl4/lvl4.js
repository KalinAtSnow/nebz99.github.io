window.addEventListener("load", ()=>{
    if (window.innerWidth < 450){
        let idseven = document.getElementById("seven");
        idseven.outerHTML='<a id="seven" href="./supercoolhiddenplace.html"> coolbeans </a>'
    }
    
});
let apiLink = "https://icanhazdadjoke.com/slack";
async function GetApi(){
    const response = await fetch(apiLink);
    return data = response.json();
}
let joke = GetApi().then(data => insertjoke(data.attachments[0].text));

function insertjoke(joke){
    document.querySelector("#joke").innerText = joke;
}