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
  


document.body.addEventListener('mousemove', function(event){
    const mouseX = Math.round((event.clientX / window.innerWidth) * 255);
    const mouseY = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.background = `rgb(${mouseX}, ${mouseY}, 100)`;
})