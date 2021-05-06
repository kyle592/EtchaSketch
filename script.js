
popup = "How many squares per side should the new grid be"
const button = document.querySelector("#button")
const gridContainer = document.querySelector("#grid-container")
let root = document.documentElement
let dimension = 16;
let numOfCells = dimension**2;
root.style.setProperty('--row', (100/dimension) + "%");

function buildGrid (){
    gridContainer.innerHTML = "";
    let numOfTimes = dimension*dimension;
    for(let i = 0;i<numOfTimes;i++){
        const singleCell = document.createElement("div");
        singleCell.textContent = "hello";
    
        singleCell.classList.add("cell")
        singleCell.addEventListener('mouseover', () => {
            singleCell.style.backgroundColor = "green";
        });
        gridContainer.appendChild(singleCell);
    }
}


button.addEventListener('click', () => {
    dimension = prompt (popup);
    buildGrid();
});

buildGrid();