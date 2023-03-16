export default pageLoad;

const div = document.getElementById('content');

function pageLoad() {
  const navBar = document.createElement('div');
  navBar.classList.add('navBar');
  document.body.prepend(navBar);

  const navMenu = document.createElement('ul');

  const homeNav = document.createElement('li');
  homeNav.textContent = 'Home';
  homeNav.addEventListener('click', homePage);
  const menuNav = document.createElement('li');
  menuNav.textContent = 'Menu';
  menuNav.addEventListener('click', menuPage);
  const contactNav = document.createElement('li');
  contactNav.textContent = 'Contact';
  contactNav.addEventListener('click', contactPage);

  navMenu.append(homeNav, menuNav, contactNav);
  navBar.appendChild(navMenu);
  homePage();
}

function menuPage() {
  const menu = document.createElement('img');
  menu.src = '../src/menu.jpg';
  div.replaceChildren(menu);
}

function contactPage() {
  const contact = document.createElement('img');
  contact.src = '../src/contact.jpg';
  div.replaceChildren(contact);
}

function homePage() {
  const mainHeader = document.createElement('h1');
  mainHeader.textContent = 'Ristorante paradiso';

  const mainImage = document.createElement('img');
  mainImage.src = '../src/main-hall.jpg';

  const review = document.createElement('p');
  review.textContent =
    'This cozy restaurant has left the best impressions! Hospitable hosts delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again.  pico';

  div.replaceChildren(mainHeader, mainImage, review);
}
