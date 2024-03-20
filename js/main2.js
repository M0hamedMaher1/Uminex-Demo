window.addEventListener("scroll", function(){
    const nav = document.querySelector(".nav");
    let x = scrollY;
    if(x > 200){
        nav.style.transform = "translateY(0)";
    }else{
        nav.style.transform = "translateY(calc(-100% + -1px))";
    };
});

let bars = document.querySelector(".bars");
let close1 = document.querySelector(".close");
let aside = document.querySelector(".aside1");

bars.addEventListener("click", function(){
    aside.style.transform = "translateX(0)";
});

close1.addEventListener("click", function(){
    aside.style.transform = "translateX(calc(-100% + -3px))";
});