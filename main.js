function s1() {
  let el = document.getElementById('s1');
  el.style.display = "block";
  let op = document.getElementById('s2');
  op.style.display = "none";
  let po = document.getElementById('s3');
  po.style.display = "none";
  let pp = document.getElementById('s4');
  pp.style.display = "none";
  let oo = document.getElementById('s5');
  oo.style.display = "none";
  let hide = document.getElementById('none');
  hide.style.display = "none";
  let button = document.getElementById('visible');
  button.style.display = "block";
  let watch = document.getElementById('watch');
  watch.style.display = "block";
  let clear = document.querySelector('iframe');
  clear.setAttribute('src','');
}

function s2() {
  let el = document.getElementById('s2');
  el.style.display = "block";
  let op = document.getElementById('s1');
  op.style.display = "none";
  let po = document.getElementById('s3');
  po.style.display = "none";
  let pp = document.getElementById('s4');
  pp.style.display = "none";
  let oo = document.getElementById('s5');
  oo.style.display = "none";
  let hide = document.getElementById('none');
  hide.style.display = "none";
  let button = document.getElementById('visible');
  button.style.display = "block";
  let watch = document.getElementById('watch');
  watch.style.display = "block";
  let clear = document.querySelector('iframe');
  clear.setAttribute('src','');
}

function s3() {
  let el = document.getElementById('s3');
  el.style.display = "block";
  let op = document.getElementById('s1');
  op.style.display = "none";
  let po = document.getElementById('s2');
  po.style.display = "none";
  let pp = document.getElementById('s4');
  pp.style.display = "none";
  let oo = document.getElementById('s5');
  oo.style.display = "none";
  let hide = document.getElementById('none');
  hide.style.display = "none";
  let button = document.getElementById('visible');
  button.style.display = "block";
  let watch = document.getElementById('watch');
  watch.style.display = "block";
  let clear = document.querySelector('iframe');
  clear.setAttribute('src', '');
}

function s4() {
  let el = document.getElementById('s4');
  el.style.display = "block";
  let op = document.getElementById('s1');
  op.style.display = "none";
  let po = document.getElementById('s2');
  po.style.display = "none";
  let pp = document.getElementById('s3');
  pp.style.display = "none";
  let oo = document.getElementById('s5');
  oo.style.display = "none";
  let hide = document.getElementById('none');
  hide.style.display = "none";
  let button = document.getElementById('visible');
  button.style.display = "block";
  let watch = document.getElementById('watch');
  watch.style.display = "block";
  let clear = document.querySelector('iframe');
  clear.setAttribute('src', '');
}

function s5() {
  let el = document.getElementById('s5');
  el.style.display = "block";
  let op = document.getElementById('s1');
  op.style.display = "none";
  let po = document.getElementById('s2');
  po.style.display = "none";
  let pp = document.getElementById('s4');
  pp.style.display = "none";
  let oo = document.getElementById('s3');
  oo.style.display = "none";
  let hide = document.getElementById('none');
  hide.style.display = "none";
  let button = document.getElementById('visible');
  button.style.display = "block";
  let watch = document.getElementById('watch');
  watch.style.display = "block";
  let clear = document.querySelector('iframe');
  clear.setAttribute('src', '');
}

function display() {
  let hide = document.getElementById('none');
  hide.style.display = "block";
  let again = document.getElementById('visible');
  again.style.display = "none";
  let el = document.getElementById('s1');
  el.style.display = "none";
  let op = document.getElementById('s2');
  op.style.display = "none";
  let po = document.getElementById('s3');
  po.style.display = "none";
  let pp = document.getElementById('s4');
  pp.style.display = "none";
  let oo = document.getElementById('s5');
  oo.style.display = "none";
  let watch = document.getElementById('watch');
  watch.style.display = "none";
}


var death = "https://v6.4animu.me/Death-Note/Death-Note-Episode-";

function deathnote(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = 'Death Note Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", death + `0${i+1}-1080p.mp4`);
      else
        document.querySelector("iframe").setAttribute("src", death + `${i+1}-1080p.mp4`);
    }
  }
}

let drStone = 'https://mountainoservo0002.animecdn.com/Dr.-Stone/Dr.-Stone-Episode-';

function stone1(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = 'Dr Stone Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", drStone + `0${i+1}-1080p.mp4`);
      else
        document.querySelector("iframe").setAttribute("src", drStone + `${i+1}-1080p.mp4`);
    }
  }
}
//season2stone
var drStone2 = 'https://mountainoservo0002.animecdn.com/Dr.-Stone-S2/Dr.-Stone-S2-Episode-';

function stone2(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter2').innerHTML = 'Dr Stone Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", drStone2 + `0${i+1}-1080p.mp4`);
      else
        document.querySelector("iframe").setAttribute("src", drStone2 + `${i+1}-1080p.mp4`);
    }
  }
}

//another
var another = 'https://v6.4animu.me/Another/Another-Episode-';

function another1(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = 'Another Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", another + `0${i+1}-1080p.mp4`);
      else
        document.querySelector("iframe").setAttribute("src", another + `${i+1}-1080p.mp4`);
    }
  }
}
//attack on titan
var aot1 = 'https://v6.4animu.me/Shingeki-no-Kyojin/Shingeki-no-Kyojin-Episode-';

function aot_1(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = 'Attack on Titan Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", aot1 + `0${i+1}-1080p.mp4`);
      else
        document.querySelector("iframe").setAttribute("src", aot1 + `${i+1}-1080p.mp4`);
    }
  }
}
var aot2 = 'https://v6.4animu.me/Shingeki-no-Kyojin-Season-2/Shingeki-no-Kyojin-Season-2-Episode-';

function aot_2(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter2').innerHTML = 'Attack on Titan Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", aot2 + `0${i+1}-1080p.mp4`);
      else
        document.querySelector("iframe").setAttribute("src", aot2 + `${i+1}-1080p.mp4`);
    }
  }
}
var aot3 = 'https://v6.4animu.me/Shingeki-no-Kyojin-S3/Shingeki-no-Kyojin-S3-Episode-';

function aot_3(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter3').innerHTML = 'Attack on Titan Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", aot3 + `0${i+1}-1080p.mp4`);
      else
        document.querySelector("iframe").setAttribute("src", aot3 + `${i+1}-1080p.mp4`);
    }
  }
}
var aot5 = 'https://v6.4animu.me/Shingeki-no-Kyojin-Season-3-Part-2/Shingeki-no-Kyojin-Season-3-Part-2-Episode-';

function aot_5(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", aot5 + `0${i+1}-1080p.mp4`);
      else
        document.querySelector("iframe").setAttribute("src", aot5 + `${i+1}-1080p.mp4`);
    }
  }
}
var aot4 = 'https://mountainoservo0002.animecdn.com/Shingeki-no-Kyojin-The-Final-Season/Shingeki-no-Kyojin-The-Final-Season-Episode-';

function aot_4(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter4').innerHTML = 'Attack on Titan Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", aot4 + `0${i+1}-1080p.mp4`);
      else
        document.querySelector("iframe").setAttribute("src", aot4 + `${i+1}-1080p.mp4`);
    }
  }
}

//Demon slayer
var demon = 'https://mountainoservo0002.animecdn.com/Kimetsu-no-Yaiba/Kimetsu-no-Yaiba-Episode-';

function demon1(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = 'Demon Slayer Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", demon + `0${i+1}-1080p.mp4`);
      else
        document.querySelector("iframe").setAttribute("src", demon + `${i+1}-1080p.mp4`);
    }
  }
}
// Assassination Classroom
var classroom = 'https://v6.4animu.me/Ansatsu-Kyoushitsu/Ansatsu-Kyoushitsu-Episode-';

function classroom_1(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = 'Assassination Classroom Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", classroom + `0${i+1}-1080p.mp4`);
      else
        document.querySelector("iframe").setAttribute("src", classroom + `${i+1}-1080p.mp4`);
    }
  }
}
//-
var classroom2 = 'https://v6.4animu.me/Ansatsu-Kyoushitsu-2nd-Season/Ansatsu-Kyoushitsu-2nd-Season-Episode-';

function classroom_2(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter2').innerHTML = 'Assassination Classroom Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", classroom2 + `0${i+1}-1080p.mp4`);
      else
        document.querySelector("iframe").setAttribute("src", classroom2 + `${i+1}-1080p.mp4`);
    }
  }
}
// Erased
var erased = 'https://v6.4animu.me/Boku-dake-ga-Inai-Machi/Boku-dake-ga-Inai-Machi-Episode-';

function erased_1(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = 'Erased Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", erased + `0${i+1}-1080p.mp4`);
      else
        document.querySelector("iframe").setAttribute("src", erased + `${i+1}-1080p.mp4`);
    }
  }
}
// Jujutsu kaisen
var kaisen = 'https://mountainoservo0002.animecdn.com/Jujutsu-Kaisen/Jujutsu-Kaisen-Episode-';

function kaisen_1(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = 'Jujutsu Kaisen Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", kaisen + `0${i+1}-1080p.mp4`);
      else
        document.querySelector("iframe").setAttribute("src", kaisen + `${i+1}-1080p.mp4`);
    }
  }
}
// promise neverland
var promiseNeverland = 'https://v6.4animu.me/Yakusoku-no-Neverland/Yakusoku-no-Neverland-Episode-';

function promise_1(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = 'Promise Neverland Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", promiseNeverland + `0${i+1}-1080p.mp4`);
      else
        document.querySelector("iframe").setAttribute("src", promiseNeverland + `${i+1}-1080p.mp4`);
    }
  }
}

var promiseNeverland2 = 'https://mountainoservo0002.animecdn.com/Yakusoku-no-Neverland-S2/Yakusoku-no-Neverland-S2-Episode-';

function promise_2(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter2').innerHTML = 'Promise Neverland Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", promiseNeverland2 + `0${i+1}-1080p.mp4`);
      else
        document.querySelector("iframe").setAttribute("src", promiseNeverland2 + `${i+1}-1080p.mp4`);
    }
  }
}
//my hero academia
var mha1 = 'https://v6.4animu.me/Boku-no-Hero-Academia/Boku-no-Hero-Academia-Episode-';

function mha_1(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = 'My Hero Academia Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", mha1 + `0${i+1}-1080p.mp4`);
      else
        document.querySelector("iframe").setAttribute("src", mha1 + `${i+1}-1080p.mp4`);
    }
  }
}

var mha2 = 'https://v6.4animu.me/Boku-no-Hero-Academia-2nd-Season/Boku-no-Hero-Academia-S2-Episode-';

function mha_2(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter2').innerHTML = 'My Hero Academia Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", mha2 + `0${i+1}-1080p.mp4`);
      else
        document.querySelector("iframe").setAttribute("src", mha2 + `${i+1}-1080p.mp4`);
    }
  }
}

var mha3 = 'https://v6.4animu.me/Boku-no-Hero-Academia-3rd-Season/Boku-no-Hero-Academia-3rd-Season-Episode-';

function mha_3(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter3').innerHTML = 'My Hero Academia Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", mha3 + `0${i+1}-1080p.mp4`);
      else
        document.querySelector("iframe").setAttribute("src", mha3 + `${i+1}-1080p.mp4`);
    }
  }
}

var mha4 = 'https://mountainoservo0002.animecdn.com/Boku-no-Hero-Academia-4th-Season/Boku-no-Hero-Academia-4th-Season-Episode-';

function mha_4(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter4').innerHTML = 'My Hero Academia Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", mha4 + `0${i+1}-1080p.mp4`);
      else
        document.querySelector("iframe").setAttribute("src", mha4 + `${i+1}-1080p.mp4`);
    }
  }
}

var mha5 = 'https://mountainoservo0002.animecdn.com/Boku-no-Hero-Academia-5th-Season/Boku-no-Hero-Academia-5th-Season-Episode-';

function mha_5(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter5').innerHTML = 'My Hero Academia  Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", mha5 + `0${i+1}-1080p.mp4`);
      else
        document.querySelector("iframe").setAttribute("src", mha5 + `${i+1}-1080p.mp4`);
    }
  }
}
// https://mountainoservo0002.animecdn.com/Black-Clover/Black-Clover-Episode-
var clover = 'https://mountainoservo0002.animecdn.com/Black-Clover/Black-Clover-Episode-';

function clover_1(e) {
  let buttons = e.parentNode.getElementsByTagName("a");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = 'Black Clover Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", clover + `${i+1}-1080p.mp4`);
      else
        document.querySelector("iframe").setAttribute("src", clover + `${i+1}-1080p.mp4`);
    }
  }
}

// naruto
var naruto = 'https://v5.4animu.me/Naruto/Naruto-Episode-';

function naruto_1(e) {
  let buttons = e.parentNode.getElementsByTagName("a");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = 'Naruto Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", naruto + `${i+1}-1080p.mp4`);
      else
        document.querySelector("iframe").setAttribute("src", naruto + `${i+1}-1080p.mp4`);
    }
  }
}
//https://v5.4animu.me/Naruto-Shippuden/Naruto-Shippuden-Episode-

var narutoship = 'https://v5.4animu.me/Naruto-Shippuden/Naruto-Shippuden-Episode-';

function narutoship_1(e) {
  let buttons = e.parentNode.getElementsByTagName("a");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = 'Naruto Shippuden Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", narutoship + `${i+1}-1080p.mp4`);
      else
        document.querySelector("iframe").setAttribute("src", narutoship + `${i+1}-1080p.mp4`);
    }
  }
}

//one piece
var onepiece = 'https://v3.4animu.me/One-Piece/One-Piece-Episode-';

function piece_1(e) {
  let buttons = e.parentNode.getElementsByTagName("a");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = 'One Piece Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", onepiece + `0${i+1}-1080p.mp4`);
      else
        document.querySelector("iframe").setAttribute("src", onepiece + `${i+1}-1080p.mp4`);
    }
  }
}
// hunter hunter
var hunter = 'https://v5.4animu.me/Hunter-x-Hunter/Hunter-x-Hunter-Episode-';

function hunter_1(e) {
  let buttons = e.parentNode.getElementsByTagName("a");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = 'HunterxHunter Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", hunter + `${i+1}-1080p.mp4`);
      else
        document.querySelector("iframe").setAttribute("src", hunter + `${i+1}-1080p.mp4`);
    }
  }
}
// Great Teacher Onizuka
var greatTeacherOnizuka = 'https://v1.4animu.me/Great-Teacher-Onizuka/GTO-Great-Teacher-Onizuka-Episode-';

function greatteacher_1(e) {
  let buttons = e.parentNode.getElementsByTagName("a");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = 'Great Teacher Onizuka Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", greatTeacherOnizuka + `${i+1}-1080p.mp4`);
      else
        document.querySelector("iframe").setAttribute("src", greatTeacherOnizuka + `${i+1}-1080p.mp4`);
    }
  }
}




var name = '';

function classroom_2(e) {
  let buttons = e.parentNode.getElementsByTagName("a");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = 'Playing Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", +`0${i+1}-1080p.mp4`);
      else
        document.querySelector("iframe").setAttribute("src", +`${i+1}-1080p.mp4`);
    }
  }
}