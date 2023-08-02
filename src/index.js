// Your code here
document.addEventListener("DOMContentLoaded", () => {
    const characterNames = ["Mr. Cute", "Mx. Monkey", "Ms. Zebra", "Dr. Lion", "Mme. Panda"]; // Add character names here
    const characterBar = document.getElementById("character-bar");
    const detailedInfo = document.getElementById("detailed-info");
    const nameElement = document.getElementById("name");
    const imageElement = document.getElementById("image");
    const voteCountElement = document.getElementById("vote-count");
    const votesForm = document.getElementById("votes-form");
    const votesInput = document.getElementById("votes");
    const resetBtn = document.getElementById("reset-btn");

// Function to update the detailed info section with a character's data
    const updateCharacterInfo = (name, imagePath, votes) => {
      nameElement.textContent = name;
      imageElement.src = imagePath;
      imageElement.alt = name;
      voteCountElement.textContent = votes;
    };

// Event listener for character names in the character bar
    characterBar.addEventListener("click", (event) => {
      const selectedCharacter = event.target.textContent;
// Assuming you have an object containing characters' data, you can use it to update the detailed info.
// Replace this with your data structure.
      const charactersData = {
        "Mr. Cute": {
          name: "Mr. Cute",
          image: "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
          votes: 0,
        },
        "Mx. Monkey": {
          name: "Mx. Monkey",
          image: "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",
          votes: 0,
        },
        "Ms. Zebra": {
          name: "Ms. Zebra",
          image: "https://media2.giphy.com/media/20G9uNqE3K4dRjCppA/source.gif",
          votes: 0,
        },
        "Dr. Lion": {
          name: "Dr. Lion",
          image: "http://bestanimations.com/Animals/Mammals/Cats/Lions/animated-lion-gif-11.gif",
          votes: 0,
        },
        "Mme. Panda": {
          name: "Mme. Panda",
          image: "https://media.giphy.com/media/ALalVMOVR8Qw/giphy.gif",
          votes: 0,
        },
      };

      const characterData = charactersData[selectedCharacter];
      updateCharacterInfo(characterData.name, characterData.image, characterData.votes);
    });

    // Event listener for the votes form submission
    votesForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const votes = parseInt(votesInput.value);
      if (!isNaN(votes) && votes >= 0) {
        const currentVotes = parseInt(voteCountElement.textContent);
        voteCountElement.textContent = currentVotes + votes;
        votesInput.value = "";
      }
    });

    // Event listener for the reset button
    resetBtn.addEventListener("click", () => {
      voteCountElement.textContent = "0";
    });

    // Populate the character bar with character names
    for (const name of characterNames) {
      const characterNameElement = document.createElement("span");
      characterNameElement.textContent = name;
      characterBar.appendChild(characterNameElement);
    }
  })