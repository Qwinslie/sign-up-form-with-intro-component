"use strict";

  $(document).ready(function() {
    const submitBtn = $("#submit-info");
    const successMsg = $(".success-msg");
  
    const userFirstName = $(".first-name");
    const nameLabel = $(".name-label");
    const FirstNameErrorMessage = $(".first-name-error-message");
  
    const userLastName = $(".last-name");
    const lastNameLabel = $(".last-name-label");
    const lastNameErrorMessage = $(".last-name-error-message");
  
    const userEmail = $(".email-address");
    const emailLabel = $(".email-label");
    const emailErrorMessage = $(".email-error-message");
    let emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    const userPassword = $(".pass-word");
    const passwordLabel = $(".pass-word-label");
    const passwordError = $(".pass-word-error");
    let passValidation = /^[A-Za-z]\w{7,14}$/;
  
    let errorFunction = function() {
      if (userFirstName.val().length === 0) {
        nameLabel.text("First Name cannot be empty");
        userFirstName.css("border-color", "red");
        FirstNameErrorMessage.css("display", "inline");
      }
      if (userLastName.val().length === 0) {
        lastNameLabel.text("Last Name cannot be empty");
        userLastName.css("border-color", "red");
        lastNameErrorMessage.css("display", "inline");
      }
      if (userFirstName.val().length > 0) {
        nameLabel.text("");
        userFirstName.css("border-color", "hsl(154, 59%, 51%)");
        FirstNameErrorMessage.css("display", "none");
      }
      if (userLastName.val().length > 0) {
        lastNameLabel.text("");
        userLastName.css("border-color", "hsl(154, 59%, 51%)");
        lastNameErrorMessage.css("display", "none");
      }
      if (userEmail.val().length === 0) {
        emailLabel.text("Email cannot be empty");
        userEmail.css("border-color", "red");
        emailErrorMessage.css("display", "inline");
      }
      if (!userEmail.val().match(emailValidation) && userEmail.val().length !== 0) {
        emailLabel.text("Looks like this is not an email");
        userEmail.css("border-color", "red");
        emailErrorMessage.css("display", "inline");
      }
      if (userEmail.val().match(emailValidation)) {
        emailLabel.text("");
        userEmail.css("border-color", "hsl(154, 59%, 51%)");
        emailErrorMessage.css("display", "none");
      }
      if (userPassword.val().length === 0) {
        passwordLabel.text("Password cannot be empty");
        userPassword.css("border-color", "red");
        passwordError.css("display", "inline");
      }
      if (!userPassword.val().match(passValidation) && userPassword.val().length !== 0) {
        passwordLabel.text("Your password must be between 7-16 characters that starts with a letter(Only letters, numbers & underscore are valid)");
        userPassword.css("border-color", "red");
        passwordError.css("display", "inline");
      }
      if (userPassword.val().match(passValidation)) {
        passwordLabel.text("");
        userPassword.css("border-color", "hsl(154, 59%, 51%)");
        passwordError.css("display", "none");
      }
      if (
        userFirstName.val().length > 0 &&
        userLastName.val().length > 0 &&
        userEmail.val().match(emailValidation) &&
        userPassword.val().match(passValidation)
      ) {
        successMsg.text("Success! Please check your email");
      } else {
        console.log("Unknown Error");
      }
    };
  
    submitBtn.click(function(event) {
      event.preventDefault();
      errorFunction();
    

  // Collect the form data
  const formData = {
    firstName: userFirstName.val(),
    lastName: userLastName.val(),
    email: userEmail.val(),
    password: userPassword.val()
  };

  // Log the collected form data to the console
  console.log(formData);
});
});


