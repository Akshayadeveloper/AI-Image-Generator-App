//A Responsive Memory card game application
//Here we created an memory card with  animal emoji concept that easy and fun to remember.
//Make more enhanced version of this game by adding more features as possible
// INSTRUCYIONS TO PLAY

//1. Hover through each card to view the emoji apper.
//2. Memorize each card character.
//3. When user select two card with same emoji, the card disappear.
//4.Follow step:3 until no card left.
//5. There you go, Hurray Win
    
    function generateImage() {
        const imageElement = document.getElementById('generatedImage');
        const randomNumber = Math.floor(Math.random() * 1000);

        // Using the Lorem Picsum API to generate a random image
        imageElement.src = `https://picsum.photos/800/400?random=${randomNumber}`;
    }

