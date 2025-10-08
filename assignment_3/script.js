
// box 1 
document.getElementById("box-1").onclick = changeColor1;

function changeColor1() {
    document.getElementById("box-1").style.background = "red";
     this.innerText = "Red Box";
     this.style.color= "white";
     this.style.border="none";
    return false;
}

// box 2 
  document.getElementById("box-2").onclick = changeColor2;

    function changeColor2() {
        document.getElementById("box-2").style.background = "blue";
        this.innerText =" Blue Box";
        this.style.color= "white";
           this.style.border="none";
        return false;
    }

// box 3

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('box-3').addEventListener('click', changeColor3);
});

function changeColor3() {
    this.style.backgroundColor = "green";
       this.innerText ="Green Box";
       this.style.color= "white";
          this.style.border="none";
    return false;
}


// box 4 


document.getElementById('box-4').addEventListener('click', changeColor4);

function changeColor4() {
    this.style.backgroundColor = "yellow";
       this.innerText ="Yellow Box";
       this.style.color= "red";
       this.style.border="none";
    return false;
}




// input section

 const navbar = document.getElementById('navbar');
        const username_input = document.getElementById('username_input');

        username_input.addEventListener("input", function(e) {
            navbar.innerText = "Hello , "+ e.target.value;
        });