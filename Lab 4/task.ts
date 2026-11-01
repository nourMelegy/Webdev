
const input = document.getElementById("todo-input") as HTMLInputElement;
const button = document.getElementById("add-button") as HTMLButtonElement;
const list = document.getElementById("todo-list") as HTMLUListElement;
const itemsLeft = document.getElementById("items-left") as HTMLSpanElement;
const filterButtons = document.querySelectorAll(".filters button");
const clearCompletedButton = document.getElementById("clear-completed") as HTMLButtonElement;
const clearAllButton = document.getElementById("clear-all") as HTMLButtonElement;

let todos: { id: number; text: string; completed: boolean }[] = [];
let nextId = 1;
let currentFilter = "all";

// Add a todo
button.addEventListener("click", function () {
  const text = input.value.trim();

  if (text !== "") {
    const todo = {
      id: nextId,
      text: text,
      completed: false
    };

    todos.push(todo);
    nextId++;
    input.value = "";

    showTodos();
  }
});

// Display todos
function showTodos() {
  list.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];

    if (currentFilter === "active" && todo.completed) {
      continue;
    }

    if (currentFilter === "completed" && !todo.completed) {
      continue;
    }

    const item = document.createElement("li");
    item.className = "todo-item";

    if (todo.completed) {
      item.classList.add("completed");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;

    checkbox.addEventListener("change", function () {
      todo.completed = checkbox.checked;
      showTodos();
    });

    const textSpan = document.createElement("span");
    textSpan.textContent = todo.text;

    // Double-click to edit
    textSpan.addEventListener("dblclick", function () {
      const newText = prompt("Edit todo:", todo.text);

      if (newText !== null && newText.trim() !== "") {
        todo.text = newText.trim();
        showTodos();
      }
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "×";
    deleteButton.type = "button";
    deleteButton.className = "delete-btn";

    deleteButton.addEventListener("click", function () {
      const updatedTodos = [];

      for (let j = 0; j < todos.length; j++) {
        if (todos[j].id !== todo.id) {
          updatedTodos.push(todos[j]);
        }
      }

      todos = updatedTodos;
      showTodos();
    });

    item.appendChild(checkbox);
    item.appendChild(textSpan);
    item.appendChild(deleteButton);
    list.appendChild(item);
  }

  // Count unfinished todos
  let remaining = 0;

  for (let i = 0; i < todos.length; i++) {
    if (!todos[i].completed) {
      remaining++;
    }
  }

  itemsLeft.textContent = remaining + " items left";
}

// Filter buttons
filterButtons.forEach(function (filterButton) {
  filterButton.addEventListener("click", function () {
    currentFilter = (filterButton as HTMLButtonElement).dataset.filter || "all";
    showTodos();
  });
});

// Clear completed todos
clearCompletedButton.addEventListener("click", function () {
  const updatedTodos = [];

  for (let i = 0; i < todos.length; i++) {
    if (!todos[i].completed) {
      updatedTodos.push(todos[i]);
    }
  }

  todos = updatedTodos;
  showTodos();
});

// Clear all todos
clearAllButton.addEventListener("click", function () {
  todos = [];
  showTodos();
});

// Initial display
showTodos();
