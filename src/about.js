function createAboutPage() {
  const content = document.getElementById('content');

  const headline = document.createElement('h2');
  headline.textContent = 'About Us';

  const description = document.createElement('p');
  description.textContent = 'We are a family-owned restaurant serving delicious food since 2000.';

  content.appendChild(headline);
  content.appendChild(description);

  return content;
}

export default createAboutPage;
