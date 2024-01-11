window.addEventListener("load", () => {
  fetchData();
});

const hamburgerIcon = document.getElementById("hamburger-icon");
const navbar = document.getElementById("nav-bar");

const toggleNavbar = () => {
  navbar.classList.toggle("active");
};

hamburgerIcon.addEventListener("click", () => {
  toggleNavbar();
});

// searchInput.addEventListener("input", () => {
//     // console.log(searchInput.value);

//     const filteredelements= myData.filter((element) => {
//         if (element.name.toLowerCase().startsWith(searchInput.value.toLowerCase()) && searchInput.value !== "") {
//             return element.name;
//         }
//     })

//     console.log(filteredelements);
// })

let mydata;
function fetchData() {
  let data = axios.get("/data/elements.json");
  data
    .then((res) => {
      displayTable(res.data);
      searchElements(res.data);
    })
    .catch((err) => {});
}

const container = document.getElementById("periodic-table-grid-container");

function displayTable(data) {
  // console.log(data);
  container.innerHTML = "";
  data.forEach((element) => {
    // container.innerHTML += `
    //                 <div class="element ${getCategoryClassName(
    //                   element.category
    //                 )} ${element.block}" style='grid-column: ${
    //   element.xpos
    // }; grid-row:${element.ypos}'">
    //                 <a target="_blank" href="/pages/element-details.html?element_name=${
    //                   element.name
    //                 }">
    //                 <div class="element-number">${element.number}</div>
    //                 <div class="element-symbol">${element.symbol}</div>
    //                 <div class="element-name">${element.name}</div>
    //                 <div class="element-mass">${element.atomic_mass}</div>
    //                 </a>
    //                 </div>
    //                 `;


    const newDiv = document.createElement("div");
    newDiv.classList.add("element");
    newDiv.innerHTML = `
    <a target="_blank" href="/pages/element-details.html?element_name=${
        element.name
      }">
      <div class="element-number">${element.number}</div>
      <div class="element-symbol">${element.symbol}</div>
      <div class="element-name">${element.name}</div>
      <div class="element-mass">${element.atomic_mass}</div>
      </a>`
      newDiv.classList.add(getCategoryClassName(element.category))
      newDiv.style.gridColumn = element.xpos;
      newDiv.style.gridRow = element.ypos;

      container.appendChild(newDiv);
      
      
     })

      
}

function getCategoryClassName(categoryName) {
  return categoryName.split(" ").join("_");
}

let filteredData = [];


function searchElements(data) {
  const searchInput = document.getElementById("search-bar");
  searchInput.addEventListener("input", (event) => {
    if (event.target.value === "") {
      displayTable(data);
    } else {
      const filteredelements = data.filter((element) => {
        if (
          element.name
            .trim()
            .toLowerCase()
            .includes(searchInput.value.toLowerCase()) &&
          searchInput.value !== ""
        ) {
          return element.name;
        }
      });
      if (filteredelements.length < 1) {
        filteredData =  data;
        displayTable(data);
      } else {
        filteredData=  filteredelements;
        displayTable(filteredelements);
       
      }
    }
  });

}




