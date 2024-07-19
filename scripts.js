// メール送信機能（お問い合わせ）
function sendMail() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  var subject = "お問い合わせ";
  var body = "お名前: " + name + "%0A" + 
             "メールアドレス: " + email + "%0A" + 
             "メッセージ: " + message;
  
  window.location.href = "mailto:your_email@example.com?subject=" + subject + "&body=" + body;
}

// メール送信機能（メンバー募集）
function sendRecruitMail() {
  var name = document.getElementById('recruit-name').value;
  var email = document.getElementById('recruit-email').value;
  var message = document.getElementById('recruit-message').value;
  var subject = "メンバー募集応募";
  var body = "お名前: " + name + "%0A" + 
             "メールアドレス: " + email + "%0A" + 
             "メッセージ: " + message;
  
  window.location.href = "mailto:your_email@example.com?subject=" + subject + "&body=" + body;
}

// スライドショー機能
let slideIndex = 0;
const slides = document.querySelectorAll('.slides');

document.addEventListener("DOMContentLoaded", function() {
  slides.forEach((slide, index) => {
    slide.style.opacity = '0';
  });
  slides[0].style.opacity = '1';
  showSlides();
});

function showSlides() {
  slides.forEach((slide, index) => {
    slide.style.transition = "opacity 1.5s";
    slide.style.opacity = '0';
  });

  slideIndex++;
  if (slideIndex >= slides.length) slideIndex = 0;

  slides[slideIndex].style.opacity = '1';

  setTimeout(showSlides, 6000); // 6秒ごとに次の画像に切り替え
}
