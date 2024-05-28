# IT Hardware Request Form

The IT Hardware Request Form is a simple web application that allows users to submit requests for various hardware components. The form collects user information, the hardware items needed, and any additional comments. Upon submission, the form displays a success message with the details of the request.

## Features
- Responsive Design: The form is designed to be responsive and looks good on all devices.
- Form Validation: Ensures that all required fields are filled out and at least one hardware item is selected.
- Dynamic Success Message: Displays the details of the request upon successful submission.
- Reset and Order Again: Allows users to reset the form and submit a new request.

## Technologies Used
- HTML
- CSS
- JavaScript


## Installation

To run this project locally, follow these steps:

1. Clone the repository
```bash
git clone https://github.com/Ninunutsi/component-order-form.git
```
2. Navigate to the project directory
```bash
cd hardware-request-form
```
3.Open the index.html file in your browser:
```bash
open index.html
```

## Usage

1. Fill out the form:
- Enter your first name, last name, location, and phone number.
- Select the hardware items you need.
- Provide any additional information in the comments section (optional).
2. Submit the form by clicking the "Submit" button.
3. View the success message with the details of your request.
4. Reset the form by clicking the "Order Again" button to submit a new request.

## Folder Structure

```bash
hardware-request-form/
├── assets/
│   ├── check-circle-svgrepo-com.svg
│   └── wave-haikei.svg
├── index.html
├── styles.css
├── responsive.css
└── script.js
```

- assets/: Contains image assets used in the project.
- index.html: The main HTML file.
- styles.css: The main stylesheet.
- responsive.css: The stylesheet for responsive design.
- script.js: The JavaScript file handling form submission and interactivity.

## Code Explanation

### HTML (index.html)
- Form Structure: Contains inputs for user details, checkboxes for hardware items, a textarea for additional comments, and a submit button.
- Success Message: Displayed upon successful form submission, showing the request details.
### CSS (styles.css and responsive.css)
- Global Styles: Includes styles for the body, form container, headers, and inputs.
- Form Styles: Specific styles for form elements, including input fields, labels, checkboxes, and buttons.
- Responsive Styles: Additional styles to ensure the form looks good on different screen sizes.
### JavaScript (script.js)
- Form Validation: Ensures that all required fields are filled out and at least one hardware item is selected.
- Success Message Display: Handles the logic to display the success message with the request details.
- Form Reset: Resets the form to its initial state when the "Order Again" button is clicked.
