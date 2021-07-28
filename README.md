# copy-links
---------------------------------------------------------------------------------------------------------------------------------------------------------
*Functions*

Primero creamos dos constantes que seleccionan como valor los elementos con las clases btn y coupon.
const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

Creamos una constante que selecciona como valor a una arrow function 
const copyText = () => {
    e.preventDefault();

    console.log("Hello");
    coupon.select();
    coupon.setSelectionRange(0, 999999);
    document.execCommand("copy");

    btntextContent = "Copied!!";
    setTimeout(() => {
        btn.textContent = "Copied!!";
    }, 3000);
};

btn.addEventListener("click", copyText);
