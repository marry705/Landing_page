const left = document.querySelector(".left");
const right = document.querySelector(".right");
const split_cont = document.querySelector(".split_cont");

left.addEventListener("mouseenter", () => { //наведение
    split_cont.classList.add("hover-left");
});
left.addEventListener("mouseleave", () => { //смещение
    split_cont.classList.remove("hover-left");
});


right.addEventListener("mouseenter", () => {
    split_cont.classList.add("hover-right");
});
right.addEventListener("mouseleave", () => {
    split_cont.classList.remove("hover-right");
});
