const sketch = document.querySelector('body>h1');
const container = document.querySelector('#container');
const setButton = document.querySelector('#reset');
const clearButton = document.querySelector('#clear');
let squares = [];
sketch.style.cssText = "font-size: 30px; font-weight: bold; margin-top: 5px; letter-spacing: 5px";
container.addEventListener('mousemove', changeColor, false);
for (let i = 0; i < 256; i++) {
    squares[i] = document.createElement('div');
    squares[i].style.cssText = "border: 1px solid grey; height: auto; padding: 0; margin: 0";
//    squares[i].addEventListener('mousedown', changeColor, false);
//    squares[i].addEventListener('mouseover', changeColor, false);
    container.appendChild(squares[i]);
}
function randomColor(e){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = `rgb(${r}, ${g}, ${b})`;
    
    e.target.style.backgroundColor = color;
}


function changeColor(e){
    if (e.target !== e.currentTarget) {
        clickedItem = e.target.id;
    
    if (document.getElementById("random").checked) {
        randomColor(e);
    } else if (document.getElementById("erase").checked){
        e.target.style.backgroundColor = 'white';
    }else{
        e.target.style.backgroundColor = 'black'; 
    }
    e.stopPropagation();
}
}

clearButton.addEventListener("click", reloadPage);
setButton.addEventListener("click", setContainer);
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
    };
    function reloadPage(e) {
        window.location.reload()
    };