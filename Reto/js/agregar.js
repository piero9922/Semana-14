const add = document.getElementById('add');
const titulo = document.getElementById('titulo');
const url = document.getElementById('url');
const descripcion = document.getElementById('descripcion');
const view = document.getElementById('view');

add.addEventListener('click', (e) => {
  e.preventDefault();
  const tituloValue = titulo.value;
  const urlValue = url.value;
  const descripcionValue = descripcion.value;
  console.log(tituloValue);
  console.log(urlValue);
  console.log(descripcionValue);
});
