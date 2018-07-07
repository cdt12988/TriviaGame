var trivia = {
	
	currentQuestion: 0,
	
	correct: 0,
	
	incorrect: 0,
	
	questions: [
		'What is Bucky Barnes\' first name?',
		'What is Captain America\'s shield made of?',
		'What is Tony Stark\'s father\'s name?',
		'What video game does Tony Stark point out that a crew members playing on the Helicarrier bridge?',
		'In which country do the events of "Age of Ultron" take place?',
		'Who was the original Ant-Man?',
		'Where does Dr. Strange journey to in search of a way of healing his hands?',
		'At what restaurant does Scott Lang work for after his release from prison?',
		'Which of these villains has not appeared in the MCU?',
		'From which infinity stone did the Maximoff twins obtain their powers?'
	],
	
	choices: [
		['Steve', 'Buchanan', 'James', 'Bucky'],
		['Titanium Alloy', 'Vibranium', 'Adamantium', 'Uru'],
		['Howard', 'Anthony', 'Theodore', 'Morgan'],
		['Asteroids', 'Pac-Man', 'Space Invaders', 'Galaga'],
		['Wakanda', 'Sokovia', 'Latveria', 'Asgard'],
		['Scott Lang', "Eric O'Grady", 'Darren Cross', 'Hank Pym'],
		["K'un-Lun", 'Tibet', 'Kamar Taj', 'Sokovia'],
		['Chipotle', 'Baskin Robbins', 'Subway', "Dunkin' Donuts"],
		['Dr. Doom', 'Abomination', 'Whiplash', 'Baron Zemo'],
		['Power Stone', 'Soul Stone', 'Reality Stone', 'Mind Stone']
	],
	
	answers: [
		'James',
		'Vibranium',
		'Howard',
		'Galaga',
		'Sokovia',
		'Hank Pym',
		'Kamar Taj',
		'Baskin Robbins',
		'Dr. Doom',
		'Mind Stone'	
	],
	
	shuffleArray: function(array) {
	    for (var i = array.length-1; i > 0; --i) {
	        var j = Math.floor(Math.random() * (i+1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
	},
		
	newQuestion: function() {
		
		$('.question').text(trivia.questions[trivia.currentQuestion]);
		$('#current-question').text(trivia.currentQuestion +1);
		trivia.shuffleArray(trivia.choices[trivia.currentQuestion]);
		for(var i = 0; i < 4; i++) {
			$('.' + i).text(trivia.choices[trivia.currentQuestion][i])
		}
	},
	
	questionResult: function(answer) {
		
		if(answer == trivia.answers[trivia.currentQuestion]) {
			trivia.correct++;
			
		} else {
			trivia.incorrect++;
		}
		
//		console.log('Correct: ' + trivia.correct + '; Incorrect: ' + trivia.incorrect);
		
		trivia.currentQuestion++;
		
		if(trivia.currentQuestion < 10) {
			trivia.newQuestion();
		} else {
			trivia.gameResults();
		}
		
	},
	
	gameResults: function() {
		alert('Game Over!');
	},
	
	resetGame: function() {

	},
	
};	// End of trivia object


$(document).ready(function(){
	
	
	
	// Set up start button event listener
	
	$('#start-button').on('click', function() {
		$('.start-menu').addClass('hidden');
		$('.question-menu').removeClass('hidden');
		
		trivia.newQuestion();
		
	});
	
	
	
	// Set up answer event listeners

	$('.option').on('click', function() {
		var answer = $(this).text();
		trivia.questionResult(answer);
	});
	
});	// End of document ready function

