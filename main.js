(function () {
    let menuButton = document.getElementsByTagName('figure')[0];
    let containerDisable = document.querySelector('.container');
    let containerMenu = document.querySelector('.containerMenu');
    let divInvisible = document.querySelectorAll('.menuButtonItem');
    let logoLink = document.querySelectorAll('.logo__link');
    let activCounter = document.querySelectorAll('.container__stockContainer-link');

    menuButton.addEventListener('click', () => {
        containerDisable.classList.toggle('containerDisable');
        containerMenu.classList.toggle('menuButtonActive');
        menuButton.classList.toggle('activeFigure');
        for (let i = 0; i < divInvisible.length; i++) {
            divInvisible[i].classList.toggle('menuButtonItemInvisible')
        }
    })


    logoLink[0].onclick = function () {
        logoLink[0].classList.add('logo__linkActive');
        logoLink[1].classList.remove('logo__linkActive');
        logoLink[2].classList.remove('logo__linkActive');

    }
    logoLink[1].onclick = function () {
        logoLink[1].classList.add('logo__linkActive');
        logoLink[0].classList.remove('logo__linkActive');
        logoLink[2].classList.remove('logo__linkActive');

    }
    logoLink[2].onclick = function () {        
        logoLink[2].classList.add('logo__linkActive');
        logoLink[0].classList.remove('logo__linkActive');
        logoLink[1].classList.remove('logo__linkActive');

    }

    for(let i = 0; i < activCounter.length; i++) {
        activCounter[i].onclick = function(e){
            e.preventDefault();
            for(let j = 0; j < activCounter.length; j++){
                activCounter[j].classList.remove('activCounter');
            }
            this.classList.add('activCounter');
            
        }
    }


}());