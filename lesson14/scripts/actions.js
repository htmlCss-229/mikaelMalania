function togglePTag() {
  const pTag = document.querySelector('p');
  const button = document.querySelector('button');

  const pTagDisplayState = pTag.style.display; //none

  if (pTagDisplayState === 'none') {
    pTag.style.display = 'block';
    button.textContent = 'Hide Text';
  } else {
    pTag.style.display = 'none';
    button.textContent = 'Show Text';
  }
}
