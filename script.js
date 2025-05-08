const gameBoard = (function() {
    let openSlots = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let allSlots = []
    const endGameScreen = document.querySelector('.end-game')
    const resetbtn = document.getElementById('reset')
    const winnerAnnouncement = document.getElementById('winnerAnnouncement')
    let playerSlots = []
    let CPUSlots = []
    let winner = ''
    let currentPlayer = 'CPU'
    let moveCounter = 0
    const game = document.getElementById('game')

    function settingUpBoard() {
        for (let i = 1; i < 10; i++) {
            let slot = document.createElement('div')
            slot.classList.add('slot')
            game.appendChild(slot)

            let markers = document.createElement('p')
            markers.id = i
            slot.appendChild(markers)
            allSlots.push(markers)

            slot.addEventListener('click', () => {
                isValidMove(i)
                console.log(i)
            })
        }
    }

    resetbtn.addEventListener('click', () => {
        openSlots = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        playerSlots = []
        winner = ''
        CPUSlots = []
        moveCounter = 0
        currentPlayer = 'CPU'
        for (let i = 0; i < 9; i++) {
            allSlots[i].textContent = ''
        }
        endGameScreen.setAttribute('id', 'closed')
    })


    function isValidMoveCPU () {
        let randomSlot = ''
        function getRandomInt() {
            Math.floor(Math.random()*10)
            randomSlot = (Math.floor(Math.random()*10))
        } 
        while (openSlots.includes(randomSlot) == false && openSlots.length > 0) {
            getRandomInt()
        }
        return isValidMove(randomSlot)
    }

    function isValidMove(move) {
        let chosenMove = move
        if (openSlots.includes(move)) {
            changePlayer();
            moveSet(move);
            checkIfWinner();
            
            if (playerSlots.length !== CPUSlots.length && CPUSlots.length < 4) {
                isValidMoveCPU()
            }
        } else {
            console.log('this space is already taken!')
        }
    
            function changePlayer() {
                if (currentPlayer == 'Player') {
                    currentPlayer = 'CPU'
                    console.log('It is now CPU turn')
                } else if (currentPlayer == 'CPU') {
                    currentPlayer = 'Player'
                    console.log('It is now Player turn')
                }
            }
    
            function moveSet () {
                for (let i = 0; i < 9 ; i++) {
                    if (chosenMove == openSlots[i]) {
                        console.log(currentPlayer  + ' chose ' + openSlots[i] + ' where i = ' + i)
                        if (currentPlayer == 'Player') {
                        playerSlots.push(openSlots[i])
                        allSlots[i].textContent = 'o'
                        moveCounter++
                    }   else {
                        CPUSlots.push(openSlots[i]);
                        allSlots[i].textContent = 'x'
                        moveCounter++
                    }
                        openSlots[i]='taken';   
                        console.log('availble slots are now ' + openSlots)
                        console.log('player chosen slots are ' + playerSlots)
                        console.log('CPU chosen slots are ' + CPUSlots)
                    }
                }
            }
    
            function checkIfWinner() {
                // Checks for Player's winning conditions
                if (playerSlots.includes(1) && playerSlots.includes(2) && playerSlots.includes(3)) {
                    console.log('player wins!');
                    winner = 'player'
                    winnerAnnouncement.textContent = 'You won! Play again?'
                    endGameScreen.setAttribute('id','open')
                }
                if (playerSlots.includes(4) && playerSlots.includes(5) && playerSlots.includes(6)) {
                    console.log('player wins!');
                    winner = 'player'
                    winnerAnnouncement.textContent = 'You won! Play again?'
                    endGameScreen.setAttribute('id','open')
                } 
                if (playerSlots.includes(7) && playerSlots.includes(8) && playerSlots.includes(9)) {
                    console.log('player wins!');
                    winner = 'player'
                    winnerAnnouncement.textContent = 'You won! Play again?'
                    endGameScreen.setAttribute('id','open')
                }
                if (playerSlots.includes(1) && playerSlots.includes(4) && playerSlots.includes(7)) {
                    console.log('player wins!');
                    winner = 'player'
                    winnerAnnouncement.textContent = 'You won! Play again?'
                    endGameScreen.setAttribute('id','open')
                }
                if (playerSlots.includes(2) && playerSlots.includes(5) && playerSlots.includes(8)) {
                    console.log('player wins!');
                    winner = 'player'
                    winnerAnnouncement.textContent = 'You won! Play again?'
                    endGameScreen.setAttribute('id','open')
                }
                if (playerSlots.includes(3) && playerSlots.includes(6) && playerSlots.includes(9)) {
                    console.log('player wins!');
                    winner = 'player'
                    winnerAnnouncement.textContent = 'You won! Play again?'
                    endGameScreen.setAttribute('id','open')
                }
                if (playerSlots.includes(1) && playerSlots.includes(5) && playerSlots.includes(9)) {
                    console.log('player wins!');
                    winner = 'player'
                    winnerAnnouncement.textContent = 'You won! Play again?'
                    endGameScreen.setAttribute('id','open')
                }
                if (playerSlots.includes(3) && playerSlots.includes(5) && playerSlots.includes(7)) {
                    console.log('player wins!');
                    winner = 'player'
                    winnerAnnouncement.textContent = 'You won! Play again?'
                    endGameScreen.setAttribute('id','open')
                }

                // Checks for CPU's winning conditions
                if (CPUSlots.includes(1) && CPUSlots.includes(2) && CPUSlots.includes(3)) {
                    console.log('CPU wins!');
                    winner = 'CPU'
                    winnerAnnouncement.textContent = 'You lost! Play again?'
                    endGameScreen.setAttribute('id','open')
                }
                if (CPUSlots.includes(4) && CPUSlots.includes(5) && CPUSlots.includes(6)) {
                    console.log('CPU wins!');
                    winner = 'CPU'
                    winnerAnnouncement.textContent = 'You lost! Play again?'
                    endGameScreen.setAttribute('id','open')
                } 
                if (CPUSlots.includes(7) && CPUSlots.includes(8) && CPUSlots.includes(9)) {
                    console.log('CPU wins!');
                    winner = 'CPU'
                    winnerAnnouncement.textContent = 'You lost! Play again?'
                    endGameScreen.setAttribute('id','open')
                }
                if (CPUSlots.includes(1) && CPUSlots.includes(4) && CPUSlots.includes(7)) {
                    console.log('CPU wins!');
                    winner = 'CPU'
                    winnerAnnouncement.textContent = 'You lost! Play again?'
                    endGameScreen.setAttribute('id','open')
                }
                if (CPUSlots.includes(2) && CPUSlots.includes(5) && CPUSlots.includes(8)) {
                    console.log('CPU wins!');
                    winner = 'CPU'
                    winnerAnnouncement.textContent = 'You lost! Play again?'
                    endGameScreen.setAttribute('id','open')
                }
                if (CPUSlots.includes(3) && CPUSlots.includes(6) && CPUSlots.includes(9)) {
                    console.log('CPU wins!');
                    winner = 'CPU'
                    winnerAnnouncement.textContent = 'You lost! Play again?'
                    endGameScreen.setAttribute('id','open')
                }
                if (CPUSlots.includes(1) && CPUSlots.includes(5) && CPUSlots.includes(9)) {
                    console.log('CPU wins!');
                    winner = 'CPU'
                    winnerAnnouncement.textContent = 'You lost! Play again?'
                    endGameScreen.setAttribute('id','open')
                }
                if (CPUSlots.includes(3) && CPUSlots.includes(5) && CPUSlots.includes(7)) {
                    console.log('CPU wins!');
                    winner = 'CPU'
                    winnerAnnouncement.textContent = 'You lost! Play again?'
                    endGameScreen.setAttribute('id','open')
                }
                if (winner == '' && moveCounter == 9) {
                    console.log('Its a draw!')
                    winnerAnnouncement.textContent = 'Its a draw! Play again?'
                    endGameScreen.setAttribute('id','open')
                }
            }
    }
return {
    isValidMove, 
    isValidMoveCPU,
    settingUpBoard
}
})()

gameBoard.settingUpBoard()