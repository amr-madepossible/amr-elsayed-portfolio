document.getElementById('year').textContent = new Date().getFullYear();

const links = [...document.querySelectorAll('.nav-links a')];
const sections = links.map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);

const setActive = () => {
  const y = window.scrollY + 120;
  let active = sections[0];
  sections.forEach(section => {
    if (section.offsetTop <= y) active = section;
  });
  links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${active?.id}`));
};

window.addEventListener('scroll', setActive, {passive:true});
setActive();
