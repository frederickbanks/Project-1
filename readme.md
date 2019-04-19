// my game is/was Simon! the memory game where you must match colors with the computer.
    my inital approach was to first create variables to hold the computers array of colors, players array and score/count.

    I also wanted to include audio of each sound, but as i progressed further i noticed that would be a feature i would need to include later.

    I created an object which included all of the variables listed preciously but decided to place them in the global scope for accessibilty.

    I then added an event listener on my start button, and proceeded to create a function to start the game by pushing a random color into the simonSays array using math.random.

    I then created a function that strictly compares the users input with the simonSays Array for correctness. the goal was to have the function rerun and keep count of the colors used in the array but i have been unsucessful so far.

    