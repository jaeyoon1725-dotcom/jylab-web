const menuButton=document.querySelector('.menu');
const navLinks=document.querySelector('#nav-links');
if(menuButton&&navLinks){
  const close=()=>{navLinks.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='메뉴'};
  menuButton.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'닫기':'메뉴'});
  navLinks.addEventListener('click',e=>{if(e.target.closest('a'))close()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){close();menuButton.focus()}});
}
const items=document.querySelectorAll('.reveal');
if(matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver'in window)){items.forEach(el=>el.classList.add('is-in'))}
else{const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-in');io.unobserve(entry.target)}}),{threshold:.08,rootMargin:'0px 0px -6%'});items.forEach(el=>io.observe(el))}
