//  for Button Click

let a = document.body.getElementsByTagName("input")[0];

// addEventListner In Button

a.addEventListener("click", (e) => {

  document.getElementsByClassName("it")[0].classList.toggle("dark-it");
  document.getElementsByClassName("it")[1].classList.toggle("dark-it");
  document.getElementsByClassName("it")[2].classList.toggle("dark-it");
  document.getElementsByClassName("it")[3].classList.toggle("dark-it");

  document.getElementsByClassName("io")[0].classList.toggle("dark-io");
  document.getElementsByClassName("io")[1].classList.toggle("dark-io");
  document.getElementsByClassName("io")[2].classList.toggle("dark-io");
  document.getElementsByClassName("io")[3].classList.toggle("dark-io");
  document.getElementsByClassName("io")[4].classList.toggle("dark-io");
  document.getElementsByClassName("io")[5].classList.toggle("dark-io");
  document.getElementsByClassName("io")[6].classList.toggle("dark-io");
  document.getElementsByClassName("io")[7].classList.toggle("dark-io");

  document.body.classList.toggle("dark-body");

  //    color White

  let w = document.getElementsByTagName("h2");

  w[0].classList.toggle("dark-h2");
  w[1].classList.toggle("dark-h2");
  w[2].classList.toggle("dark-h2");
  w[3].classList.toggle("dark-h2");

  //     bottom cards

  let q = document.getElementsByTagName("h3");

  q[0].classList.toggle("dark-h3");
  q[1].classList.toggle("dark-h3");
  q[2].classList.toggle("dark-h3");
  q[3].classList.toggle("dark-h3");
  q[4].classList.toggle("dark-h3");
  q[5].classList.toggle("dark-h3");
  q[6].classList.toggle("dark-h3");
  q[7].classList.toggle("dark-h3");
  q[8].classList.toggle("dark-h3");

  //  For Heading

  document.getElementsByTagName("h1")[0].classList.toggle("dark-h1");

  document.getElementsByTagName("h5")[0].classList.toggle("dark-h5");
});
