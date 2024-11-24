let a = document.querySelector("#cbox1")
a.addEventListener("click",()=>{
    window.location.href ='paid_sensi.html'
});
let b = document.querySelector("#cbox2")
b.addEventListener("click",()=>{
    window.location.href ='paid_optimization.html'
});

let color = document.querySelector(".color-button")
let isDark = false;
color.addEventListener("click",()=>{
    if (!isDark) {
        document.body.style.backgroundColor = "black";
        document.querySelectorAll('.cta span').forEach(span => {
            span.style.color = "white";
        });
        color.textContent = "Light Mode";
        isDark = true;
    } else {
        document.body.style.backgroundColor = "white";
        document.querySelectorAll('.cta span').forEach(span => {
            span.style.color = "black"; 
        });
        color.textContent = "Dark Mode";
        isDark = false;
    }
})
