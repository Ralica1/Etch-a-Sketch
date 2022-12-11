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
createSquares(100)