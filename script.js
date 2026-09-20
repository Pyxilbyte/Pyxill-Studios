document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const button=document.querySelector('.menu-button'),links=document.querySelector('.nav-links');
if(button&&links)button.addEventListener('click',()=>{const open=links.classList.toggle('open');button.setAttribute('aria-expanded',String(open))});
