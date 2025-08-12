const myForm = (e) => {
  e.preventDefault();

  let username = document.querySelector("#user");
  let pass = document.querySelector("#pass");
  let confirm_password = document.querySelector("#confpass");
  let mobile = document.querySelector("#mobile");
  let email = document.querySelector("#email");

  // Username Validation

  if (username == "") {
    document.getElementById("username_message").innerHTML =
      "Please Fill The Username Field";
    return false;
  } else if (username.length <= 2 || username.length > 20) {
    document.getElementById("username_message").innerHTML =
      "Please Enter The Length Between 2 To 20";
    return false;
  } else if (!isNaN(username)) {
    document.getElementById("username_message").innerHTML =
      "Only Charaters Allowed";
    return false;
  }

  // Password Validation

  if (pass == "") {
    document.getElementById("pass_message").innerHTML =
      "Please Fill The Password Field";
    return false;
  } else if (pass.length <= 5 || pass.length > 20) {
    document.getElementById("pass_message").innerHTML =
      "Please Enter The Length Between 5 To 20";
    return false;
  } else if (!isNaN(pass != confirm_password)) {
    document.getElementById("pass_message").innerHTML =
      "Password Not Matched With Confired Password";
    return false;
  }

  // Confirm Password Validation

  if (confirm_password == "") {
    document.getElementById("confpass_message").innerHTML =
      "Please Fill The Confirm Password Field";
    return false;
  }

  // Mobile Number Validation

  if (mobile == "") {
    document.getElementById("mobile_message").innerHTML =
      "Please Fill The Mobile Number Field";
    return false;
  } else if (mobile.length != 10) {
    document.getElementById("mobile_message").innerHTML =
      "Mobile Number Must Be 10 Digits";
    return false;
  } else if (isNaN(mobile)) {
    document.getElementById("mobile_message").innerHTML =
      "Mobile Number Should Be Numbers";
    return false;
  }

  // Email Validation

  if (email.indexOf("@") <= 0) {
    document.getElementById("email_message").innerHTML = "Invalid Email";
    return false;
  } else if (
    email.charAt(email.length - 4) !== "." &&
    email.charAt(email.length - 3) !== "."
  ) {
    document.getElementById("email_message").innerHTML = "Invalid Email Domain";
    return false;
  } else if (email == "") {
    document.getElementById("email_message").innerHTML =
      "Please Fill The Email Field";
    return false;
  }
};
