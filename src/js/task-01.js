const ul = document.querySelector('#categories');
const items = ul.querySelectorAll('li.item');



items.forEach(item => {
  const heading = item.querySelector('h2').textContent;
  const count = item.querySelectorAll('li').length;
  console.log(`Category: ${heading} (contains ${count} items)`);
});
