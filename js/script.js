const buttonHobby = document.querySelector(".js-sectionButtonHobby");
const hobby = document.querySelector(".js-sectionHobby");

buttonHobby.addEventListener("click", () => {
    hobby.classList.toggle("section__hobbyChange");
});

const button = document.querySelector(".js-button");
const body = document.querySelector(".js-body");
const themeName = document.querySelector(".js-themeName");

button.addEventListener("click", () => {
    body.classList.toggle("blueBackground");
    body.classList.contains("blueBackground") ? themeName.innerText = "biały" : themeName.innerText = "błękitny";

});