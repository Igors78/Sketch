const container = document.querySelector('#container');
const button = document.querySelector('button');
let squares = [];
for (let i = 0; i < 256; i++) {
    squares[i] = document.createElement('div');
    squares[i].style.cssText = "border: 1px solid grey; height: auto; padding: 0; margin: 0";
    squares[i].addEventListener("mouseenter", changeColor);
    container.appendChild(squares[i]);
}
function randomColor(e){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = `rgb(${r}, ${g}, ${b})`;
    //console.log(color);
    e.target.style.backgroundColor = color;
}


function changeColor(e){
    if(document.getElementById("random").checked) {
        randomColor(e);
    }else{
        e.target.style.backgroundColor = 'black';
    }
}



button.addEventListener("click", setContainer);
function setContainer() {
        container.innerHTML = '';
        let grid = prompt('Set the squares quantity in the grid','16');
        let sqrGrid = grid * grid;
        
            for(let i = 0; i < sqrGrid; i++) {
                squares[i] = document.createElement('div');
                squares[i].style.cssText = "border: 1px solid grey; height: auto; padding: 0; margin: 0";
                squares[i].addEventListener("mouseenter", changeColor);
                container.appendChild(squares[i]);
            }
        let str = '';
            for (let i = 0; i < Number(grid); i++) {
            str += "auto ";
        
        container.style.cssText = `grid-template-columns: ${str};`;
        }
    }