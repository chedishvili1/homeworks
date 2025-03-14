const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn")
const taskList = document.getElementById("task-list")

function addTask() {
    const taskText = taskInput.ariaValueMax.trim();
    if (taskText === '')
        return;
}

const taskItem = document.createElement('li');
  taskItem.className = 'task-item';

  const taskTextSpan = document.createElement('span');
  taskTextSpan.textContent = taskText;
  taskItem.appendChild(taskTextSpan);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(taskItem)
  })
  taskItem.appendChild(deleteBtn)

  taskList.appendChild(taskItem)