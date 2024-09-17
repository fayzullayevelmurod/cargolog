'use strict';
AOS.init();
document.addEventListener('DOMContentLoaded', function () {
  var parallax = new Parallax(document.querySelector('.parallax-window'));
});

document.querySelectorAll('.accordion .acc-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    const parent = this.parentNode;
    const body = parent.querySelector('.acc_body');

    // Boshqa ochiq accordionlarni yopish
    document.querySelectorAll('.accordion').forEach(item => {
      if (item !== parent) {
        item.classList.remove('active-block');
        item.querySelector('.acc_body').style.maxHeight = null;
      }
    });

    // Accordionni ochish/yopish
    if (parent.classList.contains('active-block')) {
      parent.classList.remove('active-block');
      body.style.maxHeight = null;
    } else {
      parent.classList.add('active-block');
      body.style.maxHeight = body.scrollHeight + 'px';
    }
  });
});

// Accordion Box end

// header media
const hamburger = document.querySelector('.hamburger-btn');
const nav = document.querySelector('.header .nav');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
  overlay.classList.toggle('show');
  nav.classList.toggle('show');
  hamburger.classList.toggle('active');
  document.body.classList.toggle('overflow-hidden');
});
overlay.addEventListener('click', () => {
  overlay.classList.toggle('show');
  nav.classList.toggle('show');
  hamburger.classList.toggle('active');
  document.body.classList.toggle('overflow-hidden');
})
