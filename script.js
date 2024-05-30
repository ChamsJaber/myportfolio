
// for nav scroll
let nav = document.querySelector('nav');

window.addEventListener('scroll',()=>{

    nav.classList.toggle('nav-scroll', window.scrollY > 0);

});

// active toggle

let AllNavLinkA = document.querySelectorAll('.nav-links li a');

AllNavLinkA.forEach(item=>{

    item.addEventListener('click',()=>{

        removeActive()
        item.classList.add('acitive')
    })
});

const removeActive = ()=> AllNavLinkA.forEach(item=>{

    item.classList.remove('acitive') 
});

let menuBars = document.querySelector('nav button');

let navlinks = document.querySelector('.nav-links')

menuBars.addEventListener('click',()=>{

    navlinks.classList.toggle('nav-links-block');

});



const phrases = [
    "I'm Chamess Jaber",
    "I'm Full Stack Developer"
  ];
  
  const typingDelay = 100; // milliseconds
  const erasingDelay = 50; // milliseconds
  const pauseDelay = 500; // milliseconds;
  const cursorBlinkDelay = 500; // milliseconds;
  
  const staticTextElement = document.getElementById("static-text");
  const typedTextElement = document.getElementById("typed-text");
  const cursorElement = document.getElementById("cursor");
  
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function typeText() {
    const currentPhrase = phrases[phraseIndex];
  
    if (isDeleting) {
      typedTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
  
      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeText, pauseDelay);
      } else {
        setTimeout(typeText, erasingDelay);
      }
    } else {
      typedTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
  
      if (charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeText, pauseDelay);
      } else {
        setTimeout(typeText, typingDelay);
      }
    }
  }
  
  // Start the typing animation after a delay
  setTimeout(() => {
    staticTextElement.style.display = "inline-block"; // Display the static text
    typeText();
  }, 1500); // Adjust the delay as needed
  
  // Cursor blink animation
  setInterval(() => {
    cursorElement.style.display = cursorElement.style.display === "none" ? "inline-block" : "none";
  }, cursorBlinkDelay);
  



  const modeToggle = document.getElementById('mode');
  const moonIcon = document.querySelector('.fa-moon');
  const sunIcon = document.querySelector('.fa-sun');
  const body = document.body;
  
  modeToggle.addEventListener('change', () => {
    if (modeToggle.checked) {
      body.classList.add('dark-mode');
      moonIcon.style.display = 'none';
      sunIcon.style.display = 'inline-block';
    } 
    
    else {

      body.classList.remove('dark-mode');
      moonIcon.style.display = 'inline-block';
      sunIcon.style.display = 'none';
    }
  });
  
function toggle(){

  var vid = document.querySelector(".view")

  vid.classList.add("active");
}



  

