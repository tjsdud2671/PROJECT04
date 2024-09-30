function btn_pause() {
  var click = document.getElementById('pause');
  if (click.src.match('24')) {
    click.src = './images/icons8-재생-버튼-50.png';
    document.getElementById('video_obj').pause();
  } else {
    click.src = './images/icons8-중지-24.png';
    document.getElementById('video_obj').play();
  }
}

function change() {
  let isRotated = false;

  var card = document.getElementById('card1');
  var cardOverset = document.getElementById('card1-overset');
  var cardBtn = document.getElementById('card-btn');
  var cardBtnOverset = document.getElementById('card-btn-overset');

  if (isRotated) {
    // 원상복구
    cardBtn.style.transform = 'rotate(0deg)';
  } else {
    // 45도 회전
    cardBtn.style.transform = 'rotate(45deg)';
  }

  // 회전 애니메이션 적용
  cardBtn.style.transition = 'transform 1s ease'; // 0.5초 동안 부드럽게 회전

  // 상태 토글
  isRotated = !isRotated;

  card.style.display = 'none';
  cardOverset.style.display = 'block';
  setTimeout(function () {
    cardBtnOverset.style.transform = 'rotate(45deg)';
  });
}
document.getElementById('card-btn').addEventListener('click', change);

function cardReturn() {
  var cardBtnreturn = document.getElementById('card-btn-overset');
  var card = document.getElementById('card1');
  var cardOverset = document.getElementById('card1-overset');
  var cardBtn = document.getElementById('card-btn');

  card.style.display = 'block';
  cardOverset.style.display = 'none';

  setTimeout(function () {
    cardBtn.style.transform = 'rotate(-90deg)';
  });
}
document
  .getElementById('card-btn-overset')
  .addEventListener('click', cardReturn);

$(document).ready(function () {
  $('#flip').click(function () {
    $('#panel').slideToggle('slow');
  });
});

function question() {
  var click = document.getElementById('question');
  if (click.src.match('748063')) {
    click.src = './images/free-icon-up-arrow-3385656.png';
  } else {
    click.src = './images/free-icon-down-arrow-748063.png';
  }
}
