//User will press the button on index.html to start.
  //Button will change the contents of the Jumbotron to the questions with form input.  
  //user will only be able to select one answer per question and will only have 1 minute to answer as many as possible.
  //Once the game ends, the jumbotron contents will change again to show the results of the quiz.
  //User will reload page to try again -- could add a button that would let them restart.

  var right = 0;
  var wrong = 0;

//////////////////////////
///////  TIMER    ////////
//////////////////////////

  	//set timer to 60 seconds
    var number = 10;
    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;
    //  The timer function sets an interval
    //  that runs the decrement function once a second.
    function timer() {
      intervalId = setInterval(decrement, 1000);
    }
    //  The decrement function.
    function decrement() {
      //  Decrease number by one.
      number--;
      //  Show the number in the #show-number tag.
      $("#timer").html("<h2>Time Remaining: " + number + "</h2><br>");
      //  Once number hits zero...
      if (number === 0) {
        //Display the end results screen
        $("#timer").hide();
        $("#outro").removeClass('hidden');
        $("#quiz").hide();
        clearInterval(intervalId);
        $("#outro").html("<p>You got " + right + " answers correct.<p>Hit Refresh to Try Again.");


      }
    }

//////////////////////////////////
/////////////////////////////////


  var questions = 
  [
    {
      question: "Who gives Daenerys Targaryen her dragon eggs?",
      choices: ["Jorah Mormont", "Illyrio Mopatis", "Viserys Targaryen", "Khal Drogo"],
      answer: 1
    },
    
    {
      question: "What does 'dracarys' mean?",
      choices: ["Burn", "Dragon", "Dragon Fire", "Kill"],
      answer: 2
    },

    {
      question: "Which house is Petyr Baelish referring to when he says, 'Quick tempers, slow minds'?",     
      choices: ["Stark", "Lannister", "Baratheon", "Targaryen"],
      answer: 0
    },
    {
      question: "Who is known as the Young Wolf?",
      choices: ["Jon Snow", "Robb Stark", "Bran Stark", "Ned Stark"],
      answer: 1
    },
    {
      question: "Which of the following is NOT a face of 'the Seven'?",
      choices: ["The Maiden", "The Widow", "The Mother", "The Stranger"],
      answer: 1
    },
    {
      question: "Who says, 'What do you know about fear? Fear is for the winter'?",
      choices: ["Robb Stark", "Old Nan", "Tywin Lannister", "Ned Stark"],
      answer: 1
    },
    {
      question: "Who says, 'When you play the game of thrones, you win or your die'?",
      choices: ["Varys", "Cersei Lannister", "Tyrion Lannister", "Petyr Baelish"],
      answer: 1
    },
    {
      question: "What does one horn blast mean for the Night's Watch?",
      choices: ["Others Spotted", "Rangers Returning", "Ranger in Trouble", "Wildlings Spotted"],
      answer: 1
    },
    {
      question: "Who saves Sansa Stark during the Riot of King's Landing?",
      choices: ["Tyrion Lannister", "Joffrey Baratheon", "Petyr Baelish", "The Hound"],
      answer: 3
    },
    {
      question: "Who has Petyr Baelish loved since he was a child?",
      choices: ["Sansa Stark", "Lysa Arryn", "Catelyn Stark", "Cersei Lannister"],
      answer: 2
    }
    
     
  ];
  
function generateQuiz() {

  for ( var i = 0; i < questions.length; i++ ) {
   	//I KNOW THIS IS GARBAGE... IM NOT DELUSIONAL... COULDN'T FIGURE THIS OUT  
    $("#quiz").append("<h4>" + questions[i].question + "</h4>");
    $("#quiz").append("<form><label class='radio-inline'><input type='radio' name='optradio'>" + questions[i].choices[0] + 
    	"</label><label class='radio-inline'><input type='radio' name='optradio'>" + questions[i].choices[1] + 
    	"</label><label class='radio-inline'><input type='radio' name='optradio'>" + questions[i].choices[2] + 
    	"</label><label class='radio-inline'><input type='radio' name='optradio'>" + questions[i].choices[3] + 
    	"</label></form><br>");
 	}
           
  }

function checkAns() {
  if ($("input[name=option]:checked").val() == allQuestions[currentquestion].correctAnswer) {
    correctAnswers++;
  };
};




//function that starts the game when the start button is clicked.
$(document).ready(function(){

$("#startButton").click(function(){
	$("#introScreen").hide();
	$("#quiz").removeClass('hidden');
	$("#timer").removeClass('hidden');
	$("#timer").html("<h2>Time Remaining: " + number + "</h2><br>");
	generateQuiz();
	timer();



});

});


