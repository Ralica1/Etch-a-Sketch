// 1. Create the squares
function createSquares(n) {

    document.getElementById("input").value = n;

    let container = document.querySelector('.container');
    let counter = 0;
    let height = window.innerHeight / (window.innerWidth / n);

    for (let i = 0; i < height; i++) {

        let innerContainer = document.createElement('div');
        innerContainer.classList.add('inner-container');

        for (let i = 0; i < n; i++) {
            let square = document.createElement('div');
            square.classList.add('square');

            // Set Attribute
            let attr = document.createAttribute("data-counter");
            attr.value = counter;
            square.setAttributeNode(attr);
            square.style.cssText += `height:${window.innerWidth / n}px; width: ${window.innerWidth / n}px`;

            innerContainer.appendChild(square);
            counter++;
            
        }

        container.appendChild(innerContainer);
    }

}
// 2. Paint and Errase

function paint(target) {
    document.querySelector(`[data-counter="${target}"]`).classList.add('selected');
}

function shade(target) {
    document.querySelector(`[data-counter="${target}"]`).classList.add(...['selected', 'shaded']);
}

function errase(target) {
    document.querySelector(`[data-counter="${target}"]`).classList.remove(...['selected', 'shaded']);
}


// 3. Clear the paint in one go

function clear() {

    let button = document.querySelector('.clear');
    button.addEventListener('click', function() {
        let paintedElements = document.querySelectorAll('.selected');
        for (let i = 0; i < paintedElements.length; i++) {
            paintedElements[i].classList.remove(...['selected', 'shaded']);
        }
    });

}

// 4. Se-draw the grid

function deleteGrid() {
    let container = document.querySelector(".container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function refreshGrid(e) {

    e.addEventListener('click', function() {

        let input = document.getElementById("input").value;

        if (input === "") {
            return;
        }

        input = Number(input);
    
        if (input <= 10) {
            deleteGrid();
            createSquares(10);
        } else if (input > 10 && input <= 200) {
            deleteGrid();
            createSquares(input);
        } else if (input > 200) {
            deleteGrid();
            createSquares(200);
        }
        
    });

}

refreshGrid(document.querySelector(".changeGrid"));


// 5. Event Listeners

function etch(e) {

    if (e.target.attributes["1"]) {
        let target = e.target.attributes["1"].value;

        if (e.ctrlKey) {

        } else if (e.altKey) {
            errase(target);
        } else if (e.shiftKey) {
            errase(target);
            shade(target); 
        } else {
            errase(target);
            paint(target);
        }

    }

}

// Listen to mouse over movement

window.addEventListener('mouseover', e => etch(e));
window.addEventListener('click', e => etch(e));
window.addEventListener('touchstart', e => etch(e));

// Initialize

createSquares(100)
clear();
drawHellow();