let tasks = [];

const addTask = (task) => {
  tasks.push({ task: task, id: new Date().getTime() });
};

const handleForm = (event) => {
  event.preventDefault();
  let task = document.getElementById("addTask").value;
  addTask(task);

  console.log(tasks);

  showTasks();
  resetForm();
};

const resetForm = () => {
  document.getElementById("addTaskForm").reset();
};

const handleShowTasks = () => {
  let tasks = document.querySelectorAll("#tasks div");
  tasks.length > 0 ? hideTasks() : showTasks();
};

const showTasks = () => {
  let div = document.getElementById("tasks");
  div.innerHTML = "";

  tasks.forEach((task) => {
    div.appendChild(createTaskDiv(task.task, task.id));
  });
};

const createTaskDiv = (task, id) => {
  let div = document.createElement("div");
  div.textContent = task;
  div.classList.add("task");
  div.appendChild(createDeleteButton(id));
  return div;
};

const createDeleteButton = (id) => {
  let button = document.createElement("button");
  button.textContent = "Delete";
  button.id = id;
  button.addEventListener("click", deleteTask);
  return button;
};

const deleteTask = ({ target }) => {
  tasks = tasks.filter((task) => task.id != target.id);
  showTasks();
};

const hideTasks = () => {
  let div = document.getElementById("tasks");
  div.innerHTML = "";
};
