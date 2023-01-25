const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HiDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    localStorage.setItem("username", username);
    greeting.innerHTML = `Hello ${username}`;
    greeting.classList.remove(HiDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);