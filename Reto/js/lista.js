const allTrash = document.querySelectorAll('.fa-trash-alt');
const allcards = document.querySelectorAll('.video');
// console.log(allTrash);

allTrash.forEach((trashbtn, key) => {
  trashbtn.addEventListener('click', (event) => {
    event.preventDefault();
    const cardKey = allcards[key];
    article.removeChild(cardKey);
  });
});
