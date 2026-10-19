(function () {
  var body = document.body;
  var intro = document.getElementById('intro');
  var typed = document.getElementById('typed');
  var message = 'Welcome to my portfolio';
  var done = false;

  // Show the same character in the hero section
  var art = document.getElementById('nurse').cloneNode(true);
  art.removeAttribute('id');
  document.getElementById('heroArt').appendChild(art);

  function enterSite() {
    if (done) return;
    done = true;
    intro.classList.add('hide');
    body.classList.remove('loading');
    setTimeout(function () { intro.remove(); }, 800);
  }

  // Type the welcome message, then open the site
  var i = 0;
  function type() {
    if (done) return;
    typed.textContent = message.slice(0, ++i);
    if (i < message.length) setTimeout(type, 55);
    else setTimeout(enterSite, 1800);
  }
  setTimeout(type, 1000);
  document.getElementById('skip').addEventListener('click', enterSite);

  // Mobile menu
  var btn = document.getElementById('menuBtn');
  var menu = document.getElementById('menu');
  btn.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { menu.classList.remove('open'); btn.setAttribute('aria-expanded', false); }
  });

  // "Save as PDF" opens the browser print dialog (choose "Save as PDF")
  document.querySelectorAll('[data-print]').forEach(function (b) {
    b.addEventListener('click', function () { window.print(); });
  });

  document.getElementById('yr').textContent = new Date().getFullYear();
})();
