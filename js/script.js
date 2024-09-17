'use strict';
AOS.init();
document.addEventListener('DOMContentLoaded', function () {
  var parallax = new Parallax(document.querySelector('.parallax-window'));
});
// document.addEventListener('DOMContentLoaded', function () {
//   const accordionBoxes = document.querySelectorAll('.accordion_box');

//   if (accordionBoxes.length) {
//     accordionBoxes.forEach((accordionBox) => {
//       const allAccordions = accordionBox.querySelectorAll('.accordion');

//       // Default holda birinchi accordionni ochish
//       const firstAccordion = allAccordions[0];
//       const firstAccBody = firstAccordion.querySelector('.acc_body');
//       firstAccBody.style.display = 'block'; // Birinchi accordionni ochish
//       firstAccordion.querySelector('.acc-btn').classList.add('active'); // Tugmaga 'active' klassini qo'shish
//       firstAccordion.classList.add('active-block');

//       // Accordionni click qilish orqali boshqarish
//       accordionBox.addEventListener('click', function (event) {
//         const accBtn = event.target.closest('.acc-btn');
//         if (!accBtn) return;

//         const targetAccordion = accBtn.closest('.accordion');
//         const accBody = accBtn.nextElementSibling;

//         if (accBody.style.display === 'block') {
//           // Agar accordion ochiq bo'lsa, yopish
//           accBtn.classList.remove('active');
//           accBody.style.display = 'none';
//           targetAccordion.classList.remove('active-block');
//         } else {
//           // Barcha accordionlarni yopish
//           allAccordions.forEach((accordion) => {
//             accordion.querySelector('.acc-btn').classList.remove('active');
//             accordion.querySelector('.acc_body').style.display = 'none';
//             accordion.classList.remove('active-block');
//           });

//           // Tanlangan accordionni ochish
//           accBtn.classList.add('active');
//           accBody.style.display = 'block';
//           targetAccordion.classList.add('active-block');
//         }
//       });
//     });
//   }
// });
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