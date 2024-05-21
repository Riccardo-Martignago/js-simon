function genRandomNum (max, min){
    return Math.floor(Math.random()* ((max + 1) - min)) + min;
}
const sectionEl = document.querySelector('section.grid');
const randomFive = [];
for(let i = 0; i < 5; i++){
    const numb = genRandomNum (1000, 1);
    randomFive.push(numb);
    const artEl = document.createElement('article');
    sectionEl.appendChild(artEl);
    artEl.append(numb);
}
const articleElement = document.querySelector('section.grid');
let time = 3;
const timer = setInterval(function(){
    console.log(time);
    if(time <= 0){
        clearInterval(timer);
        console.log('Finito il tempo!');
        articleElement.classList.add('d-none');
    }
    time = time - 1;
},1000);
console.log(randomFive);