export function animate(){
    window.addEventListener('scroll', function() {
        const section = document.querySelector('.section');
        const textElements = section.querySelectorAll('span');
        const sectionPosition = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
      
        if (sectionPosition < windowHeight * 0.8) {
          textElements.forEach(element => {
            element.classList.add('animate-slide-in-left', 'animate-slide-in-right');
          });
        }
      });
}