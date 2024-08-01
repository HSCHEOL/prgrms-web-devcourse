const input = document.getElementById("todoInput");
const button = document.getElementById("addButton");
const plan = document.getElementById("plan");

function addPlan() {
  const value = input.value.trim();
  if (value) {
    // Create the new list item with a button
    const listItem = document.createElement("li");
    listItem.className = "li";
    listItem.innerHTML = `${value} <button>삭제</button><br>`;

    // Append the new list item to the plan
    plan.appendChild(listItem);

    // Add click event listener to the delete button
    listItem.querySelector("button").addEventListener("click", function () {
      listItem.remove(); // Remove the list item
    });

    input.value = ""; // Clear the input field
  }
}

// Add event listener to the 'Add' button
button.addEventListener("click", addPlan);
