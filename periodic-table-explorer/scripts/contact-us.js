

let dataArr = [];

$("#contact-us-form").on("submit", (e) => {
    e.preventDefault();
  dataArr.push({
    name: $("#name").val(),
    email: $("#email").val(),
    message: $("#message").val(),
  });

  localStorage.setItem("data", JSON.stringify(dataArr));
  console.log(JSON.parse(localStorage.getItem("data")));
});
