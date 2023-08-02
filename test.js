  // // Function to fetch character data from the server
  // function fetchCharacterData() {
  //   return fetch('/api/characters') 
  //   // Replace '/api/characters' with the actual endpoint URL
  //     .then((response) => response.json())
  //     .catch((error) => console.error('Error fetching character data:', error));
  // }

  // // Function to create a span tag with the character's name and add it to the character-bar div
  // function displayCharacters(names) {
  //   const characterBar = document.getElementById('character-bar');
  //   names.forEach((name) => {
  //     const span = document.createElement('span');
  //     span.textContent = name;
  //     span.addEventListener('click', () => displayCharacterDetails(name));
  //     characterBar.appendChild(span);
  //   });
  // }

  // // Function to display character details in the detailed-info div
  // function displayCharacterDetails(name) {
  //   // Assume characterData is an array of character objects with their details
  //   // Fetch character data from the server if not already available
  //   if (!window.characterData) {
  //     fetchCharacterData().then((data) => {
  //       window.characterData = data;
  //       displayCharacterDetails(name);
  //     });
  //     return;
  //   }

  //   const character = characterData.find((c) => c.name === name);
  //   if (!character) return;

  //   const detailedInfo = document.getElementById('detailed-info');
  //   detailedInfo.querySelector('#name').textContent = character.name;
  //   detailedInfo.querySelector('#image').src = character.image;
  //   detailedInfo.querySelector('#image').alt = character.name;
  //   detailedInfo.querySelector('#vote-count').textContent = character.votes || 0;

  //   // Add event listener to the votes-form submit button
  //   const votesForm = detailedInfo.querySelector('#votes-form');
  //   votesForm.addEventListener('submit', (event) => {
  //     event.preventDefault();
  //     const votesInput = votesForm.querySelector('#votes');
  //     const votes = parseInt(votesInput.value, 10) || 0;
  //     character.votes = (character.votes || 0) + votes;
  //     detailedInfo.querySelector('#vote-count').textContent = character.votes;
  //     votesInput.value = '';
  //   });

  //   // Add event listener to the reset-btn
  //   const resetButton = detailedInfo.querySelector('#reset-btn');
  //   resetButton.addEventListener('click', () => {
  //     character.votes = 0;
  //     detailedInfo.querySelector('#vote-count').textContent = character.votes;
  //   });
  // }

  // // Call the function to display characters' names
  // fetchCharacterData().then((data) => {
  //   const characterNames = data.map((character) => character.name);
  //   displayCharacters(characterNames);
  // });