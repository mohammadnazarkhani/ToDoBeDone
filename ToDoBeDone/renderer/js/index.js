// const sql = require('msnodesqlv8');

// const connectionString = "server=.;Database=ToDoBeDone;Trusted_Connection=Yes;Driver={SQL SERVER Native client 11.0}";
// const query = "SELECT 'Hello world'";

// sql.query(connectionString, query, (err, rows) => {
//     console.log(rows);
// });

// Function to add a new task
function addTask() {
    // Get the input element for task name
    var inputElement = document.getElementById("add-task");

    // Get the value entered by the user
    var taskName = inputElement.value;

    // Create a new task item element
    var taskItem = document.createElement("div");
    taskItem.classList.add("list-item");

    // Set the task name as the text content of the task item
    taskItem.textContent = taskName;

    // Create a delete button for the task item
    var deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete";

    // Append the delete button to the task item
    taskItem.appendChild(deleteButton);

    // Get the container for the list of tasks
    var listContainer = document.getElementById("listcontainer");

    // Append the new task item to the list container
    listContainer.appendChild(taskItem);

    // Clear the input field after adding the task
    inputElement.value = "";
}
