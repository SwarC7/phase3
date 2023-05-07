function submitReview() {

    var userName = document.getElementById("user-name").value;
    var rating = document.querySelector('input[name="rating"]:checked').value;
    var review = document.getElementById("review").value;
    
    var reviewObj = {
    
      userName: userName,
      rating: rating,
      review: review
    };
    
    addReviewToTable(reviewObj);
  }
  
  function addReviewToTable(reviewObj) {
    var table = document.getElementById("review-table");
    var row = table.insertRow(-1);
    
    var userCell = row.insertCell(0);
    var ratingCell = row.insertCell(1);
    var reviewCell = row.insertCell(2);
    
 
    userCell.innerHTML = reviewObj.userName;
    ratingCell.innerHTML = reviewObj.rating;
    reviewCell.innerHTML = reviewObj.review;

    document.getElementById("user-name").value = "";
    document.querySelector('input[name="rating"]:checked').checked = false;
    document.getElementById("review").value = "";
  }

 
var countDownDate = new Date("June 30, 2023 23:59:59").getTime();


var x = setInterval(function() {

  
  var now = new Date().getTime();

  
  var distance = countDownDate - now;

  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

const img = document.querySelector('.fav_artist .image-item img');

img.addEventListener('mouseenter', () => {
  img.style.transform = 'scale(1.02)';
});

img.addEventListener('mouseleave', () => {
  img.style.transform = 'scale(1)';
});


const text = "Marshall Bruce Mathers III ( 17. Oktober 1972), beruflich bekannt als Eminem (/ˌɛmɪˈnɛm/; oft als EMINƎM stilisiert), ist ein US-amerikanischer Rapper, Songwriter und Plattenproduzent. Ihm wird die Popularisierung des Hip-Hop in Mittelamerika zugeschrieben und er wird von der Kritik als einer der größten Rapper aller Zeiten gefeiert. Eminems weltweiter Erfolg und seine gefeierten Werke gelten weithin als Überwindung der Rassenbarrieren für die Akzeptanz weißer Rapper in der Popmusik. Während viele seiner grenzüberschreitenden Arbeiten in den späten 1990er und frühen 2000er Jahren ihn weithin kontrovers machten, wurde er zu einer Repräsentation der populären Angst der amerikanischen Unterschicht und wurde als Einfluss für viele Künstler verschiedener Genres angeführt.";

const container = document.querySelector(".description .bio");
let index = 0;

setInterval(() => {
  container.textContent = text.slice(0, index);
  index++;
}, 25);








const text1 = "This is the text that will appear as if typed.";
const delay =   100; // delay in milliseconds between each character

const textContainer = document.getElementById('text-container');
const typedText = document.getElementById('typed-text');

textContainer.addEventListener('scroll', () => {
  const scrolled = textContainer.scrollTop; // get the amount of scrolled pixels
  const textLength = text1.length;
  const visibleLength = Math.round(scrolled / 10); // adjust the factor to control the speed of typing
  
  typedText.textContent = text1.substring(0, visibleLength);
});
