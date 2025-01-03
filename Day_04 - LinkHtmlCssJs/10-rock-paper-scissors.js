let score;

      try {
        // Parse the stored score or fall back to an empty object if null
        score = JSON.parse(localStorage.getItem("score")) || {};
      } catch (error) {
        // If JSON parsing fails, initialize a default score
        score = {};
      }

      // Validate the structure of the parsed score
      if (
        typeof score.wins !== "number" ||
        typeof score.losses !== "number" ||
        typeof score.ties !== "number"
      ) {
        score = { wins: 0, losses: 0, ties: 0 };
      }

      // Update the score display
      updateScoreElement();

      /* if (!score){
            score = {
                wins: 0,
                losses: 0,
                ties: 0
            };
        } */
      function playGame(playerMove) {
        const computerMove = pickComputerMove();
        let result = "";
        if (playerMove === "scissors") {
          if (computerMove === "rock") {
            result = "You lose";
          } else if (computerMove === "paper") {
            result = "You win.";
          } else if (computerMove === "scissors") {
            result = "Tie";
          }
        } else if (playerMove === "paper") {
          if (computerMove === "rock") {
            result = "You win.";
          } else if (computerMove === "paper") {
            result = "Tie.";
          } else if (computerMove === "scissors") {
            result = "You lose.";
          }
        } else if (playerMove === "rock") {
          if (computerMove === "rock") {
            result = "Tie.";
          } else if (computerMove === "paper") {
            result = "You lose.";
          } else if (computerMove === "scissors") {
            result = "You win.";
          }
        }

        if (result === "You win.") {
          score.wins += 1;
        } else if (result === "You lose.") {
          score.losses += 1;
        } else if (result === "Tie.") {
          score.ties += 1;
        }

        localStorage.setItem("score", JSON.stringify(score));
        updateScoreElement();

        document.querySelector(".js-result").innerHTML = result;

        document.querySelector(".js-moves").innerHTML = `You 
          <img src="/images/${playerMove}-emoji.png" class="move-icon">
          <img src="/images/${computerMove}-emoji.png" class="move-icon">
          Computer`;
      }

      function updateScoreElement() {
        document.querySelector(
          ".js-score"
        ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }

      function clearScore() {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem("score");
        updateScoreElement(); // Update the score display
      }

      function pickComputerMove() {
        let computerMove = "";
        const randomNumber = Math.floor(Math.random() * 3 + 1);
        if (randomNumber == 1) {
          computerMove = "rock";
        } else if (randomNumber == 2) {
          computerMove = "paper";
        } else {
          computerMove = "scissors";
        }
        return computerMove;
      }