function game(){
    const enterNum = document.getElementById("enterNum");
    let secretNum = document.getElementById("secretNum");
    const checker = document.getElementById("checker");
    const result = document.getElementById("result");
    const hf = document.getElementById("hf");
    const subBtn = document.getElementById("subBtn");
    const playAgain = document.getElementById("playAgain");
    let guesses = 0;
    let gotAns = false;

    secretNum.textContent = Math.floor(Math.random() * 100);
        
    function sub(){
        if(parseInt(enterNum.value) === parseInt(secretNum.textContent)){
            result.textContent = `It took you ${guesses} ${guesses > 1 ? 'guesses' : 'guess'}`;
            secretNum.hidden = false;
            gotAns = true;
            checker.textContent = "You got the correct number! ✅";
        }
    
        if(gotAns){
            checker.textContent = "You got the correct number! ✅";
            guesses = guesses + 0;
        }
        else{
            guesses+=1;
            if(parseInt(enterNum.value) > parseInt(secretNum.textContent)){
                checker.textContent = "Number is too high! ⬆️";
            }
            else if(parseInt(enterNum.value) < parseInt(secretNum.textContent)){
                checker.textContent = "Number is too low! ⬇️";
            }
        }
    }
    subBtn.onclick = sub();

    document.body.addEventListener("keydown", event => {
        if(event.key == "Enter"){
            sub();
        }
    });

    playAgain.onclick = function reset(){
        if(gotAns){
            result.textContent = "";
            enterNum.value = "";
            secretNum.textContent = Math.floor(Math.random() * 100);
            secretNum.hidden = true;
            checker.textContent = "";
            guesses = 0;
            gotAns = false;
        }
        else{
            hf.textContent = "You haven't gotten the answer yet!";
        }
    }
}
game();