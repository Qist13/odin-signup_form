let password = document.getElementById("password");
let password2 = document.getElementById("confirm-password");
let btnCreateAccount = document.getElementsByClassName("btn-register")[0];
let pswdErrList = document.getElementById("pswd-errorlist");
let errList = document.getElementById("errorlist");

btnCreateAccount.addEventListener("click", () => {
  let pswd = password.value;
  let pswd2 = password2.value;

  errList.innerHTML = "";

  if (!isValidLength(pswd)) {
    errList.innerHTML +=
      "<li>Your password must be between 6 - 20 characters</li>";
  }
  if (!containsNumber(pswd)) {
    errList.innerHTML +=
      "<li>Your password must contain atleast one number</li>";
  }
  if (!containsLowercaseLetter(pswd)) {
    errList.innerHTML +=
      "<li>Your password must contain atlest one lowercase letter</li>";
  }
  if (!containsUppercaseLetter(pswd)) {
    errList.innerHTML +=
      "<li>Your password must contain atleast one uppercase letter</li>";
  }
  if (!containsSpecialChar(pswd)) {
    errList.innerHTML +=
      "<li>Your password must contain atleast one special character</li>";
  }
  if (!isMatching(pswd, pswd2)) {
    errList.innerHTML += "<li>Your passwords do not match</li>";
  }
  if (!)
});

function containsSpecialChar(password) {
  return /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password);
}

function containsNumber(password) {
  return /[0-9]/.test(password);
}

function containsLowercaseLetter(password) {
  return /[a-z]/.test(password);
}

function containsUppercaseLetter(password) {
  return /[A-Z]/.test(password);
}

function isValidLength(password) {
  if (password.length >= 6 && password.length <= 20) {
    return true;
  }

  return false;
}

function isMatching(password, password2) {
  return password === password2;
}
