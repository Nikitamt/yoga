window.addEventListener('DOMContentLoaded', function() {
  'use strict'

  let info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent'),
      tabs = document.querySelectorAll('.info-header-tab');

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show')
      tabContent[i].classList.add('hide')
    }
  }

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  info.addEventListener('click', (event) => {
    let target = event.target;

    if (target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tabContent.length; i++) {
        if (target == tabs[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  })

  
  hideTabContent(1);
})