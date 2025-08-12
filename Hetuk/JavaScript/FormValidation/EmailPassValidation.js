const myFunc = (e) => {
  e.preventDefault();

  let email = document.querySelector("#email").value;
  let pass = document.querySelector("#pass").value;
  //   console.log("Email: ", pass);

  if (email.indexOf("@") <= 0) {
    document.getElementById("message").innerHTML = "Invalid Email";
    return false;
    document.getElementById("message").innerHTML = "";
  } else if (
    email.charAt(email.length - 4) !== "." &&
    email.charAt(email.length - 3) !== "."
  ) {
    document.getElementById("message").innerHTML = "Invalid Email Domain";
    return false;
    document.getElementById("message").innerHTML = "";
  }

  if (pass !== null) {
    if (pass.trim() === "") {
      document.getElementById("message_pass").innerHTML =
        "Please Enter The Value";
    } else if (pass.length > 8 && pass.length > 20) {
      document.getElementById("message_pass").innerHTML =
        "Please Enter The Corrected Length";
    } else {
      const UpperCase = /[A-Z]/.test(pass);
      const LowerCase = /[a-z]]/.test(pass);
      const NumCase = /[0-9]/.test(pass);
      const SpecialCase = /[!@#$%^&*\,.?":{}|<>]/.test(pass);
      // console.log();
      if (!UpperCase) {
        document.getElementById("message_pass").innerHTML =
          "Please Enter The One Upper Case In Password";
        // document.getElementById("message_pass").innerHTML = "";
      } else if (!LowerCase) {
        document.getElementById("message_pass").innerHTML =
          "Please Enter The One Lower Case In Password";
        // document.getElementById("message_pass").innerHTML = "";
      } else if (!NumCase) {
        document.getElementById("message_pass").innerHTML =
          "Please Enter The One Number In Password";
        // document.getElementById("message_pass").innerHTML = "";
      } else if (!SpecialCase) {
        document.getElementById("message_pass").innerHTML =
          "Please Enter The One Special Charater Case In Password";
        // document.getElementById("message_pass").innerHTML = "";
      } else {
        document.getElementById("message_pass").innerHTML = "Password Is Valid";
      }
    }
  }
};
