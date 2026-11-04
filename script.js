const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('open', !expanded);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('inquiry-form').addEventListener('submit', e => {
  e.preventDefault();
  const form = e.currentTarget;
  if (!form.reportValidity()) return;
  const values = new FormData(form);
  const subject = `Zeylun Hospitality inquiry — ${values.get('property')}`;
  const body = `Name: ${values.get('name')}\nProperty: ${values.get('property')}\nEmail: ${values.get('email')}\nInterest: ${values.get('interest')}\n\nChallenge:\n${values.get('message') || 'Not specified'}`;
  window.location.href = `mailto:hello@zeylun.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
