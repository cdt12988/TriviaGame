# Marvel Cinematic Universe Trivia

Link to App: [https://cdt12988.github.io/TriviaGame](https://cdt12988.github.io/TriviaGame/ "MCU Trivia Game")

This quick trivia app gives you 10 chances to test your knowledge of the MCU.

## Languages Used

This game uses HTML5, CSS3, and JavaScript with an emphasis on implementing timers.  It also uses the jQuery framework to manipulate the DOM.

## Contributers

Cody Thompson is the only contributor to this app.

## App Features

### Questions

The app will randomly select 10 questions from a question bank of over 60 questions.  It is designed to easily be able to add more questions without the need to change any code at all.

The app keeps track of and displays the current question throughout each playthrough.

After a question is asked, it will not be asked again until the next time the game is played.

After finishing all 10 questions, the app will calculate and display your score.

### Answers and Answer Choices

The answer choices are all displayed randomly each time the associated question is asked so the choices rarely appear in the same order even if the same question is asked at a later time.

After the user chooses an answer, the result of their question, the correct answer, and an image associated with the correct answer is displayed for a brief time.

### Timers

Each question has a timer, giving the user a set amount of time to answer the current question before displaying the question results.  The timer is displayed and refreshed each second and will stop itself if the user submits an answer before time runs out.

A second timer runs during the question result display and will automatically move on to either the next question or the end of game display without any user input.

### Game Reset

After all 10 questions have been asked, the game ends, the results are displayed, as well as a "Play Again!" button which completely resets the game when clicked, including adding all previously asked questions (and their corresponding choices, answers, and images) back to the rest of the questions.

## Mobile Devices

This app is responsive with various screen sizes, including mobile devices.

Touch screen styling was used to ensure that after a user answers a question, the hover/active stying does not cary over to the next question.