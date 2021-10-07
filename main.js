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
  clear.setAttribute('src', '');
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
  clear.setAttribute('src', '');
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


var death = "https://streamfreak.cc/player/death-note/";

function deathnote(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = ' Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", death + `${i+1}`);
      else
        document.querySelector("iframe").setAttribute("src", death + `${i+1}`);
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
      let counter = document.getElementById('counter').innerHTML = ' Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", drStone + `0${i+1}`);
      else
        document.querySelector("iframe").setAttribute("src", drStone + `${i+1}`);
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
      let counter = document.getElementById('counter2').innerHTML = ' Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", drStone2 + `0${i+1}`);
      else
        document.querySelector("iframe").setAttribute("src", drStone2 + `${i+1}`);
    }
  }
}

//another
var another = 'https://streamfreak.cc/player/another-anime/';

function another1(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = ' Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", another + `${i+1}`);
      else
        document.querySelector("iframe").setAttribute("src", another + `${i+1}`);
    }
  }
}
//attack on titan
var aot1 = 'https://streamfreak.cc/player/shingeki-no-kyojin/';

function aot_1(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = ' Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", aot1 + `${i+1}`);
      else
        document.querySelector("iframe").setAttribute("src", aot1 + `${i+1}`);
    }
  }
}
var aot2 = 'https://streamfreak.cc/player/shingeki-no-kyojin-season-2/';

function aot_2(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter2').innerHTML = ' Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", aot2 + `${i+1}`);
      else
        document.querySelector("iframe").setAttribute("src", aot2 + `${i+1}`);
    }
  }
}
var aot3 = 'https://streamfreak.cc/player/shingeki-no-kyojin-season-3/';

function aot_3(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  let visCounter = document.getElementById('counter3');
  visCounter.style.display = "block";
  let hideCounter = document.getElementById('counter5');
  hideCounter.style.display = "none";
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter3').innerHTML = ' s3.1 Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", aot3 + `${i+1}`);
      else
        document.querySelector("iframe").setAttribute("src", aot3 + `${i+1}`);
    }
  }
}
var aot5 = 'https://streamfreak.cc/player/shingeki-no-kyojin-season-3-part-2/';

function aot_5(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  let visCounter = document.getElementById('counter5');
  visCounter.style.display = "block";
  let hideCounter = document.getElementById('counter3');
  hideCounter.style.display = "none";
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter5').innerHTML = ' s3.2 Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", aot5 + `${i+1}`);
      else
        document.querySelector("iframe").setAttribute("src", aot5 + `${i+1}`);
    }
  }
}
var aot4 = 'https://streamfreak.cc/player/shingeki-no-kyojin-the-final-season/';

function aot_4(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter4').innerHTML = 'Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", aot4 + `${i+1}`);
      else
        document.querySelector("iframe").setAttribute("src", aot4 + `${i+1}`);
    }
  }
}

//Demon slayer
var demon = 'https://streamfreak.cc/player/kimetsu-no-yaiba/';

function demon1(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = ' Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", demon + `${i+1}`);
      else
        document.querySelector("iframe").setAttribute("src", demon + `${i+1}`);
    }
  }
}
// Assassination Classroom
var classroom = 'https://streamfreak.cc/player/ansatsu-kyoushitsu-tv-/';

function classroom_1(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = ' Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", classroom + `${i+1}`);
      else
        document.querySelector("iframe").setAttribute("src", classroom + `${i+1}`);
    }
  }
}
//-
var classroom2 = 'https://streamfreak.cc/player/ansatsu-kyoushitsu-tv-2nd-season/';

function classroom_2(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter2').innerHTML = ' Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", classroom2 + `${i+1}`);
      else
        document.querySelector("iframe").setAttribute("src", classroom2 + `${i+1}`);
    }
  }
}
// Erased
var erased = 'https://streamfreak.cc/player/boku-dake-ga-inai-machi/';

function erased_1(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = ' Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", erased + `${i+1}`);
      else
        document.querySelector("iframe").setAttribute("src", erased + `${i+1}`);
    }
  }
}
// Jujutsu kaisen
var kaisen = 'https://streamfreak.cc/player/jujutsu-kaisen-tv/';

function kaisen_1(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = ' Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", kaisen + `${i+1}`);
      else
        document.querySelector("iframe").setAttribute("src", kaisen + `${i+1}`);
    }
  }
}
// promise neverland
var promiseNeverland = 'https://streamfreak.cc/player/yakusoku-no-neverland/';

function promise_1(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = ' Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", promiseNeverland + `${i+1}`);
      else
        document.querySelector("iframe").setAttribute("src", promiseNeverland + `${i+1}`);
    }
  }
}

var promiseNeverland2 = 'https://streamfreak.cc/player/yakusoku-no-neverland-2nd-season/';

function promise_2(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter2').innerHTML = 'Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", promiseNeverland2 + `${i+1}`);
      else
        document.querySelector("iframe").setAttribute("src", promiseNeverland2 + `${i+1}`);
    }
  }
}
//my hero academia
var mha1 = 'https://streamfreak.cc/player/boku-no-hero-academia/';

function mha_1(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = 'Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", mha1 + `${i+1}`);
      else
        document.querySelector("iframe").setAttribute("src", mha1 + `${i+1}`);
    }
  }
}

var mha2 = 'https://streamfreak.cc/player/boku-no-hero-academia-2nd-season/';

function mha_2(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter2').innerHTML = 'Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", mha2 + `${i+1}`);
      else
        document.querySelector("iframe").setAttribute("src", mha2 + `${i+1}`);
    }
  }
}

var mha3 = 'https://streamfreak.cc/player/boku-no-hero-academia-3rd-season/';

function mha_3(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter3').innerHTML = ' Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", mha3 + `${i+1}`);
      else
        document.querySelector("iframe").setAttribute("src", mha3 + `${i+1}`);
    }
  }
}

var mha4 = 'https://streamfreak.cc/player/boku-no-hero-academia-4th-season/';

function mha_4(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter4').innerHTML = ' Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", mha4 + `${i+1}`);
      else
        document.querySelector("iframe").setAttribute("src", mha4 + `${i+1}`);
    }
  }
}

var mha5 = 'https://streamfreak.cc/player/boku-no-hero-academia-5th-season/';

function mha_5(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter5').innerHTML = ' Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", mha5 + `${i+1}`);
      else
        document.querySelector("iframe").setAttribute("src", mha5 + `${i+1}`);
    }
  }
}
// https://mountainoservo0002.animecdn.com/Black-Clover/Black-Clover-Episode-
var clover = 'https://embed.animeflix.ws/play/black-clover-tv/';

function clover_1(e) {
  let buttons = e.parentNode.getElementsByTagName("a");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = ' Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", clover + `${i+1}`);
      else
        document.querySelector("iframe").setAttribute("src", clover + `${i+1}`);
    }
  }
}

// naruto
var naruto = 'https://streamfreak.cc/player/naruto/';

function naruto_1(e) {
  let buttons = e.parentNode.getElementsByTagName("a");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = ' Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", naruto + `${i+1}`);
      else
        document.querySelector("iframe").setAttribute("src", naruto + `${i+1}`);
    }
  }
}
//https://v5.4animu.me/Naruto-Shippuden/Naruto-Shippuden-Episode-

var narutoship = 'https://streamfreak.cc/player/naruto-shippuden/';

function narutoship_1(e) {
  let buttons = e.parentNode.getElementsByTagName("a");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = ' Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", narutoship + `${i+1}`);
      else
        document.querySelector("iframe").setAttribute("src", narutoship + `${i+1}`);
    }
  }
}

//one piece
var onepiece = 'https://embed.animeflix.ws/play/one-piece/';

function piece_1(e) {
  let buttons = e.parentNode.getElementsByTagName("a");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = ' Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", onepiece + `${i+1}`);
      else
        document.querySelector("iframe").setAttribute("src", onepiece + `${i+1}`);
    }
  }
}
// hunter hunter
var hunter = 'https://streamfreak.cc/player/hunter-x-hunter-2011/';

function hunter_1(e) {
  let buttons = e.parentNode.getElementsByTagName("a");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = ' Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", hunter + `${i+1}`);
      else
        document.querySelector("iframe").setAttribute("src", hunter + `${i+1}`);
    }
  }
}
// Great Teacher Onizuka
var greatTeacherOnizuka = 'https://streamfreak.cc/player/great-teacher-onizuka/';

function greatteacher_1(e) {
  let buttons = e.parentNode.getElementsByTagName("a");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = ' Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", greatTeacherOnizuka + `${i+1}`);
      else
        document.querySelector("iframe").setAttribute("src", greatTeacherOnizuka + `${i+1}`);
    }
  }
}
//steins gate
var steinsgate = 'https://streamfreak.cc/player/steinsgate/';

function steins_1(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = ' Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", steinsgate + `${i+1}`);
      else
        document.querySelector("iframe").setAttribute("src", steinsgate + `${i+1}`);
    }
  }
}

var steins1 = 'https://streamfreak.cc/player/steinsgate-0/';

function steins_2(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter2').innerHTML = ' Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", steins1 + `${i+1}`);
      else
        document.querySelector("iframe").setAttribute("src", steins1 + `${i+1}`);
    }
  }
}
//Boruto
var boruto1 = 'https://streamfreak.cc/player/boruto-naruto-next-generations/';

function boruto_1(e) {
  let buttons = e.parentNode.getElementsByTagName("a");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = ' Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", boruto1 + `${i+1}`);
      else
        document.querySelector("iframe").setAttribute("src", boruto1 + `${i+1}`);
    }
  }
}
//one punch man

var onePunchMan1 = 'https://streamfreak.cc/player/one-punch-man/';

function onepunch_1(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = 'Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", onePunchMan1 + `${i+1}`);
      else
        document.querySelector("iframe").setAttribute("src", onePunchMan1 + `${i+1}`);
    }
  }
}

var onePunchMan2 = 'https://streamfreak.cc/player/one-punch-man-2nd-season/';

function onepunch_2(e) {
  let buttons = e.parentNode.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter2').innerHTML = 'Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", onePunchMan2 + `${i+1}`);
      else
        document.querySelector("iframe").setAttribute("src", onePunchMan2 + `${i+1}`);
    }
  }
}


var name = '';

function name(e) {
  let buttons = e.parentNode.getElementsByTagName("a");
  for (let i = 0; i < buttons.length; i++)
  {
    if (e == buttons[i])
    {
      let counter = document.getElementById('counter').innerHTML = 'One Punch Man s1 Episode-' + [i + 1];
      if (i + 1 < 10)
        document.querySelector("iframe").setAttribute("src", +`0${i+1}`);
      else
        document.querySelector("iframe").setAttribute("src", +`${i+1}`);
    }
  }
}