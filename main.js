const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");

let animation1 = null, animation2 = null;

card1.addEventListener("click", () => {
  if (animation1 === null) {
    card1.style.animation = "left 160s linear infinite"; 
    animation1 = "left";
  } else if (animation1 === "left") {
    card1.style.animation = "right 160s linear infinite"; 
    animation1 = "right";
  } else if (animation1 === "right") {
    card1.style.animation = "left 160s linear infinite"; 
    animation1 = "left";
  }
})

card2.addEventListener("click", () => {
  if (animation2 === null) {
    card2.style.animation = "left 120s linear infinite"; 
    animation2 = "left";
  } else if (animation2 === "left") {
    card2.style.animation = "right 120s linear infinite"; 
    animation2 = "right";
  } else if (animation2 === "right") {
    card2.style.animation = "left 120s linear infinite"; 
    animation2 = "left";
  }
})