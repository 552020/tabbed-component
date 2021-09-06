'use strict';

// Selecting the relevant elements
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// Adding Event handlers

// Bad practice Jonas says cause it scales bad.
// tabs.forEach(tab =>
//   tab.addEventListener('click', () => {
//     console.log('TAB');
//   })
// );

// A 'better version' with event delegation
// 1. We attach the event-handler to the common parent of the elements.

tabsContainer.addEventListener('click', function (e) {
  // matching strategy + problem of the span element inside the button
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return; // guard clause
  // clicked?.classList.add('operations__tab--active'); // an user suggested

  tabs.forEach(el => el.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  document;
  tabsContent.forEach(el => el.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
