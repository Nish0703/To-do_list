// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("new-task-input");
    const taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      const taskList = document.getElementById("task-list");
  
      // Create a new list item
      const newTask = document.createElement("li");
  
      // Create a checkbox
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
  
      // Create the text node for the task
      const taskTextNode = document.createTextNode(taskText);
  
      // Add checkbox and task text to the list item
      newTask.appendChild(checkbox);
      newTask.appendChild(taskTextNode);
  
      // Add the new task to the list
      taskList.appendChild(newTask);
  
      // Clear the input field
      taskInput.value = "";
    }
  }
  
  // Function to delete selected tasks
  function deleteSelected() {
    const taskList = document.getElementById("task-list");
    const tasks = taskList.getElementsByTagName("li");
  
    // Convert HTMLCollection to Array for easier manipulation
    const tasksArray = Array.from(tasks);
  
    tasksArray.forEach((task) => {
      const checkbox = task.getElementsByTagName("input")[0];
  
      // Check if the task is checked
      if (checkbox.checked) {
        taskList.removeChild(task); // Remove the task from the list
      }
    });
  }
  
  // Function to delete all tasks
  function deleteAll() {
    const taskList = document.getElementById("task-list");
  
    // Remove all tasks
    taskList.innerHTML = "";
  }
  