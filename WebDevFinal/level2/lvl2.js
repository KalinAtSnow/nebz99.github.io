window.addEventListener("load", function() {
    let submit = this.document.getElementById("submit");
    let response = this.document.getElementById("response");
    let password = this.document.getElementById("password");
    //let link = this.document.getElementById("link");

    submit.addEventListener("click", function(){
        if (password.value !== "incorrect"){
            response.innerText = "your password is incorrect";
        }
        else{
            //response.innerText = "/level3/AfterForm.html";
            let link = document.createElement("a");
            link.innerHTML = "<a href = '../level3/AfterForm.html'> congrats </a>";
            response.appendChild(link);
            //link.style = "visibility:visible";
        }
        if (password.value === "troll"){
            let troll = document.createElement("p");
            troll.innerText = "you got trolled";
            response.appendChild(troll);
        }
    })
    
});

function AddHint1(){

    this.document.getElementById("hint").innerText = "What does it say when you input the wrong answer?";
}
function AddHint2(){

}