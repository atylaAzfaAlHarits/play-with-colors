function checkScreenSize() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      const check = confirm('Halaman ini hanya bisa dibuka oleh desktop saja');
      if(check){
        window.location.href = "403.html";
    }
    window.location.href = "403.html";
    }
  }
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
  

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
    buttonCM.removeAttribute('style');
    bRandom.style.border = '3px solid white';
    document.body.style.background = `rgb(${r}, ${g}, ${b})`;
})