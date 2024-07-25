const todoList = [
  {
    name: "make dinner",
    dueDate: "2024-01-03",
  },
  {
    name: "do laundry",
    dueDate: "2024-01-03",
  },
  {
    name: "take out trash",
    dueDate: "2024-01-03",
  },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;

    const html = `<div>
    ${name} </div> <div> ${dueDate} </div>
    <button onclick="
    todoList.splice(${i}, 1);
    renderTodoList();
    " class="js-delete-button">Delete</button>
    `;
    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

document.querySelector(".js-add-button").addEventListener("click", () => {
  addTodo();
});

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate,
    name,
    dueDate,
  });

  inputElement.value = "";

  renderTodoList();
}