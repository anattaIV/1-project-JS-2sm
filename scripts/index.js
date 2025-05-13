const cardTitleInput = document.getElementById('card-title');
const addCardButton = document.getElementById('add-card');
const cardContainer = document.getElementById('card-container');

function createCard(title) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  const titleElement = document.createElement('h3');
  titleElement.textContent = title;
  cardDiv.appendChild(titleElement);

  const likeButton = document.createElement('button');
  likeButton.textContent = 'Выполнено';
  cardDiv.appendChild(likeButton);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Удалить';
  cardDiv.appendChild(deleteButton);

  likeButton.addEventListener('click', function() {
    cardDiv.classList.toggle('liked'); 
  });

  deleteButton.addEventListener('click', function() {
    cardDiv.remove(); 
  });

  return cardDiv;
}

addCardButton.addEventListener('click', function() {
  const title = cardTitleInput.value;
  if (title !== '') {
    const newCard = createCard(title);
    cardContainer.appendChild(newCard);
  }
});

