function getFormvalue() {
    // Get the value of the first name input field
    var firstName = document.getElementById("firstName").value;
    
    // Get the value of the last name input field
    var lastName = document.getElementById("lastName").value;
    
    // Concatenate the first and last names
    var fullName = firstName + " " + lastName;
    
    // Display the full name using an alert
    alert(fullName);
}
