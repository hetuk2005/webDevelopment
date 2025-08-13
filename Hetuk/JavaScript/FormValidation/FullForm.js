const myForm = (e) => {
  e.preventDefault();

  let username = document.querySelector("#user").value;
  let pass = document.querySelector("#pass").value;
  let confirm_password = document.querySelector("#confpass").value;
  let mobile = document.querySelector("#mobile").value;
  let email = document.querySelector("#email").value;

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
  } else {
    document.getElementById("username_message").innerHTML = "";
  }

  // Password Validation

  if (pass.trim() == "") {
    document.getElementById("pass_message").innerHTML =
      "Please Enter The Password";
    return false;
  } else if (pass.length > 8 && pass.length > 20) {
    document.getElementById("pass_message").innerHTML =
      "Please Enter The Corrected Length";
    return false;
  } else {
    const UpperCase = /[A-Z]/.test(pass);
    const LowerCase = /[a-z]/.test(pass);
    const NumCase = /[0-9]/.test(pass);
    const SpecialCase = /[!@#$%^&*\,.?":{}|<>]/.test(pass);
    if (!UpperCase) {
      document.getElementById("pass_message").innerHTML =
        "Please Enter The One Upper Case In Password";
      return false;
    } else if (!LowerCase) {
      document.getElementById("pass_message").innerHTML =
        "Please Enter The One Lower Case In Password";
      return false;
    } else if (!NumCase) {
      document.getElementById("pass_message").innerHTML =
        "Please Enter The One Number In Password";
      return false;
    } else if (!SpecialCase) {
      document.getElementById("pass_message").innerHTML =
        "Please Enter The One Special Charater Case In Password";
      return false;
    } else {
      document.getElementById("pass_message").innerHTML = "";
    }
  }

  // Confirm Password Validation

  if (confirm_password == "") {
    document.getElementById("confpass_message").innerHTML =
      "Please Fill The Confirm Password Field";
    return false;
  } else if (pass != confirm_password) {
    document.getElementById("confpass_message").innerHTML =
      "Password Not Matched With Confired Password";
    return false;
  } else {
    document.getElementById("confpass_message").innerHTML = "";
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
  } else {
    document.getElementById("mobile_message").innerHTML = "";
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
  } else {
    document.getElementById("email_message").innerHTML = "";
    alert("Form Submited");
    // document.querySelectorAll("input").values = "";
  }

  document.querySelectorAll("input").values = "";
};
