// Smooth scroll to Explore section
document.querySelector(".btn").addEventListener("click", () => {
  document.querySelector("#explore").scrollIntoView({
    behavior: "smooth"
  });
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0,0,0,0.8)";
  } else {
    navbar.style.background = "rgba(0,0,0,0.5)";
  }
});
const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg"
];

let index = 0;
const slide = document.querySelector(".slide");

// First image
slide.style.backgroundImage = `url(${images[index]})`;

function changeSlide() {
  index = (index + 1) % images.length;

  // Add fade effect
  slide.classList.add("fade");

  // Change image
  slide.style.backgroundImage = `url(${images[index]})`;

  // Remove fade class after animation
  setTimeout(() => {
    slide.classList.remove("fade");
  }, 1500);
}

// Change every 5 seconds
setInterval(changeSlide, 5000);
const pujaDate = new Date("November 16, 2026 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const gap = pujaDate - now;
  
  if (gap <= 0) {
    // 🔥 STOP COUNTDOWN
    document.getElementById("days").innerText = 0;
    document.getElementById("hours").innerText = 0;
    document.getElementById("minutes").innerText = 0;
    document.getElementById("seconds").innerText = 0;
    
    document.querySelector(".countdown-title").innerText = "🎉 পূজা শুরু হয়ে গেছে!";
    return;
  }
  
  const days = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((gap / (1000 * 60)) % 60);
  const seconds = Math.floor((gap / 1000) % 60);
  
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);

function playVideo(src, element) {
  const video = document.getElementById("mainVideo");

  video.src = src;

  video.load();   // 🔥 important
  video.play();   // auto play

  document.querySelectorAll(".video-item").forEach(item => {
    item.classList.remove("active");
  });

  element.classList.add("active");
}
function playVideo(src, element) {
  const video = document.getElementById("mainVideo");

  video.src = src;
  video.load();   // important
  video.play();   // autoplay

  // remove active
  document.querySelectorAll(".video-item").forEach(item => {
    item.classList.remove("active");
  });

  // add active
  element.classList.add("active");
}

function setAmount(value) {
  document.getElementById("amount").value = value;
}

document.getElementById("upiLink").addEventListener("click", function () {
  const amount = document.getElementById("amount").value;
  const name = document.getElementById("name").value;

  if (!amount) {
    alert("Enter amount!");
    return;
  }

  const upiID = "yourupi@okaxis";  // 🔥 change this
  const upiURL = `upi://pay?pa=${upiID}&pn=Jagadhatri%20Puja&am=${amount}&cu=INR&tn=Donation%20from%20${name}`;

  window.location.href = upiURL;
});
function setAmount(value) {
  document.getElementById("amount").value = value;
}

document.getElementById("upiLink").addEventListener("click", function () {
  const amount = document.getElementById("amount").value;
  const name = document.getElementById("name").value;

  if (!amount) {
    alert("Enter amount!");
    return;
  }
})
const marker = new google.maps.Marker({
  position: location,
  map: map,
  title: "Jagadhatri Puja Committee 🎉",

  icon: {
    url: "images/icon.png",  // 🔥 your icon path
    scaledSize: new google.maps.Size(60, 60) // size control
  },
  animation: google.maps.Animation.DROP
})
function scrollGallery(direction) {
  const container = document.getElementById("galleryGrid");

  const scrollAmount = 200;

  container.scrollLeft += direction * scrollAmount;
}
const popupBtn = document.getElementById("updatePopup");

// When countdown ends
if (distance <= 0 && !liveStarted) {

  liveStarted = true;
  clearInterval(timer);

  // Show popup button
  popupBtn.classList.add("show");
}
function goToUpdates() {
  window.location.href = "updates.html";
}