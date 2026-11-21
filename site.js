// Fuzelights — small helpers

// Email links: the address is put together here so simple spam robots
// can't read it from the page. Each link can carry its own subject line.
(function () {
  var addr = 'fuzelights' + '@' + 'gmail.com';
  document.querySelectorAll('a.mail').forEach(function (a) {
    var subj = a.getAttribute('data-subject') || 'Question from fuzelights.com';
    a.href = 'mailto:' + addr + '?subject=' + encodeURIComponent(subj);
  });
})();

// Click a photo to see it large. Click anywhere, or press Esc, to close.
(function () {
  var box = document.getElementById('lightbox');
  if (!box) return;
  var img = box.querySelector('img'), cap = box.querySelector('.cap');
  function close() { box.classList.remove('open'); img.removeAttribute('src'); }
  document.querySelectorAll('button.zoom').forEach(function (b) {
    b.addEventListener('click', function () {
      img.src = b.getAttribute('data-full');
      img.alt = b.getAttribute('data-cap') || '';
      cap.textContent = b.getAttribute('data-cap') || '';
      box.classList.add('open');
    });
  });
  box.addEventListener('click', close);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
})();
