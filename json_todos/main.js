const form = document.forms.todo;
const list = document.querySelector(".list-item");
const add = document.querySelector(".add");

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
          <span class="content">${todo.title}</span>
          <button onclick = (deleteItem(${todo.id}))>Delete</button>
        </div>`;
    });
    list.innerHTML = item.join("");
  } catch (err) {
    console.log(err);
  }
};
renderTodo();
