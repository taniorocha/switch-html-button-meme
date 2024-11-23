var buttons = document.querySelectorAll(".switch-box");

buttons.forEach((element) => {
    element.addEventListener("click", () => element.classList.toggle("active"));
});
