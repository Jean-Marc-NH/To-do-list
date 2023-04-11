const x = window.innerHeight;
const body  = document.querySelector("body");
const cLista = document.querySelector(".list-group"); 
const addButton = document.querySelector("#button-addon2");
const input = document.querySelector(".form-control");

body.style.height = `${x}px`;


addButton.addEventListener("click", ()=>{

    if(input.value != ""){
        anadir();
    }else{
        alert("NO PUEDE INGRESAR DATOS VACIOS")
    }

});

input.addEventListener("keydown", (e)=>{


    let x = e.code;

    if( x == "Enter" && input.value != ""){
        anadir();
    }else if(x == "Enter"){
        alert("NO PUEDE INGRESAR DATOS VACIOS")
    }

});

const anadir = () =>{

    console.log(input.value);
    cLista.innerHTML += `<li class="list-group-item"><input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"><label class="form-check-label" for="firstCheckbox">${input.value}</label></li>`

    input.value = "";

}
