window.addEventListener("load", () => {
    fetchData();
})







function fetchData() {
    let data = axios.get("/data/elements.json");

    data
        .then((res) => {
            console.log(res.data);

            displayTable(res.data);
        })
        .then((res) => {
        })
}


const container = document.getElementById("periodic-table-grid-container");


function displayTable(data) {
    data.forEach(element => {
        container.innerHTML += `
            <div class="element ${getCategoryClassName(element.category)} ${element.block}" style='grid-column: ${element.xpos}; grid-row:${element.ypos}'">
            <a href="pages/element-details.html?element_name=${element.name}">
            <div class="element-number">${element.number}</div>
            <div class="element-symbol">${element.symbol}</div>
            <div class="element-name">${element.name}</div>
            </a>
            </div>
        `

    });
}


function getCategoryClassName(categoryName) {
    return categoryName.split(" ").join("_");
}






