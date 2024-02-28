const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("open");
};



let arrowIcon = document.getElementsByClassName("arrow-icon");
const slide = document.getElementById("slide");

arrowIcon[0].onclick = () => {
  slide.style.transform = "translateX(0)";
};
arrowIcon[1].onclick = () => {
  slide.style.transform = "translateX(-800px)";
};
arrowIcon[2].onclick = () => {
  slide.style.transform = "translateX(-1600px)";
};
arrowIcon[3].onclick = () => {
  slide.style.transform = "translateX(-2400px)";
};



function myFunction(x) {
  let arrowIcon = document.getElementsByClassName("arrow-icon");
  const slide = document.getElementById("slide");
  if (x.matches) {
    
    arrowIcon[0].onclick = () => {
        slide.style.transform = "translateX(0)";
      };
      arrowIcon[1].onclick = () => {
        slide.style.transform = "translateX(-380px)";
      };
      arrowIcon[2].onclick = () => {
        slide.style.transform = "translateX(-760px)";
      };
      arrowIcon[3].onclick = () => {
        slide.style.transform = "translateX(-1000px)";
      };
  } 
}

var x = window.matchMedia("(max-width: 576px)");
myFunction(x); 
x.addListener(myFunction); 


const animation = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true
})
animation.reveal('.banner-content, .products, .about, .categories, .review, footer', {delay: 200, origin: 'top'});
animation.reveal('.banner-img, .review-container', {delay: 200, origin: 'right'});
animation.reveal('.best-selling-content', {delay: 200, origin: 'left'});


document.addEventListener("DOMContentLoaded",function(){
  const loginForm = document.getElementById("login_form");

  loginForm.addEventListener("submit", function(event) {
      event.preventDefault();

      const xhr = new XMLHttpRequest();
      xhr.open("GET", "data.json", true);

      xhr.onload = function(){
          if (xhr.status === 200) {
              const responseData = JSON.parse(xhr.responseText)
              const username = document.getElementById("username").value;
              const password = document.getElementById("password").value;

              const users = responseData.users;

              const foundUser = users.find(user => user.username === username && user.password === password);

              if (foundUser !== undefined){
                  alert("Login realizado com sucesso!");
                  window.location.href = "Loja.html";
              }
              else{
                  alert("Credencias invalidas, por favor tente novamente!");
              }
          }
      }
      xhr.send()
  })
})


