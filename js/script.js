const buttonCM = document.getElementById('clickMe');
buttonCM.onclick = function(){
    document.body.classList.toggle('bg-primary');
    buttonCM.style.border = '3px solid white';
    document.body.removeAttribute('style');
}


const bRandom = document.getElementById('random');
bRandom.addEventListener('click', function(){
    let r = Math.round(Math.random() * 255 + 1);
    let g = Math.round(Math.random() * 255 + 1);
    let b = Math.round(Math.random() * 255 + 1);
    bRandom.style.border = '3px solid white';
    document.body.style.background = `rgb(${r}, ${g}, ${b})`;
})