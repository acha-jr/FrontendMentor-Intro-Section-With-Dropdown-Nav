//If the maximum width of the screen is 845px
let x = window.matchMedia("(max-width: 845px)");

const menuButton = document.getElementById("bars");
const closeButton = document.getElementById("close");
const nav = document.querySelector("nav");
const transparent = document.querySelector(".transparent");

//Side nav open and close
//Open
menuButton.addEventListener("click", () => {
  if (x.matches) {
    nav.style.width = "63%";
    transparent.style.zIndex = "1";
    transparent.style.opacity = "0.6";
  }
});
//Close
closeButton.addEventListener("click", () => {
  if (x.matches) {
    nav.style.width = "0";
    transparent.style.zIndex = "-2";
    transparent.style.opacity = "0";
    close();
  }
});

//Closes the dropdown when side nav closes
function close() {
  if (x.matches) {
    dropdownOne.classList.remove("menu-open");
    dropdownTwo.classList.remove("menu-open-two");
    let down = one.classList.contains("arrow");
    if (!down) {
      one.classList.remove("arrow-rotate");
      one.classList.add("arrow");
    }
    if (!down) {
      two.classList.remove("arrow-rotate");
      two.classList.add("arrow");
    }
  }
}

const features = document.querySelector(".features");
const company = document.querySelector(".company");
const dropdownOne = document.querySelector(".dropdown-one");
const dropdownTwo = document.querySelector(".dropdown-two");
const one = document.querySelector(".one");
const two = document.querySelector(".two");

//Dropdown open and close one
features.addEventListener("click", () => {
  if (x.matches) {
    dropdownOne.classList.toggle("menu-open");

    //Arrow rotate one
    let down = one.classList.contains("arrow");
    if (down) {
      one.classList.remove("arrow");
      one.classList.add("arrow-rotate");
    } else if (!down) {
      one.classList.remove("arrow-rotate");
      one.classList.add("arrow");
    }
  }
});

//Dropdown open and close two
company.addEventListener("click", () => {
  if (x.matches) {
    dropdownTwo.classList.toggle("menu-open-two");

    //Arrow Rotate two
    let down = two.classList.contains("arrow");
    if (down) {
      two.classList.remove("arrow");
      two.classList.add("arrow-rotate");
    } else if (!down) {
      two.classList.remove("arrow-rotate");
      two.classList.add("arrow");
    }
  }
});
