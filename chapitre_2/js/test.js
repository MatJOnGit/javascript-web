var foo = document.getElementById('foo');
// produit : First  (1)
console.log(foo.firstElementChild.textContent);
// produit : Third  (3)
console.log(foo.lastElementChild.textContent);