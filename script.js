/*==================toggle icon navbar=============*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});




let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach(link => {
        link.classList.remove('active');
      });
      document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
    }
  });

  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);


  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');



};

/*===========typed.js==============*/




ScrollReveal({
  reset:true,
  distance:'80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-container, .contct form',{origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-contact',{origin: 'right'});


/*===========sending mail==============*/
function SendMail() {
  var params = {
    from_name: document.getElementById("fullname").value,
    Email_Address: document.getElementById("Email_Address").value,
    Mobile_no: document.getElementById("Mobile_no").value,
    Email_subject: document.getElementById("email_sub").value,
    message: document.getElementById("message").value
  }

  emailjs.send("service_xrfzgop", "template_tj7qzyg", params).then(function(res) {
    alert("Your message is successfully sent ✅ " );
  });
}
