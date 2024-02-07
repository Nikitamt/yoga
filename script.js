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


  // Timer
  const timer = document.getElementById('timer'),
        deadline = '2024-02-28';
  
  
  function returnRemainingTime(time) {
    const t = Date.parse(time) - Date.parse(new Date())
    const total = (t > 0) ? t : 0,
          seconds = Math.floor(total/1000) % 60,
          minutes = Math.floor(total/1000/60) % 60,
          hours = Math.floor(total/1000/60/60);
    return {
      'total' : total,
      'seconds' : seconds,
      'minutes' : minutes,
      'hours' : hours
    }
  }

  function showRemainingTime(id, endtime) {
    let seconds = id.querySelector('.seconds'),
        minutes = id.querySelector('.minutes'),
        hours = id.querySelector('.hours'),
        timerInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let remainingTime = returnRemainingTime(endtime);
      seconds.textContent = (remainingTime.seconds > 0) ? remainingTime.seconds : '00';
      minutes.textContent = (remainingTime.minutes > 0) ? remainingTime.minutes : '00';;
      hours.textContent = (remainingTime.hours > 0) ? remainingTime.hours : '00';;

      if (remainingTime <= 0) {
        clearInterval(timerInterval);
      }
    }
  }

  showRemainingTime(timer, deadline);


  // Modal

  let overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close'),
      more = document.querySelector('.more');

  more.addEventListener('click', function() {
    this.classList.add('more-splash');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  })

  close.addEventListener('click', function() {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  })

})
