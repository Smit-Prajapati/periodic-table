const urlParams = new URLSearchParams(window.location.search);
const searchQuery = urlParams.get("element_name");



window.addEventListener("load", () => {
    fetchData();
})

let dataObject;

function fetchData() {
    let data = axios.get("/data/elements.json");

    data
        .then((res) => {
            dataObject = res.data;

            displayData();

            
        })
       
}

function displayData() {
    dataObject.forEach(element => {
        if(element.name == searchQuery) {
            document.title = element.name;
            document.getElementById("element-info").innerHTML = `
            <div class="div1">${element.symbol}</div>
            <div class="div2">
                <div class="title">Category</div>
                <div class="info">${element.category}</div>
            </div>
            <div class="div3">
                <div class="div">
                    <div class="title">Discovered by</div>
                <div class="info">${element.discovered_by}</div>
                </div>
                <div class="div">
                    <div class="title">Named by</div>
                    <div class="info">${element.named_by}</div>
                </div>
            </div>
            <div class="div4">${element.name}</div>
            <div class="div5">
                
                <div class="title">Atomic Mass</div>
                <div class="info">${element.atomic_mass } amu</div>
            </div>
            <div class="div6">
                <div class="title">Density</div>
                <div class="info">${element.density} kg/m3</div>
            </div>
            <div class="div7">
                <div class="model">
                <model-viewer alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum" src="${element.bohr_model_3d}" ar environment-image="${element.bohr_model_image}"  shadow-intensity="1" camera-controls touch-action="pan-y" camera-orbit="-45deg 30deg 1.3m" autoplay></model-viewer>

            </div>
            </div>
            <div class="div8">
                <img src="${element.image.url}" alt="img">
            </div>
            <div class="div9">
                <p>${element.summary}</p>
            </div>
            <div class="div10">
                <div class="title">Electron configuration</div>
                <div class="info">${element.electron_configuration}</div>
            </div>
            <div class="div11">
                <a href="${element.source}">Source</a>
            </div>
            `
        }
    });
}
