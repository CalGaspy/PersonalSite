// Closes the mobile menu after a nav link is tapped.
// Without this the menu stays open over the page when you use a same-page
// anchor link (Home / Projects / Skills on index.html).
document.addEventListener('click', function (event) {
  if (!event.target.closest('.nav-links a')) return;
  var toggle = document.getElementById('nav-toggle');
  if (toggle) toggle.checked = false;
});
