/* Desenvolva sua lógica aqui ... */
const darkModeButton = document.querySelector('.header__btn--dark-mode');

export const toggleDarkMode =()=> {
  const html = document.querySelector('html');
  const DarkMode = html.classList.contains('dark-mode');
  localStorage.setItem('toggleDarkMode', JSON.stringify(DarkMode));

  html.classList.toggle('dark-mode', JSON.parse(localStorage.getItem('toggleDarkMode')));
  // html.classList.toggle('dark-mode');
  
  if (DarkMode) {
    html.classList.remove('dark-mode');
    darkModeButton.classList.remove('header__btn--dark-mode');
  } else {
    html.classList.add('dark-mode');
    darkModeButton.classList.add('header__btn--dark-mode');
    
  }
  
  
}

darkModeButton.addEventListener('click',toggleDarkMode);

export const toggleAnalasys =() => {
  const html = document.querySelector('html');
  const DarkMode = localStorage.getItem('toggleDarkMode');
  if (DarkMode === 'true') {
    html.classList.add('dark-mode');
  } else {
    html.classList.remove('dark-mode');
  }
}

window.onload = toggleAnalasys;

// toggleAnalasys();
