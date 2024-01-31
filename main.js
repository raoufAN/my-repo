// toggle menu
let menu = document.querySelector(".header .menu");
let UlList = document.querySelector(".header ul");
let header = document.querySelector(".header");

menu.addEventListener("click", () => {
  UlList.classList.toggle("active");
  header.classList.toggle("active");
});

// home page change img
let Mysrc = [
  "img/home/h1.png",
  "img/home/h2.png",
  "img/home/h3.png",
  "img/home/h4.png",
];
let myImage = document.querySelector(".home .img-box img");
let currentImg = 0;

let timeImg = setInterval(() => {
  myImage.src = Mysrc[currentImg];
  currentImg++;
  if (currentImg > 3) {
    currentImg = 0;
  }
}, 5000);

// on load

let myHomeLoad = document.querySelectorAll(".home .container .load");

window.onload = () => {
  myHomeLoad.forEach((ele) => {
    setTimeout(() => {
      ele.classList.add("show");
    });
  });
};

//  skills section
let btn = document.querySelectorAll(".skills .box a");
let boxContent = document.querySelectorAll(".skills .box");
let paragarph = document.querySelectorAll(".skills .box p");
let icon = document.querySelectorAll(".skills .box a i");

for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = () => {
    if (paragarph[i].clientHeight === 0) {
      paragarph[i].style.height = "fit-content";
      icon[i].classList.remove("fa-angle-down");
      icon[i].classList.add("fa-angle-up");
      boxContent[i].classList.add("row");
    } else {
      paragarph[i].style.height = 0;
      icon[i].classList.remove("fa-angle-up");
      icon[i].classList.add("fa-angle-down");
      boxContent[i].classList.remove("row");
    }

    for (let j = 0; j < boxContent.length; j++) {
      if (j !== i) {
        paragarph[j].style.height = 0;
        boxContent[j].classList.remove("row");
        icon[j].classList.remove("fa-angle-up");
        icon[j].classList.add("fa-angle-down");
      }
    }
  };
}

///// start animation when we scroll
// boxcContent we selected  before

let activeLink = Array.from(document.querySelectorAll(".header li a"));

let myAbout = document.querySelector(".about");
let abouChild = document.querySelectorAll(".about .show");

let skil = document.querySelector(".skills");
let box = document.querySelectorAll(".skills .box");

let contact = document.querySelector(".contact");
let boxContact = document.querySelectorAll(".contact .container .slid");
let titleContact = document.querySelector(".contact .main-title");

let allSection = document.querySelectorAll(".section");

window.onscroll = () => {
  // about
  let top = window.scrollY; // irtifa3 t3 page kaml
  let offset = myAbout.offsetTop - 150; // from div to top
  let height = myAbout.offsetHeight; // hight of div
  abouChild.forEach((child) => {
    if (top >= offset && top < offset + height) {
      child.classList.add("show-animate");
    } else {
      child.classList.remove("show-animate");
    }
  });
};

window.addEventListener("scroll", () => {
  // skills

  for (let i = 0; i < box.length; i++) {
    if (
      window.scrollY + window.innerHeight >=
      box[i].offsetTop + skil.offsetTop + 20
    ) {
      box[i].classList.add("show-animate");
    } else {
      box[i].classList.remove("show-animate");
    }
  }
});

window.addEventListener("scroll", () => {
  // if for main-Title
  if (
    window.scrollY + window.innerHeight >=
    contact.offsetTop + titleContact.offsetTop + 120
  ) {
    titleContact.classList.add("show-animate");
  } else {
    titleContact.classList.remove("show-animate");
  }
  // for contact
  for (let i = 0; i < boxContact.length; i++) {
    if (
      window.scrollY + window.innerHeight >=
      contact.offsetTop +
        boxContact[i].offsetTop +
        boxContact[i].offsetHeight -
        40
    ) {
      boxContact[i].classList.add("show-animate");
    } else {
      boxContact[i].classList.remove("show-animate");
    }
  }
});

window.addEventListener("scroll", () => {
  // adding active class to li link when we scroll

  for (let i = 0; i < allSection.length; i++) {
    if (window.scrollY === 300) {
      removeAllActiveLink();
      activeLink[0].classList.add("active");
    }
    if (window.scrollY + 80 >= allSection[i].offsetTop) {
      removeAllActiveLink();
      activeLink[i].classList.add("active");
    }
  }
});

// adding active class when click event
activeLink.forEach((link) => {
  link.onclick = () => {
    if (
      UlList.classList.contains("active") &&
      header.classList.contains("active")
    ) {
      UlList.classList.remove("active");
      header.classList.remove("active");
    }
    removeAllActiveLink();
    link.classList.add("active");
  };
});

// remove all active class

function removeAllActiveLink() {
  activeLink.forEach((link) => {
    link.classList.remove("active");
  });
}
