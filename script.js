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