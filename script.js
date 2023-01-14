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

const lis = document.querySelectorAll('li');
const uls = document.querySelectorAll('ul');

for (const li of lis) {
  const span = document.createElement('span');
  span.addEventListener('pointerover', (e) => e.target.style.color = '#FF7104');
  span.addEventListener('pointerout', (e) => e.target.style.color = '');

  li.prepend(span);
  span.append(span.nextSibling);
}

const width = document.documentElement.clientWidth;
const height = document.documentElement.clientHeight;

if (width > height && !window.navigator.userAgent.includes('Windows')) {  
  const stripTexts = document.querySelectorAll('.strip-text');
  for (const stripText of stripTexts) {
    stripText.style.bottom = '5px';
  }

  for (const li of lis) {
    li.style.marginLeft = '20vw';
  }

  for (const ul of uls) {
    ul.style.margin = 0;
  }  
}
