const sketch = document.querySelector('body>h1');
const container = document.querySelector('#container');
const setButton = document.querySelector('#reset');
const clearButton = document.querySelector('#clear');
let squares = [];
sketch.style.cssText = "font-family: Chilanka; font-size: 30px; font-weight: bold; margin-top: 5px; letter-spacing: 5px";
let action = 1;


for (let i = 0; i < 256; i++) {
    squares[i] = document.createElement('div');
    squares[i].style.cssText = "border: 1px solid #E0FFFF; height: auto; padding: 0; margin: 0";
    squares[i].addEventListener('click', startPaint, false);
    container.appendChild(squares[i]);
}
function startPaint(e) {
    if (action == 1){
        squares.forEach(setList);
        action++;
        }else{
        squares.forEach(removeList);
        action = 1;
    }
}

function setList(e){
    e.addEventListener('mousemove', changeColor);
    container.style.cursor = "crosshair";
}
function removeList(e){
    e.removeEventListener('mousemove', changeColor);
    container.style.cursor = "auto";
}

function randomColor(e){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = `rgb(${r}, ${g}, ${b})`;
    
    e.target.style.backgroundColor = color;
}


function changeColor(e){
    if (document.getElementById("random").checked) {
            randomColor(e);

        } else if (document.getElementById("erase").checked){
            e.target.style.backgroundColor = 'white';
            
        }else{
            e.target.style.backgroundColor = 'black'; 
            
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
                squares[i].style.cssText = "border: 1px solid #E0FFFF; height: auto; padding: 0; margin: 0";
                squares[i].addEventListener("click", startPaint, false);
                container.appendChild(squares[i]);
                setButton.style.cssText = "border: none;";
            }
//let str = '';
//    for (let i = 0; i < Number(grid); i++) {
//        str += "auto ";
        container.style.cssText = `grid-template-columns: repeat(${grid}, auto);`;
        }
//    };
    function reloadPage(e) {
        window.location.reload()
    };
    function openForm() {
        document.getElementById("myForm").style.display = "block";
    }
    
    function closeForm() {
        document.getElementById("myForm").style.display = "none";
    }