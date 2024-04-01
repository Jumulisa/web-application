//  storig tasks
let tasks = [];

// adding a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const newTask = {
            text: taskText,
            completed: false
        };
        tasks.push(newTask);
        taskInput.value = "";
        renderTasks();
    }
}

// Function to toggle task completion status
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Function to render tasks
function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task.text;
        if (task.completed) {
            li.classList.add("completed");
        }
        li.addEventListener("click", () => toggleTask(index));
        taskList.appendChild(li);
    });
}

// Add task button event listener
const addTaskButton = document.getElementById("addTaskButton");
addTaskButton.addEventListener("click", addTask);

// Initial rendering of tasks
renderTasks();

// deleting a task
function deleteTask(index) {
    tasks.splice(index, 1); // Remove task from the array
    renderTasks(); // Re-render tasks
}

// Updated render tasks function
function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task.text;
        if (task.completed) {
            li.classList.add("completed");
        }

        // Add a delete button for each task
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent event bubbling
            deleteTask(index);
        });
        li.appendChild(deleteButton);

        //  clicking event listener to toggle task completion
        li.addEventListener("click", () => toggleTask(index));

        taskList.appendChild(li);
    });
}

