const balloon = document.querySelector(".header__air-balloon");
const cloudOne = document.querySelector(".header__cloud-one");
const cloudTwo = document.querySelector(".header__cloud-two");
const cloudThree = document.querySelector(".header__cloud-three");
const cloudFour = document.querySelector(".header__cloud-four");
const cloudFive = document.querySelector(".header__cloud-five");
const react = document.querySelector(".header__react-icon");
const graphql = document.querySelector(".header__gql-icon");
const js = document.querySelector(".header__js-icon");

function move() {
  const incrementer = window.scrollY;

  balloon.style.bottom = 10 + incrementer * 0.1 + "%";
  react.style.left = 26 + incrementer * -1.5 + "%";
  graphql.style.left = 32 + incrementer * -1 + "%";
  js.style.left = 20 + incrementer * -2.2 + "%";

  cloudOne.style.bottom = 40 + incrementer * 0.12 + "%";
  cloudOne.style.left = 75 + incrementer * 0.1 + "%";

  cloudTwo.style.bottom = 80 + incrementer * 0.14 + "%";
  cloudTwo.style.left = 70 + incrementer * 0.15 + "%";

  cloudThree.style.bottom = 60 + incrementer * 0.1 + "%";
  cloudThree.style.left = 0 + incrementer * -0.12 + "%";

  cloudFour.style.bottom = 70 + incrementer * 0.16 + "%";
  cloudFour.style.left = 20 + incrementer * -0.15 + "%";

  cloudFive.style.bottom = 60 + incrementer * 0.2 + "%";
  cloudFive.style.left = 60 + incrementer * 0.16 + "%";
}

window.addEventListener("scroll", move);
