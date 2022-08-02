const getTodo = () => {
  return axios.get("https://jsonplaceholder.typicode.com/todos");
};

const renderTodo = async () => {
  try {
    const { data } = await getTodo();

    const item = data.map((todo) => {
      return `<div class="${!todo.completed ? "item" : "item completed"}"" >
        <input onchange = (completedTodo(${todo.id})) type="checkbox" ${
        todo.completed ? "checked" : ""
      } />
        <span>${todo.title}</span>
        <button onclick = (deleteItem(${todo.id}))>Delete</button>
      </div>`;
    });
    list.innerHTML = item.join("");
  } catch (err) {
    console.log(err);
  }
};
renderTodo();
// Add Event onclick to input checkbox
const form = document.forms.todo;
const list = document.querySelector(".list-item");
const add = document.querySelector(".add");
// render todoList form Arr

const completedTodo = async (id) => {
  try {
    const { data } = await getTodo();

    const todoId = data.find(function (todo) {
      return todo.id == id;
    });

    todoId.completed = !todoId.completed;
    renderTodo();
  } catch (err) {
    console.log(err);
  }
};

const createTodo = async () => {
  try {
    const { data } = await getTodo();
    const newItem = {
      id: Math.floor(Math.random() * 100),
      title: form.elements.title.value,
      completed: false,
    };

    data.push(newItem);

    renderTodo();
  } catch (err) {
    console.log(err);
  }
};

// Get todo item from input

// Add Event submit when submit form by enter button
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (this.elements.title.value !== "") {
    createTodo();
  } else alert("Please enter your work");

  this.elements.title.value = "";
});

const deletebtn = document.getElementsByClassName("delete");
// Delete Element

const deleteItem = async (id) => {
  try {
    const { data } = await getTodo();
    const index = data.findIndex(function (todo) {
      return todo.id === id;
    });
    data.splice(index, 1);
    renderTodo();
  } catch (err) {
    console.log(err);
  }
};
