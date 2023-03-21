const inputRange = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

inputRange.addEventListener('input', () => {
  textSpan.style.fontSize = `${inputRange.value}px`;
});
