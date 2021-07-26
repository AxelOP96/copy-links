const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");


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
