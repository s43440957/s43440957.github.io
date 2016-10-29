// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge About ShipWrecks",
        "main":    "<p>So you think you got what it takes?</p>",
        "results": "<h5></h5><p></p>",
        "level1":  "You Rock!",
        "level2":  "Hmm...not too bad",
        "level3":  "You are right in the middle",
        "level4":  "Hmm...I except something better than that",
        "level5":  "Too bad" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "How many lives were lost in the wreck of the British Barque Coya?",
            "a": [
                {"option": "10 lives",      "correct": false},
                {"option": "29 lives",     "correct": false},
                {"option": "26 lives",      "correct": true},
                {"option": "5 lives",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> 26 lives were lost in the event</p>",
            "incorrect": "<p><span>Uhh no.</span> The correct answer is 26 lives. </p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Single True Answers, Select Any
            "q": "Who was the caption of British Barque Coya?",
            "a": [
                {"option": "Captain Paige",               "correct": true},
                {"option": "Captain Cook",   "correct": false},
                {"option": "Captain Sam",               "correct": false},
                {"option": "Captain George", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> You are doing it right!</p>",
            "incorrect": "<p><span>Hmmm.</span> It's actually Captain Paige.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Single True Answers, Select All
            "q": "Who many tons were steamer Victoria?",
            "a": [
                {"option": "6522 tons",           "correct": false},
                {"option": "1293 tons",                  "correct": false},
                {"option": "5732 tons",  "correct": false},
                {"option": "6527 tons",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're a genius, (wo)man.</p>",
            "incorrect": "<p><span>Hmm...The correct answer is 6527 tons.</span> </p>" // no comma here
        },
        { // Question 4
            "q": "Where was the wreck location that occurred in 1874 6 June?",
            "a": [
                {"option": "King's Island",    "correct": true},
                {"option": "Queen's Island",     "correct": false},
                {"option": "Victora Island",      "correct": false},
                {"option": "George Island",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy moly</span>You've got it right!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. Wrong answer. It was Kind's Island</p>" // no comma here
        },
        { // Question 5
            "q": "How many people died in the event in King's Island?",
            "a": [
                {"option": "79 people",    "correct": true},
                {"option": "85 people",    "correct": false},              
                {"option": "63 people",    "correct": false},
                {"option": "92 people",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> That wasn't so hard was it?</p>",
            "incorrect": "<p><span>ERRRR!</span> Wrong again?! 79 people died in the event.</p>" // no comma here
        } // no comma here
    ]
};
