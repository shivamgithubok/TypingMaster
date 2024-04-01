let array=["The sun sets behind the mountains, casting a golden glow over the tranquil lake below, painting a picture of serenity."
,"Birds chirp melodiously in the lush green trees, their colorful feathers fluttering in the gentle breeze of a summer afternoon."
,"Children laugh and play in the park, their joyful voices mingling with the sound of rustling leaves and distant traffic.",
"Waves crash against the shore, sending sprays of salty water into the air, as seagulls soar gracefully overhead.",
"A lone wolf howls at the moon, its haunting cry echoing through the silent forest, under a star-studded sky.",
"The scent of fresh-baked bread wafts from the bakery, enticing passersby with promises of warmth and comfort.",
"Raindrops tap rhythmically on the windowpane, creating a soothing melody that lulls the mind into peaceful slumber.",
"Fireflies dance in the twilight, their tiny lights flickering like stars on earth, enchanting all who behold their beauty.",
"A rainbow arcs across the sky after a storm, a vivid spectrum of colors that symbolizes hope and renewal.",
"The city skyline glitters at night, a dazzling display of lights that illuminates the urban landscape like a modern marvel."
]
/*20words*/
window.onload = function() {
    var container = document.querySelector('.container');
    if (container) {
      var newDiv = document.createElement('div');
      newDiv.classList.add('smallDiv');
      newDiv.textContent = '';
      container.appendChild(newDiv);
    }
  };
  document.addEventListener("keypress", (event) => {
    const smallDiv = document.querySelector('.smallDiv');
    let currentWidth = parseFloat(smallDiv.style.width || 0);
    currentWidth += 11.5; 
    const key = event.key; 
    var num = Number(key);
    if (num === 9 || key === '0') {
    currentWidth = 2;
    smallDiv.style.width = `${currentWidth}px`;
    }
    else{
    smallDiv.style.width = `${currentWidth}px`;
    }  
});
const para = document.getElementById('word');
const arrayIndex = Math.floor(Math.random()*10);
para.innerHTML = array[arrayIndex];
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    const arrayIndex = Math.floor(Math.random() * array.length);
    para.innerHTML = array[arrayIndex];
});
document.addEventListener("keypress", ({ key }) => {
    if (key === '9' || key === '0') {
        para.textContent = array[Math.floor(Math.random() * array.length)];
    }
});
let correct = document.querySelector('.correct');
let wrong = document.querySelector('.wrong');
let string = array[arrayIndex];
let count = 0;
let correctLetter = 0;
let wrongLetter = 0;
document.addEventListener("keypress", (event) => {
    const key = event.key;
    const currentLetter = string[count];
    
    if (key === '9' || key === '0') {
        correct.textContent = correctLetter = 0;
        wrong.textContent = wrongLetter = 0;
        count = 0;
    } else if (key === currentLetter) {
        correct.textContent = ++correctLetter;
        count++;
    } else {
        wrong.textContent = ++wrongLetter;
        count++;
    }
});
btn.addEventListener("click", () => {
    correct.innerHTML = 'correct';
    wrong.innerHTML = 'wrong';
    correctLetter = 0;
    wrongLetter = 0;
    count = 0;
});