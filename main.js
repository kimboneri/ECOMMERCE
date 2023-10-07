window.addEventListener('scroll', function() {
    var parallax = document.querySelector('.parallax');
    var scrollPosition = window.scrollY;
   
    parallax.style.backgroundPositionY = scrollPosition * -0.10 + 'px';
    
  });


  