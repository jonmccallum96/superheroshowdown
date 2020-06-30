function textToSpeech() {
	// get all voices that browser offers
	var available_voices = window.speechSynthesis.getVoices();

	// this will hold an english voice
	var english_voice = '';

	// find voice by language locale "en-US"
	// if not then select the first voice
	for(var i=0; i<available_voices.length; i++) {
		if(available_voices[i].lang === 'en-US') {
			english_voice = available_voices[i];
			break;
		}
	}
	if(english_voice === '')
		english_voice = available_voices[0];


    const hero = document.querySelector('#hero').textContent;
    const villain = document.querySelector('#villain').textContent;
    
	// new SpeechSynthesisUtterance object
	var utter = new SpeechSynthesisUtterance();
	utter.rate = 0.7;
	utter.pitch = 0.01;
	utter.text = hero + ' vs ' + villain;
    utter.voice = english_voice;
    
    

	// event after text has been spoken


	window.speechSynthesis.speak(utter);
}



const clickme = document.querySelector('#clickme');
const another = document.querySelector('#another');


clickme.addEventListener("click", function(){
    const hero = document.querySelector('#hero');
    const villain = document.querySelector('#villain');
    hero.classList.add("hero");
    villain.classList.add("villain");
    clickme.style.display = 'none';
    another.style.display = 'inline';
    textToSpeech();
});

another.addEventListener("click", function(){
    location.reload();
});



