var swiper = new Swiper('.swiper-container', {
  // Default parameters   
  slidesPerView: 3,
  spaceBetween: 40,
  // My settings
  effect: 'coverflow',
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 1000,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Responsive breakpoints   
  breakpoints: {

    // when window width is <= 320px     
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is <= 480px     
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is <= 800px     
    800: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})




var $messages = $('.messages-content'),
  d, h, m,
  i = 0;

$(window).load(function () {
  $messages.mCustomScrollbar();
  setTimeout(function () {
    fakeMessage();
  }, 100);
});


function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate() {
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
    $('<div class="checkmark-sent-delivered">&check;</div>').appendTo($('.message:last'));
    $('<div class="checkmark-read">&check;</div>').appendTo($('.message:last'));
  }
}

function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  $('.message-input').val(null);
  updateScrollbar();
  setTimeout(function () {
    fakeMessage();
  }, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function () {
  insertMessage();
});

$(window).on('keydown', function (e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})

var Fake = [
  'Hey! 我叫Jane，你呢?',
  '很高興認識你',
  '你今天好嗎?',
  '我今天有點累...',
  '一言難盡...所以你是做哪一行的啊?',
  '聽起來好厲害🤘',
  '我第一次用這個。覺得TWINKO還滿棒的。',
  '不知道為什麼，覺得你人還不錯',
  '是喔。為什麼你這樣想呢?',
  '不太懂欸...😅',
  'Anyways，我要去洗澡了',
  '很開心跟你聊天💗',
  '下次有機會碰到再聊囉~',
  '881',
  ':)'
]

function fakeMessage() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="img/chat/avatar-girl.png" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();

  setTimeout(function () {
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src="img/chat/avatar-girl.png" /></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
    i++;
  }, 1000 + (Math.random() * 20) * 100);

}

$('.button').click(function () {
  $('.chat-menu .items span').toggleClass('active');
  $('.chat-menu .button').toggleClass('active');
});


// Closing and showing the chat window
// function show(target) {
//   document.getElementById(target).style.display = 'block';
//   document.getElementById("letter").style.display = 'none';
// };

// function hide(target) {
//   document.getElementById(target).style.display = 'none';
//   document.getElementById("letter").style.display = 'block';
// };

// $("#hide-chat-button").click(function () {
//   function complete() {
//     $("#mychat").fadeOut(1600, "linear", complete);
//     $("#letter").fadeIn(1600, complete);
//   });

// $("#show-chat-button").click(function () {
//   // $("#mychat").show();
//   $("#mychat").fadeIn(1600, complete);
//   $("#letter").fadeOut(1600, "linear", complete);
// });


// Close chat
function goBack() {
  window.history.back()
}

//Confirm Closing
function confirmQuit() {
  if (confirm("確定要離開對話? \n按OK離開。\n按CANCEL取消。")) {
    redirect();
  } else {
  }
}

//
function redirect() {
  location.replace("chat.html")
}