// メール送信機能（お問い合わせ）
function sendMail() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  var subject = "お問い合わせ";
  var body = "お名前: " + name + "%0A" + 
             "メールアドレス: " + email + "%0A" + 
             "メッセージ: " + message;
  
  window.location.href = "mailto:info@maux.jp?subject=" + subject + "&body=" + body;
}

// メール送信機能（メンバー募集）
function createMail() {
  // フォームのデータを取得
  const name = document.getElementById('recruit-name').value;
  const age = document.getElementById('recruit-age').value;
  const email = document.getElementById('recruit-email').value;
  const phone = document.getElementById('recruit-phone').value;
  const address = document.getElementById('recruit-address').value;
  const motivation = document.getElementById('recruit-motivation').value;
  const height = document.getElementById('recruit-height').value;
  const weight = document.getElementById('recruit-weight').value;
  const sns = document.getElementById('recruit-sns').value;
  const video = document.getElementById('recruit-video').value;

  // メール本文を作成
  const mailBody = `
    お名前: ${name}\n
    年齢: ${age}\n
    メールアドレス: ${email}\n
    携帯番号: ${phone}\n
    住所: ${address}\n
    志望動機: ${motivation}\n
    身長: ${height}\n
    体重: ${weight}\n
    SNSのURL: ${sns}\n
    動画リンク: ${video}\n
    \n
    ※お手数ですが、以下の写真3枚と動画（リンクまたはファイル）をメールに添付して送信してください。\n
    - 全身写真\n
    - 顔写真（加工済み）\n
    - 顔写真（無加工）\n
    - 歌っている様子やダンス能力が分かる動画(任意)\n
  `;

  // メーラーでメールを作成するリンクを生成
  const mailtoLink = `mailto:nfo@maux.jp?subject=新規応募&body=${encodeURIComponent(mailBody)}`;
  window.location.href = mailtoLink;

  return false; // フォームのデフォルトの送信を防ぐ
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

document.addEventListener('DOMContentLoaded', () => {
  const currentLocation = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href').split("/").pop();
    if (linkPath === currentLocation) {
      link.classList.add('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // 現在のページのパスを取得してactiveクラスを設定
  const currentPath = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href').split('/').pop();
    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });

  // スクロールボタンの動作を設定
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollToTopBtn.classList.add('show'); // ボタン表示
    } else {
      scrollToTopBtn.classList.remove('show'); // ボタン非表示
    }
  };

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
