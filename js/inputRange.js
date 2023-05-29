function checkScreenSize() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      const check = confirm('Halaman ini hanya bisa dibuka oleh desktop saja');
      if(check){
        window.location.href = "../403.html";
    }
    window.location.href = "../403.html";
    }
  }
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
  

const sRed = document.getElementById('red');
const sGreen = document.getElementById('green');
const sBlue = document.getElementById('blue');

sRed.addEventListener('input', function(){
    const r = sRed.value;
    document.body.style.background = `rgb(${r}, 100, 100)`;
});

sGreen.addEventListener('input', function(){
    const r = sRed.value;
    const g = sGreen.value;
    document.body.style.background = `rgb(${r}, ${g}, 100)`;
});

sBlue.addEventListener('input', function(){
    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value;
    document.body.style.background = `rgb(${r}, ${g}, ${b})`;
});