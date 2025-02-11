function createHomePage() {
  const content = document.getElementById('content');

  const headline = document.createElement('h1');
  headline.textContent = 'Welcome to Our Restaurant!';

  const image = document.createElement('img');
  image.src = 'https://picsum.photos/400/300';
  image.alt = 'Restaurant Image';

  const description = document.createElement('p');
  description.textContent = 'We offer delicious food and a great atmosphere. Come visit us!';

  content.appendChild(headline);
  content.appendChild(image);
  content.appendChild(description);

  return content;
}

export default createHomePage;
