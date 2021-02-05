const navigation = document.querySelector('nav');

window.addEventListener('scroll', () => {

    if(window.scrollY > 930){
         navigation.classList.add('anim-nav');
     } else {
         navigation.classList.remove('anim-nav');
     }

 })

// Anim click

 window.addEventListener('click', (e) => {
      console.log(e);

     const rond = document.createElement('div');
     rond.className = 'clickAnim';
     rond.style.top = `${e.pageY - 50}px`;
     rond.style.left = `${e.pageX - 50}px`;
     document.body.appendChild(rond);

     setTimeout(() => {
         rond.remove();
     }, 1500)
 })


// Animation input

const validationInput = document.querySelector('input');

validationInput.addEventListener('input', (e) => {

    if(e.target.value.length >= 3) {
        validationInput.style.borderColor = "green";
    } else {
        validationInput.style.borderColor = "red";
    }

})