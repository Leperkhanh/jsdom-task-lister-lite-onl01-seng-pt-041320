document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.querySelector("#create-task-form")
  const newTask = document.querySelector("#new-task-description")
  const taskList = document.querySelector("#tasks")

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const newTaskVaule = newTask.value;

    const newTaskItem = document.createElement("li")
    newTaskItem.innerText = newTaskVaule;

    const button = document.createElement("button")
    button.innerHTML = "X"
    button.setAttribute("data-action", "delete");

    taskList.appendChild(newTaskItem);

    newTaskItem.appendChild(button);

    taskForm.reset();
  })

  taskList.addEventListener("click", function(e) {
    if (e.target.dataset.action === "delete") {
      e.target.parentElement.remove()
    }
  })
});
