var trivia = {
	
	currentQuestion: 0,
	
	questionNumber: 1,
	
	correct: 0,
	
	incorrect: 0,
	
	questions: [
		'What is Bucky Barnes\' first name?',
		'What is Captain America\'s shield made of?',
		'What is Tony Stark\'s father\'s name?',
		'What video game does Tony Stark point out that a crew member is playing on the Helicarrier bridge?',
		'In which country do the climactic events of "Age of Ultron" take place?',
		'Who was the original Ant-Man?',
		'Where does Dr. Strange journey to in search of a way of healing his hands?',
		'At what restaurant does Scott Lang work for after his release from prison?',
		'Which of these villains has not appeared in the MCU?',
		'From which Infinity Stone did the Maximoff twins obtain their powers?',
		'Which Infinity Stone first gives Vision his powers?',
		'Who is the leader of the Jabari Tribe?',
		'Which Infinity Stone does Peter Quill obtain at the beginning of "Guardians of the Galaxy"?',
		'Which borough of New York City is Spider-Man from?',
		'Who is the only other Avenger to completely lift Thor\'s hammer?',
		'What is Pepper Potts allergic to?',
		'What weapons test was Tony Stark returning from when his convoy was ambushed in Afghanistan?',
		'What New York neighborhood do the Hulk and Abomination tear through during their fight?',
		'Who is revealed to be Loki\'s actual father?',
		'What is the Red Skull\'s actual name?',
		'Who is Agent 13?',
		'What alien race did Loki lead in his attack on New York City?',
		'Which of these characters did Loki unsuccessfully attempt to mind controll with his scepter?',
		'After thwarting the Chitauri invasion, what type of restaurant does Tony suggest the Avengers eat at?',
		'What inter-dimensional being does Dr. Strange defeat by trapping in an infinite time loop?',
		'Which friend of Tony Stark\'s becomes War Machine?',
		'What criminal organization is Obadiah Stane selling arms to behind Tony\'s back?',
		'Who is the founder and CEO of Advanced Idea Mechanics - the organization that developed the extremis drug?',
		'What Dark Elf leader attempted to use the Aether to plunge the universe back into eternal darkness?',
		'Which character was Secretary to the World Security Council and the secret commander of the HYDRA forces within S.H.I.E.L.D.?',
		'When HYDRA is revealed to have infiltrated S.H.I.E.L.D., which of these Avengers did not partake in the plan to disable the helicarriers?',
		'Which Avenger does Scott Lang encounter at the Avenger\'s Headquarters in upstate New York?',
		'What planet do the Guardians of the Galaxy leave the Power Stone on after they defeat Ronan?',
		'What is the name of Peter Quill\'s ship?',
		'What prison do the Guardians of the Galaxy end up in after being arrested on Xandar?',
		'What prison are the Avengers who are captured after refusing to sign the Sokovia Accords held in?',
		'Which "Daughter of Thanos" is sent to Xandar to obtain the orb from Peter Quill?',
		'Which Avenger was killed saving Hawkeye from Ultron?',
		'Who killed Tony Stark\'s parents?',
		'What substance powers the Ant-Man suit, allowing him to shrink to subatomic levels?',
		'What mystical device houses the Time Stone wielded by Dr. Strange?',
		'Which of these is not an artifact used by Dr. Strange or his sorcerer allies?',
		'Which "cool" Disney character does Peter Quill say Yandu looks like when falling?',
		'Who is Peter Quill\'s father (not "daddy")?',
		'Who is the empath that joins the Guardians of the Galaxy after their dealings on Ego?',
		'Which Avenger appears in PSA videos at Peter Parker\'s High School in gym class and detention?',
		'What city does Peter Parker\'s Academic Decathalon team travel to for their big competition?',
		'Which villain does Spider-Man stop trying to steal weapons being transported to the Avengers Headquarters?',
		'What alien tech did Adrian Toomes use to power his Vulture suit?',
		'What elder being rules the planet Sakaar?',
		'What alien race is Korg?',
		'What is the name of the giant black wolf that serves Hela as she takes over Asgard?',
		'When gathering allies to escape the planet Sakaar, what does Thor call their new team?',
		'What is the name of the Black Panther\'s elite female body guards, led by Okoye?',
		'What name do we see the Wakandan children call Bucky Barnes during his rehabilitation in Wakanda?',
		'What black-market arms dealer stole vibranium from Wakanda before being killed by Erik Killmonger?',
		'Which of these is not an Infinity Stone?',
		'Which of these heroes does not battle Thanos on Titan?',
		'Which of these is not a member of Thanos\' Black Order?',
		'What planet does Thanos retrieve the Soul Stone from?',
		'Who is the keeper of the Soul Stone when Thanos retreives it on Vormir?',
		'What country are Vision and Scarlet Witch staying in when they are attacked by members of the Black Order?',
		'Who created the Infinity Guantlet for Thanos?',
		'Which of these has not been granted the powers of the Black Panther?'
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
		['Dr. Doom', 'Abomination', 'Whiplash', 'Helmut Zemo'],
		['Power Stone', 'Soul Stone', 'Reality Stone', 'Mind Stone'],
		['Soul Stone', 'Mind Stone', 'Reality Stone', 'Power Stone'],
		["M'Baku", 'Shuri', "W'Kabi", 'Zuri'],
		['Soul Stone', 'Reality Stone', 'Power Stone', 'Space Stone'],
		['Queens', 'Brooklyn', 'The Bronx', 'Manhattan'],
		['Captain America', 'Iron Man', 'Hulk', 'Vision'],
		['Peanuts', 'Strawberries', 'Cats', 'Tony\'s BS'],
		['The Mark III Iron Man Armor', 'The Ex-Wife', 'Mjolnir', 'The Jericho Missile'],
		['Midtown', 'SoHo', 'Harlem', 'Chinatown'],
		['Laufey', 'Odin', 'Volstagg', 'Frigga'],
		['Carter Putershmit', 'Arnim Zola', 'Heinz Kruger', 'Johann Schmidt'],
		['Peggy Carter', 'Sharon Carter', 'Phil Coulson', 'Natasha Romanoff'],
		['The Chitauri', 'The Skrulls', 'The Sakaarans', 'The Kree'],
		['Tony Stark', 'Nick Fury', 'Erik Selvig', 'Clint Barton'],
		['Sushi', 'Shawarma', 'Pho', 'Pizza'],
		['Agamotto', 'Mordo', 'Kaecilius', 'Dormammu'],
		['James Rhodes', 'Obadiah Stane', 'Ivan Vanko', 'Sam Wilson'],
		['Ten Rings', 'Hammer Industries', 'A.I.M.', 'HYDRA'],
		['The Mandarin', 'Trevor Slattery', 'Justin Hammer', 'Aldrich Killian'],
		['Kurse', 'Algrim', 'Malekith', 'Alflyse'],
		['Arnim Zola', 'Alexander Pierce', 'Phil Coulson', 'Nick Fury'],
		['Falcon', 'Black Widow', 'Captain America', 'Hawkeye'],
		['War Machine', 'Ant-Man', 'Black Widow', 'Falcon'],
		['Knowhere', 'Xandar', 'Earth', 'Hala'],
		['The Milano', 'The Millennium Falcon', 'The Dark Aster', 'Sanctuary II'],
		['The Raft', 'Ryker\'s Island', 'Prison 42', 'The Kyln'],
		['The Vault', 'Ryker\'s Island', 'The Kyln', 'The Raft'],
		['Proxima Midnight', 'Ronan', 'Nebula', 'Gamora'],
		['Scarlet Witch', 'Quicksilver', 'Phil Coulson', 'T\'Chaka'],
		['Mitchell Carson', 'Obadiah Stane', 'The Winter Soldier', 'Helmut Zemo'],
		['Extremis', 'Gamma Radiation', 'Pym Particles', 'Nanotech'],
		['The Eye of Agamotto', 'The Orb', 'Sling Ring', 'The Wand of Watoomb'],
		['The Eye of Agamotto', 'The Staff of the Living Tribunal', 'The Cloak of Levitation', 'Mjolnir'],
		['Hades', 'Mary Poppins', 'Genie', 'Peter Pan'],
		['Yondu', 'Thanos', 'Ego the Living Planet', 'David Hasselhoff'],
		['Nebula', 'Mantis', 'Yondu', 'Adam Warlock'],
		['Iron Man', 'Captain America', 'Thor', 'Hulk'],
		['New York City', 'Washington, D.C.', 'Philadelphia', 'Baltimore'],
		['The Vulture', 'The Lizard', 'Dr. Octopus', 'The Green Goblin'],
		['Chitauri', 'Kree', 'Asgardian', 'Sakaaran'],
		['The Gamemaster', 'The Grandmaster', 'The Collector', 'The Architect'],
		['Sakaaran', 'Sovereign', 'Kronan', 'Asgardian'],
		['Fenris', 'Cosmo', 'Wolfsbane', 'Kraven'],
		['Space Avengers', 'The New Avengers', 'The A-Team', 'The Revengers'],
		['The Kingsguard', 'The Panther Guard', 'The Jabari', 'The Dora Milaje'],
		['White Wolf', 'Winter Soldier', 'Nomad', 'The Estranged'],
		['Justin Hammer', 'Ulysses Klaue', 'Obadiah Stane', 'Adrian Toomes'],
		['Soul Stone', 'Space Stone', 'Reality Stone', 'Life Stone'],
		['Star-Lord', 'Iron Man', 'Spider-Man', 'Groot'],
		['Proxima Midnight', 'Corvus Glaive', 'Loki', 'Ebony Maw'],
		['Nidavellir', 'Niflheim', 'Vanaheimr', 'Vormir'],
		['Gamora', 'Eitri', 'Lady Death', 'Red Skull'],
		['Scotland', 'Sokovia', 'Wakanda', 'Germany'],
		['Odin', 'Loki', 'Eitri', 'Brokk'],
		['T\'Challa', 'Shuri', 'T\'Chaka', 'Erik Killmonger']
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
		'Mind Stone',
		'Mind Stone',
		"M'Baku",
		'Power Stone',
		'Queens',
		'Vision',
		'Strawberries',
		'The Jericho Missile',
		'Harlem',
		'Laufey',
		'Johann Schmidt',
		'Sharon Carter',
		'The Chitauri',
		'Tony Stark',
		'Shawarma',
		'Dormammu',
		'James Rhodes',
		'Ten Rings',
		'Aldrich Killian',
		'Malekith',
		'Alexander Pierce',
		'Hawkeye',
		'Falcon',
		'Xandar',
		'The Milano',
		'The Raft',
		'Gamora',
		'Quicksilver',
		'The Winter Soldier',
		'Pym Particles',
		'The Eye of Agamotto',
		'Mjolnir',
		'Mary Poppins',
		'Ego the Living Planet',
		'Mantis',
		'Captain America',
		'Washington, D.C.',
		'The Vulture',
		'Chitauri',
		'The Grandmaster',
		'Kronan',
		'Fenris',
		'The Revengers',
		'The Dora Milaje',
		'White Wolf',
		'Ulysses Klaue',
		'Life Stone',
		'Groot',
		'loki',
		'Vormir',
		'Red Skull',
		'Scotland',
		'Eitri',
		'Shuri'
	],
	
	images: [
		'bucky.jpg',
		'vibranium.jpg',
		'howard.jpg',
		'galaga.jpg',
		'sokovia.jpg',
		'pym.jpg',
		'kamar-taj.jpg',
		'baskin-robbins.jpg',
		'doom.jpg',
		'mind-stone.jpg',
		'vision.jpg',
		'mbaku.jpg',
		'power-stone.jpg',
		'queens.jpg',
		'vision-hammer.jpg',
		'pepper.jpg',
		'jericho.jpg',
		'harlem.jpg',
		'laufey.jpg',
		'schmidt.jpg',
		'agent13.jpg',
		'chitauri.jpg',
		'scepter.jpg',
		'shawarma.jpg',
		'dormammu.jpg',
		'warmachine.jpg',
		'tenrings.jpg',
		'killian.jpg',
		'malekith.jpg',
		'pierce.jpg',
		'hawkeye.jpg',
		'falcon.jpg',
		'xandar.jpg',
		'milano.jpg',
		'raft.jpg',
		'gamora.jpg',
		'quicksilver.jpg',
		'wintersoldier-starks.jpg',
		'pym-particles.jpg',
		'agamotto.jpg',
		'mjolnir.jpg',
		'poppins.jpg',
		'ego.png',
		'mantis.png',
		'cap-psa.png',
		'washington.png',
		'vulture.png',
		'chitauri-weapons.png',
		'grandmaster.png',
		'korg.png',
		'fenris.png',
		'revengers.png',
		'dora-milaje.png',
		'whitewolf.png',
		'klaue.png',
		'infinity-stones.png',
		'groot.png',
		'black-order.png',
		'vormir.png',
		'red-skull.png',
		'scotland.png',
		'eitri.png',
		'shuri.png'
	],
	
	prevQuestions: [],
	
	prevChoices: [],
	
	prevAnswers: [],
	
	prevImages: [],
	
	shuffleArray: function(array) {
	    for (var i = array.length-1; i > 0; --i) {
	        var j = Math.floor(Math.random() * (i+1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
	},
		
	newQuestion: function() {

//	Hides the answer and gameover menus and displays the question-menu
	$('.question-menu').removeClass('hidden');
	$('.answer-menu').attr('class', 'answer-menu hidden');

//	Displays the initial time
		$('.time').text(trivia.timer.time);

//	Displays the current question number
		$('.current-question').text(trivia.questionNumber);
		
//	Sets the current question to a random question index number
		trivia.currentQuestion = Math.floor(Math.random() * trivia.questions.length);
		
//	Displays the current question	
		$('.question').text(trivia.questions[trivia.currentQuestion]);
		
//	Shuffles the answer choices to appear in random order
		trivia.shuffleArray(trivia.choices[trivia.currentQuestion]);
		
//	Cycles through the (now shuffled) choices array and displays each choice in the appropriate HTML element
		for(var i = 0; i < 4; i++) {
			$('.' + i).text(trivia.choices[trivia.currentQuestion][i])
		}
		
//	Starts the timer
		this.timer.startTimer();
	},
	
	questionResult: function(answer) {										console.log('Images: ' + trivia.images + '; Prev Images: ' + trivia.prevImages);
		
//	Change results display and increment appropriate variable depending if correct, incorrect or out of time
		if(answer == trivia.answers[trivia.currentQuestion]) {
			trivia.correct++;
			$('.result').text('CORRECT!');
			$('.result').removeClass('incorrect');
		} else if(!answer) {
			trivia.incorrect++;
			$('.result').text('OUT OF TIME!');
			$('.result').addClass('incorrect');
		} else {
			trivia.incorrect++;
			$('.result').text('INCORRECT!');
			$('.result').addClass('incorrect');
		}
		
//	Display the correct answer
		$('#answer').text(trivia.answers[trivia.currentQuestion]);
		
//	Display the correct corresponding image
		$('.image').html('<img src="assets/images/' + trivia.images[trivia.currentQuestion] + '" alt="' + trivia.answers[trivia.currentQuestion] +'">');
		
		console.log('Correct: ' + trivia.correct + '; Incorrect: ' + trivia.incorrect);		console.log('timer running: ' + trivia.timer.timerRunning);
		
//	Hides the question-menu and displays the question-result menu
		$('.question-menu').addClass('hidden');
		$('.answer-menu').removeClass('hidden');

//	Adds the current question, choices, answer, and image to the respective 'previous' arrays
		trivia.prevQuestions.push(trivia.questions[trivia.currentQuestion]);
		trivia.prevChoices.push(trivia.choices[trivia.currentQuestion]);
		trivia.prevAnswers.push(trivia.answers[trivia.currentQuestion]);
		trivia.prevImages.push(trivia.images[trivia.currentQuestion]);
		
//	Removes the current question, choices, answer, and image from their arrays (so that they won't be repeated later)
		trivia.questions.splice(trivia.currentQuestion, 1);
		trivia.choices.splice(trivia.currentQuestion, 1);
		trivia.answers.splice(trivia.currentQuestion, 1);
		trivia.images.splice(trivia.currentQuestion, 1);

//	Increments the question number counter
		trivia.questionNumber++;
		
//	Stop the timer and reset the time
		trivia.timer.stopTimer();								console.log('Images: ' + trivia.images + '; Prev Images: ' + trivia.prevImages);
		trivia.timer.time = 10;									console.log('timer running: ' + trivia.timer.timerRunning);
		
//	Tests if questions have reached their limit and either asks another question or ends the game accordingly after a set amount of time
		setTimeout(function() {
			if(trivia.questionNumber < 11) {
				trivia.newQuestion();
			} else {
				trivia.endGame();
			}
		}
		, 3000);
		

		
	},
	
	endGame: function() {										console.log('endgame() is working');
		
//	Hides answer-menu and displays game-over menu
		$('.answer-menu').addClass('hidden');
		$('.gameover-menu').removeClass('hidden');
		
//	Displays the correct, incorrect, and percent variables
		$('#correct').text(trivia.correct);
		$('#incorrect').text(trivia.incorrect);					console.log('Images: ' + trivia.images + '; Prev Images: ' + trivia.prevImages);
		$('#percent').text(trivia.correct / 10 * 100);
		
	},
	
	resetGame: function() {										console.log('resetGame() is working'); console.log('prevQuestions: ' + trivia.prevQuestions);

//	Resets variables
		trivia.correct = 0;										console.log('Images: ' + trivia.images + '; Prev Images: ' + trivia.prevImages);
		trivia.incorrect = 0;
		trivia.questionNumber = 1;
//		trivia.timer.time = 10;
		
//	Cycles through the 'previous' arrays and adds the previous questions, choices, answers, and images back to their respective original arrays (just resets the arrays)
		trivia.prevQuestions.forEach(function(question) {
			trivia.questions.push(question);
		});
		trivia.prevChoices.forEach(function(choice) {
			trivia.choices.push(choice);
		});
		trivia.prevAnswers.forEach(function(answer) {
			trivia.answers.push(answer);
		});
		trivia.prevImages.forEach(function(image) {
			trivia.images.push(image);
		});
		
//	Resets the 'previous' arrays
		trivia.prevQuestions = [];
		trivia.prevChoices = [];
		trivia.prevAnswers = [];
		trivia.prevImages = [];										console.log('Images: ' + trivia.images + '; Prev Images: ' + trivia.prevImages);
	},
	
	timer: {
		
		time: 10,
		
		timerId: null,
		
		timerRunning: false,
		
		startTimer: function() {
			if(!trivia.timer.timerRunning) {
				trivia.timer.timerId = setInterval(trivia.timer.decrement, 1000);
				trivia.timer.timerRunning = true;
			}
		},
		
		stopTimer: function() {
			clearInterval(trivia.timer.timerId);
			trivia.timer.timerRunning = false;				console.log('timer running: ' + this.timerRunning + '; time: ' + this.time);
		},
		
		decrement: function() {
			trivia.timer.time--;
			$('.time').text(trivia.timer.time);
			if(trivia.timer.time < 1) {
				trivia.questionResult(false);
			}												console.log('time: ' + trivia.timer.time + '; timer running: ' + trivia.timer.timerRunning);
		}
	}
	
};	// End of trivia object



$(document).ready(function(){
	
	
	
// Set up start button event listener
	
	$('#start-button').on('click', function() {
		$('.start-menu').addClass('hidden');
//		$('.question-menu').removeClass('hidden');
		
		trivia.newQuestion();
		
	});
	
//	Set up new game event listener
	$('#new-game').on('click', function() {
		$('.gameover-menu').addClass('hidden');
		trivia.resetGame();
		trivia.newQuestion();
	});
	
	
// Set up answer event listeners

	$('.option').on('click', function() {
		var answer = $(this).text();
		trivia.questionResult(answer);
	});
	
});	// End of document ready function

