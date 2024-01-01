//your code here
const evaluatedText = document.getElementById('evaluatedText');
const letterCount = document.getElementById('letterCount');

evaluatedText.addEventListener('input', function(){
	const text = evaluatedText.value;
	letterCount.textContent = text.length;
});
