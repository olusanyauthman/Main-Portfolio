const words = [
  "UI/UX Designer",
  "Web Developer",
  "Graphic Designer",
  "Software Engineer"
];

let wordindex = 0;
let charindex = 0;
let isDeleting = false;

const typingElement = document.getElementById('typing');

function type(){
  const currentWord = words[wordindex];

  if (isDeleting){
    typingElement.textContent = 
    currentWord.substring(0, charindex--);
  }else{
    typingElement.textContent = 
    currentWord.substring(0, charindex++);
  }

  let speed = isDeleting ? 100 : 150;

  if(!isDeleting && charindex === currentWord.length + 1){
    speed = 2000;//wait before deleting
    isDeleting = true;
  }

  if(isDeleting && charindex === -1){
    isDeleting = false;
    wordindex = (wordindex + 1) % words.length;
    speed = 500;
  }

  setTimeout(type,speed);
}

type();

let open = document.getElementById('open');
let close = document.getElementById('close');
let nav2 = document.getElementById('nav2')

open.addEventListener("click", function(e){
  nav2.style.transform = "translateX(0)"
});

close.addEventListener("click", function(e){
  nav2.style.transform = "translateX(250px)"
});

function animateSkill(target, percentId, barId) {
  const percent = document.getElementById(percentId);
  const bar = document.getElementById(barId);

  let count = 0;

  const interval = setInterval(() => {
    count++;

    percent.textContent = count + "%";
    bar.style.width = count + "%";

    if (count >= target) {
      clearInterval(interval);
    }
  }, 30);
}

// Skills
animateSkill(90, "html-percent", "html-bar");
animateSkill(85, "css-percent", "css-bar");
animateSkill(52, "js-percent", "js-bar");
animateSkill(75, "ps-percent", "ps-bar");
// animateSkill(70, "react-percent", "react-bar");
// animateSkill(95, "python-percent", "python-bar");
// animateSkill(88, "figma-percent", "figma-bar");
// animateSkill(78, "pr-percent", "pr-bar");
// animateSkill(92, "ai-percent", "ai-bar");
// animateSkill(85, "figma-percent", "figma-bar");

