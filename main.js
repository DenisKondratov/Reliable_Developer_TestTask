(function () {
    let menuButton = document.getElementsByTagName('figure')[0];
    let containerDisable = document.querySelector('.container');
    let containerMenu = document.querySelector('.containerMenu');
    let divInvisible = document.querySelectorAll('.menuButtonItem');
    menuButton.addEventListener('click', () => {
        containerDisable.classList.toggle('containerDisable');
        containerMenu.classList.toggle('menuButtonActive');
        menuButton.classList.toggle('activeFigure');
        for (let i = 0; i < divInvisible.length; i++){
            divInvisible[i].classList.toggle('menuButtonItemInvisible')
        }
        console.log(divInvisible)
    })

}());