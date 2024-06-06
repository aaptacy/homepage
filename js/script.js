{
    const hobbyToggleBackground = () => {
        const hobby = document.querySelector(".js-sectionHobby");

        hobby.classList.toggle("section__hobbyChange");
    };

    const buttonHobby = document.querySelector(".js-sectionButtonHobby");

    buttonHobby.addEventListener("click", hobbyToggleBackground);


    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-themeName");

        body.classList.toggle("blueBackground");
        body.classList.contains("blueBackground") ? themeName.innerText = "biały" : themeName.innerText = "błękitny";
    }

    const changeBodyBackgroundButton = document.querySelector(".js-button");

    changeBodyBackgroundButton.addEventListener("click", toggleBackground);

}