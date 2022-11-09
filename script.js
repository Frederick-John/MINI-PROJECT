// Object to store details
let userdetailsdatabase = {};

function getuserdetails() {
  // Username
  let username = prompt("Enter your username");

  if (username == null) {
    return;
  }

  function validateusername(username) {
    if (username.length < 10 && username.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  while (validateusername(username) == false) {
    username = prompt("Username must be less than 10 and greater than 0");
  }
  userdetailsdatabase["username"] = username;
  // Email Address
  let email = prompt("Enter your email address");

  if (email == null) {
    return;
  }

  function validateemail(email) {
    const emailcheck =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    emailcheckResult = emailcheck.test(email);
    if (emailcheckResult == true) {
      return true;
    } else {
      return false;
    }
  }
  while (validateemail(email) == false) {
    email = prompt("Enter a valid email");
    userdetailsdatabase["email"] = email;
  }
  // Phone Number
  let phonenumber = prompt("Enter your phone number");

  if (phonenumber == null) {
    return;
  }

  function validatephonenumber(phonenumber) {
    if (phonenumber.length == 11) {
      return true;
    } else {
      return false;
    }
  }
  while (validatephonenumber(phonenumber == false)) {
    phonenumber = prompt("Phone number must be eleven digit. Try again.");
  }
  userdetailsdatabase["phonenumber"] = phonenumber;
  // Password
  let password = prompt("Enter your password");

  if (password == null) {
    return;
  }

  function validatepassword(password) {
    if (password.length < 6) {
      return false;
    } else {
      return true;
    }
  }
  while (validatepassword(password) == false) {
    password = prompt("Password must not be less than six digit");
  }
  userdetailsdatabase["password"] = password;
  // Confrim Password
  let confirmpassword = prompt("Confirm your password");

  if (confirmpassword == null) {
    return;
  }

  function validateconfirmpassword(confirmpassword) {
    if (confirmpassword != password) {
      return false;
    } else {
      return true;
    }
  }
  while (validateconfirmpassword(confirmpassword) == false) {
    confirmpassword = prompt("Confirm password does not match. Try again!");
  }
  userdetailsdatabase["confirmpassword"] = confirmpassword;
}

function displayuserdetails() {
  alert(
    `Your Details:\n\nUsername: ${userdetailsdatabase.username}\nEmail: ${userdetailsdatabase.email}\nPhone Number: ${userdetailsdatabase.phonenumber}`);
}
