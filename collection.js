const pieces = [
  'First Light',
  'Rain at the Window',
  'Paper Lanterns',
  'Blue Hour',
  'Homeward',
];
const root = document.getElementById('catalog');
root.replaceChildren();
const list = document.createElement('ol');
list.className = 'collection';
for (const title of pieces) {
  const item = document.createElement('li');
  item.textContent = title;
  const by = document.createElement('small');
  by.textContent = 'Original Smart Recital demo · Free and Pro';
  item.append(by);
  list.append(item);
}
root.append(list);
