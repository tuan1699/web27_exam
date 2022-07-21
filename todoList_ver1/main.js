let input = document.querySelector(".entered-list");
let btn = document.querySelector(".btn-add");
let list_item = document.querySelector(".list-item");
let item = document.getElementsByClassName("item");
let test = document.querySelector(".test");
// add btn disable

input.addEventListener("keyup", function () {
  if (input.value.trim() != 0) {
    btn.classList.add("active");
  } else {
    btn.classList.remove("active");
  }
});

// add new item to list

function addItem() {
  if (input.value.trim() != 0) {
    let newItem = document.createElement("div");
    let status = document.querySelector(".status");

    newItem.classList.add("item");
    newItem.innerHTML = `
        <p>${input.value}</p>
        <div class="item-icon">
          <i class="fa-solid fa-square-check check"></i>
          <i class="fa-solid fa-trash-can delete"></i>
        </div>
      `;
    list_item.appendChild(newItem);
    input.value = "";
    status.innerText = `You have ${item.length} pending task`;
  } else {
    alert("please enter a task");
  }
}

btn.addEventListener("click", addItem);
input.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    addItem();
  }
});

// delete item from list
list_item.addEventListener("click", function (e) {
  let status = document.querySelector(".status");
  if (e.target.classList.contains("fa-trash-can")) {
    e.target.parentElement.parentElement.remove();
  }
  status.innerText = `You have ${item.length} pending task`;
});

// mark item as completed
list_item.addEventListener("click", function (e) {
  let count = item.length;
  let status = document.querySelector(".status");
  if (e.target.classList.contains("fa-square-check")) {
    e.target.parentElement.parentElement.classList.toggle("completed");
  }
  for (i = 0; i < item.length; i++) {
    if (item[i].classList.contains("completed")) {
      count -= 1;
      status.innerText = `You have ${count} pending task`;
    }
  }
});
