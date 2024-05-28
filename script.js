// Get elements by their IDs for form, success message, order again button, and warning message
const formID = document.getElementById("formID");
const success = document.getElementById("success");
const orderAgain = document.getElementById("order-again");
const warning1 = document.getElementById("warning1");

// Get elements by their IDs for displaying the result fields
const resultFields = {
    first_name: document.getElementById("result-first-name"),
    last_name: document.getElementById("result-last-name"),
    your_location: document.getElementById("result-your-location"),
    phone: document.getElementById("result-phone"),
    items: document.getElementById("result-items"),
    comment: document.getElementById("result-comment"),
};

// Get all input elements with the class "input" and convert the HTMLCollection to an array
const allInputs = Array.from(document.getElementsByClassName("input"));

// Get all checkbox inputs within elements that have the class "hardware-item"
const checkboxes = document.querySelectorAll('.hardware-item input[type="checkbox"]');

// Get the comment text area element by its ID
const comment = document.getElementById("comment");

// Add an event listener to the form for the submit event
formID.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    let inputValues = {}; // Object to store input values
    let selectedItems = []; // Array to store selected checkbox values

    // Loop through each input element, trim the value, and store it in inputValues
    allInputs.forEach(input => {
        inputValues[input.id] = input.value.trim();
        // Toggle the "border" class based on whether the input value is empty
        input.classList.toggle("border", !input.value.trim());
    });

    // Loop through each checkbox and add the value to selectedItems if it is checked
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedItems.push(checkbox.value);
        }
    });

    // Filter to get all inputs that are empty
    const emptyInputs = allInputs.filter(input => !input.value.trim());

    // Toggle the visibility of the warning message if no checkboxes are selected
    warning1.classList.toggle("visible", selectedItems.length === 0);

    // If all inputs are filled and at least one checkbox is selected, proceed
    if (selectedItems.length > 0 && emptyInputs.length === 0) {
        formID.classList.add("hidden"); // Hide the form
        success.classList.add("visible"); // Show the success message
        // Populate the result fields with the input values and selected items
        resultFields.first_name.innerText = inputValues["first-name"];
        resultFields.last_name.innerText = inputValues["last-name"];
        resultFields.your_location.innerText = inputValues["your-location"];
        resultFields.phone.innerText = inputValues["phone"];
        resultFields.items.innerHTML = selectedItems.map(item => `<span>${item}</span>`).join(', ');
        resultFields.comment.innerHTML = comment.value.trim() || "No additional information provided"; // Default comment message
    }
});

// Add an event listener to the "Order Again" button
orderAgain.addEventListener("click", () => {
    formID.reset(); // Reset the form fields
    formID.classList.remove("hidden"); // Show the form
    success.classList.remove("visible"); // Hide the success message
    warning1.classList.remove("visible"); // Hide the warning message

    // Remove the "border" class from all inputs
    allInputs.forEach(input => input.classList.remove("border"));
    // Uncheck all checkboxes
    checkboxes.forEach(checkbox => checkbox.checked = false);
});
