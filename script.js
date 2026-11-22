function filterCards(type, button) {
  const cards = document.querySelectorAll("[data-type]");

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];

    switch (type) {
      case "all":
        card.style.display = "";
        break;
      default:
        if (card.dataset.type === type) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
    }
  }

  const buttons = document.querySelectorAll(".filter");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  button.classList.add("active");

  const count = document.getElementById("count");
}

function setError(id, message) {
  document.getElementById(id).innerText = message;
}

function checkTeam() {
  const team = document.getElementById("team").value.trim();
  if (team === "") {
    setError("teamErr", "Team name is required");
  } else {
    setError("teamErr", "");
  }
}

function checkBot() {
  const bot = document.getElementById("bot").value.trim();
  if (bot === "") {
    setError("botErr", "This field is required");
  } else {
    setError("botErr", "");
  }
}

function checkEmail() {
  const email = document.getElementById("email").value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setError("emailErr", email === "" ? "This field is required" : "Invalid email id");
  } else {
    setError("emailErr", "");
  }
}

function checkPhone() {
  const phone = document.getElementById("phone").value.trim();
  if (!/^\d{10}$/.test(phone)) {
    setError("phoneErr", phone === "" ? "This field is required" : "Invalid phone number");
  } else {
    setError("phoneErr", "");
  }
}

function checkPassword() {
  const password = document.getElementById("password").value;
  if (!/^(?=.*\d).{6,}$/.test(password)) {
    setError("passErr", password === "" ? "This field is required" : "Enter at least 6 characters and include a number");
  } else {
    setError("passErr", "");
  }
}

function checkRules() {
  const accepted = document.getElementById("rules-check").checked;
  if (!accepted) {
    setError("rulesErr", "You must agree before submitting");
  } else {
    setError("rulesErr", "");
  }
}
function disciplineChanged() {
  const discipline = document.getElementById("discipline").value;
  document.getElementById("formMsg").innerText = "Selected: " + discipline;
}

function showLength() {
  const password = document.getElementById("password").value;
  setError("passErr", password.length + " character(s) typed");
}

function textSelected(box) {
  const selectedText = box.value.substring(box.selectionStart, box.selectionEnd);
  document.getElementById("formMsg").innerText = "Selected " + selectedText.length + " character(s)";
}

function clearErrors() {
  const errorIds = ["teamErr", "botErr", "emailErr", "phoneErr", "passErr", "rulesErr"];
  errorIds.forEach(id => setError(id, ""));
}

function validateForm() {
  clearErrors();

  const team = document.getElementById("team").value.trim();
  const bot = document.getElementById("bot").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();
  const acceptedRules = document.getElementById("rules-check").checked;
  const teamRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;
  const passwordRegex = /^(?=.*\d).{6,}$/;
  let isValid = true;

  if (team === "") {
    setError("teamErr", "This field is required");
    isValid = false;
  } else if (!teamRegex.test(team)) {
    setError("teamErr", "Team name can contain only letters and spaces");
    isValid = false;
  }

  if (bot === "") {
    setError("botErr", "This field is required");
    isValid = false;
  }

  if (email === "") {
    setError("emailErr", "This field is required");
    isValid = false;
  } else if (!emailRegex.test(email)) {
    setError("emailErr", "Invalid email id");
    isValid = false;
  }

  if (phone === "") {
    setError("phoneErr", "This field is required");
    isValid = false;
  } else if (!phoneRegex.test(phone)) {
    setError("phoneErr", "Invalid phone number");
    isValid = false;
  }

  if (password === "") {
    setError("passErr", "This field is required");
    isValid = false;
  } else if (!passwordRegex.test(password)) {
    setError("passErr", "Enter at least 6 characters and include a number");
    isValid = false;
  }

  if (!acceptedRules) {
    setError("rulesErr", "You must agree before submitting");
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully");
    document.getElementById("regForm").reset();
    clearErrors();
    document.getElementById("formMsg").innerText = "";
  }

  return false;
}

function resetForm() {
  clearErrors();
  document.getElementById("formMsg").innerText = "";
}
