const head = document.querySelector('.title');
head.addEventListener('pointerup', () => window.open(window.location.href));

const contacts = document.querySelector('.contacts');
contacts.addEventListener('pointerup', (e) => {
  if (e.target.tagName !== 'SPAN') return;
  if (e.button !== 0) return;
  const className = e.target.className;
  switch (className) {
    case 'github':
      window.open('https://github.com/romanzhh');
      break;
    case 'email':
      window.open('https://gmail.com');
      break;
    case 'hexlet':
      window.open('https://ru.hexlet.io/u/romanzh_');
      break;
  }
});

