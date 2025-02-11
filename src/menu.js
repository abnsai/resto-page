function createMenuPage() {
  const content = document.getElementById('content');

  const headline = document.createElement('h2');
  headline.textContent = 'Our Menu';

  const menuList = document.createElement('ul');
  const menuItem1 = document.createElement('li');
  menuItem1.textContent = 'Burger - $10';
  const menuItem2 = document.createElement('li');
  menuItem2.textContent = 'Pizza - $12';
  const menuItem3 = document.createElement('li');
  menuItem3.textContent = 'Salad - $8';

  menuList.appendChild(menuItem1);
  menuList.appendChild(menuItem2);
  menuList.appendChild(menuItem3);

  content.appendChild(headline);
  content.appendChild(menuList);

  return content;
}

export default createMenuPage;
