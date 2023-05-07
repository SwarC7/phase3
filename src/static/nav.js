const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = "#ad1110";
  });

  link.addEventListener('mouseout', () => {
    link.style.color = "#ffffff";
  });
});


// const navhover = document.querySelectorAll('nav ul li a');

// navhover.forEach(link => {
//   const topLine = link.querySelector('.top');
//   const bottomLine = link.querySelector('.bottom');
  
//   link.addEventListener('mouseenter', () => {
//     topLine.style.display = 'block';
//     bottomLine.style.display = 'block';
//   });

//   link.addEventListener('mouseleave', () => {
//     topLine.style.display = 'none';
//     bottomLine.style.display = 'none';
//   });
// });



