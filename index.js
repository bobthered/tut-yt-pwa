import './news-article.js';

window.addEventListener('load', () => {
  addEventListeners();
  fetchNews();
  registerSW();
});

function addEventListeners() {
  if (!localStorage.getItem('settings'))
    localStorage.setItem('settings', JSON.stringify({ mode: '' }));
  const settings = JSON.parse(localStorage.getItem('settings'));
  const modeElement = document.querySelector('label[switch] input');
  modeElement.addEventListener('change', e => {
    console.log('yup');
    settings.mode = e.target.checked ? 'dark' : '';
    localStorage.setItem('settings', JSON.stringify(settings));
    document.documentElement.setAttribute('mode', settings.mode);
  });
  modeElement.checked = settings.mode === 'dark' ? true : false;
  modeElement.dispatchEvent(new Event('change'));
}

async function fetchNews() {
  const res = await fetch('http://localhost:5500/topHeadlines');
  const json = await res.json();

  const main = document.querySelector('main');

  json.articles.forEach(article => {
    const el = document.createElement('news-article');
    el.article = article;
    main.appendChild(el);
  });
}

async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./sw.js');
    } catch (e) {
      console.log('SW registration failed');
    }
  }
}
