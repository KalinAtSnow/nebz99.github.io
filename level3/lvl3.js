//event listener on image if clicked (or with certain options selected as well will do something special)
window.addEventListener("load", function () {
    let img = this.document.querySelector("img");
    let hintplace = this.document.getElementById("title");
    let joke;

    

    img.addEventListener("click", function () {


        const radioButtons = document.querySelectorAll('input[name="measure"]');
        let selection;
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                selection = radioButton.value;
                break;
            }
        }

        if (selection === "random") {
            img.outerHTML = '<p>gonna have to refresh now to continue</p><img id="image" style = "max-width:35%" src="building.jpg" alt="delicious looking salad" />';
            //image taken from pixabay, same as the salad, no credit is needed
        }
        else {
            img.outerHTML = '<a id="image" href="../level4/afterEventListener.html">you found me!</a>';
        }
    });
});

function AddHint1(){
    this.document.getElementById("hint").innerText = "have you looked at the title?";
}
function AddHint2() {

}