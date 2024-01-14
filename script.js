// Creating variable through Id
// inputbox and listcontainer are a variable and li and span are elements
const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function Addtask() {
  if (inputBox.value === "") {
    alert("You must write something");
    // it gives alert on clicking buttton if the input box is empty
  } else {
    // li element is created=>then the things written inside the box will be written in in li  and then li will be displayed in listcontainer
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listcontainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  savedata();
}
// to add click event ;listener
listcontainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      savedata();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savedata();
    }
  },
  false
);
// to save and show data
function savedata() {
  localStorage.setItem("data", listcontainer.innerHTML);
}
function showtask() {
  listcontainer.innerHTML = localStorage.getItem("data");
}
showtask();
