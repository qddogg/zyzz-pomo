const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);


container.style.gridTemplateColumns = "repeat(4, 30px)";
container.style.gridTemplateRows = "repeat(4, 30px)";

const gridArray = [];

for (let i = 0; i < 16; i++){
  gridArray[i] = document.createElement('div');
  gridArray[i].classList.add('box');
  container.appendChild(gridArray[i]);
  let ele = document.getElementsByClassName('box')[i];
  ele.addEventListener('click', function(){
    ele.classList.toggle('green');
  });
}


