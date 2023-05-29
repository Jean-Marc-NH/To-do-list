const x = window.innerHeight;
const body  = document.querySelector("body");
const cLista = document.querySelector(".list-group"); 
const addButton = document.querySelector("#button-addon2");
const input = document.querySelector(".form-control");

let delButton = document.querySelectorAll("delete")
let count = 0;
let size;

body.style.height = `${x}px`;


addButton.addEventListener("click", ()=>{

    if(input.value != ""){
        añadir();
    }else{
        alert("NO PUEDE INGRESAR DATOS VACIOS")
    }

});

input.addEventListener("keydown", (e)=>{


    let x = e.code;

    if( x == "Enter" && input.value != ""){
        añadir();
    }else if(x == "Enter"){
        alert("NO PUEDE INGRESAR DATOS VACIOS")
    }

});

const añadir = () =>{

    count += 1;

    cLista.innerHTML += `<li class="list-group-item elemento elemento-${count}">
        <input class="form-check-input me-1 elemento-2" type="checkbox"><label class="form-check-label" for="firstCheckbox">${input.value}</label>
        <button class="btn btn-danger delete">X</button>
    </li>`

    input.value = "";

    delButton = document.querySelectorAll(".delete")

    for (let i = 0; i < delButton.length; i++) {
        delButton[i].onclick = function() {
          var li = this.parentElement;
          li.style.display = "none";
        }
    }
}

