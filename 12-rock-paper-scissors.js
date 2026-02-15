 let result = ''
    let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        looses: 0,
        ties: 0
      }
        updateScoreElement(); 
    
    /*here we put the saved score as the current score. Note that it has to be switched to an object again 
    if (!score){
      score = {
        wins: 0,
        looses: 0,
        ties: 0
      }
    */

      function outcomeGame(playerMove, computerMove) {
      if (playerMove === computerMove){
        result = `It's a tie.`;
        score.ties ++
      } else if (playerMove === 'rock'){
          if (computerMove === 'paper') { 
          result = 'You lost.';
          score.looses ++
        } else if (computerMove === 'scissors') {
          result = 'You win.';
          score.wins ++
        }
      } else if (playerMove === 'paper'){
          if (computerMove === 'scissors') { 
          result = 'You lost.';
          score.looses ++
        } else if (computerMove === 'rock') {
          result = 'You win.'
          score.wins ++
        }
      } else if (playerMove === 'scissors'){
          if (computerMove === 'rock') {
            result = 'You lost.'
            score.looses ++
          } else if (computerMove === 'paper'){
            result = 'You win.'
            score.wins ++
          }
      }
      localStorage.setItem('score', JSON.stringify(score)) //Save the Score in Local storage (it only accepts JSON(stings))
        updateResultElement(result);
        updateMoveElement(computerMove, playerMove);
        updateScoreElement();
    }
      function updateResultElement(result) {
        if(result !== undefined){
          document.querySelector('.js-result')
        .innerHTML = `${result}`
      } else {
        document.querySelector('.js-result')
        .innerHTML = ``
      }
    }
      function updateMoveElement(computerMove, playerMove) {
        if(computerMove === '' && playerMove === ''){
        document.querySelector('.js-moves')
        .innerHTML = ''
        } else {
          document.querySelector('.js-moves')
        .innerHTML = `You
      <image src="images-rock-paper-scissors/${playerMove}-emoji.png"
      class="move-icon">
      <image src="images-rock-paper-scissors/${computerMove}-emoji.png"
      class="move-icon">
      Computer`
        }
      }
      
      function updateScoreElement () {
        document.querySelector('.js-score')
        .innerHTML = `Score:    Wins: ${score.wins} Looses: ${score.looses}    Ties: ${score.ties}`
      }
      function pickComputerMove() {
        const randomNumber = Math.random()
        let computerMove = '';
        if (randomNumber >= 0 && randomNumber < 1/3) {
          computerMove = 'rock'
        } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
          computerMove = 'paper'
        } else {
          computerMove = 'scissors'
        }
        return computerMove;
      }