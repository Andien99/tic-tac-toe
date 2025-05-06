const gameBoard = (function() {
    const openSlots = ['1', '2', '3', '4', '5', '6','7', '8', '9'];
    const playerSlots = []
    const CPUSlots = []
    let winner = ''
    let currentPlayer = 'CPU'

    function isValidMoveCPU () {
        let randomSlot = ''
        function getRandomInt() {
            Math.floor(Math.random()*10)
            randomSlot = (Math.floor(Math.random()*10)).toString()
        } 
        while (openSlots.includes(randomSlot) == false && openSlots.length > 0) {
            getRandomInt()
        }
        return isValidMove(randomSlot)
    }

    function isValidMove(move) {
        let chosenMove = move
        if (openSlots.includes(chosenMove)) {
            changePlayer();
            moveSet(move);
            checkIfWinner();
            if (playerSlots.length !== CPUSlots.length) {
                if (playerSlots.includes('4') && playerSlots.includes('5') && playerSlots.includes('6')) {
                    console.log('player wins!')
                } 
                if (playerSlots.includes('7') && playerSlots.includes('8') && playerSlots.includes('9')) {
                    console.log('player wins!')
                }
                if (playerSlots.includes('1') && playerSlots.includes('4') && playerSlots.includes('7')) {
                    console.log('player wins!')
                }
                if (playerSlots.includes('2') && playerSlots.includes('5') && playerSlots.includes('8')) {
                    console.log('player wins!')
                }
                if (playerSlots.includes('3') && playerSlots.includes('6') && playerSlots.includes('9')) {
                    console.log('player wins!')
                }
                if (playerSlots.includes('1') && playerSlots.includes('5') && playerSlots.includes('9')) {
                    console.log('player wins!')
                }
                if (playerSlots.includes('3') && playerSlots.includes('5') && playerSlots.includes('7')) {
                    console.log('player wins!')
                }
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
                    }   else {
                        CPUSlots.push(openSlots[i])
                    }
                        openSlots.splice(i,1);   
                        console.log('availble slots are now ' + openSlots)
                        console.log('player chosen slots are ' + playerSlots)
                        console.log('CPU chosen slots are ' + CPUSlots)
                    }
                }
            }
    
            function checkIfWinner() {
                // Checks for Player's winning conditions
                if (playerSlots.includes('1') && playerSlots.includes('2') && playerSlots.includes('3')) {
                    console.log('player wins!');
                    winner = 'player'
                }
                if (playerSlots.includes('4') && playerSlots.includes('5') && playerSlots.includes('6')) {
                    console.log('player wins!');
                    winner = 'player'
                } 
                if (playerSlots.includes('7') && playerSlots.includes('8') && playerSlots.includes('9')) {
                    console.log('player wins!');
                    winner = 'player'
                }
                if (playerSlots.includes('1') && playerSlots.includes('4') && playerSlots.includes('7')) {
                    console.log('player wins!');
                    winner = 'player'
                }
                if (playerSlots.includes('2') && playerSlots.includes('5') && playerSlots.includes('8')) {
                    console.log('player wins!');
                    winner = 'player'
                }
                if (playerSlots.includes('3') && playerSlots.includes('6') && playerSlots.includes('9')) {
                    console.log('player wins!');
                    winner = 'player'
                }
                if (playerSlots.includes('1') && playerSlots.includes('5') && playerSlots.includes('9')) {
                    console.log('player wins!');
                    winner = 'player'
                }
                if (playerSlots.includes('3') && playerSlots.includes('5') && playerSlots.includes('7')) {
                    console.log('player wins!');
                    winner = 'player'
                }

                // Checks for CPU's winning conditions
                if (CPUSlots.includes('1') && CPUSlots.includes('2') && CPUSlots.includes('3')) {
                    console.log('CPU wins!');
                    winner = 'CPU'
                }
                if (CPUSlots.includes('4') && CPUSlots.includes('5') && CPUSlots.includes('6')) {
                    console.log('CPU wins!');
                    winner = 'CPU'
                } 
                if (CPUSlots.includes('7') && CPUSlots.includes('8') && CPUSlots.includes('9')) {
                    console.log('CPU wins!');
                    winner = 'CPU'
                }
                if (CPUSlots.includes('1') && CPUSlots.includes('4') && CPUSlots.includes('7')) {
                    console.log('CPU wins!');
                    winner = 'CPU'
                }
                if (CPUSlots.includes('2') && CPUSlots.includes('5') && CPUSlots.includes('8')) {
                    console.log('CPU wins!');
                    winner = 'CPU'
                }
                if (CPUSlots.includes('3') && CPUSlots.includes('6') && CPUSlots.includes('9')) {
                    console.log('CPU wins!');
                    winner = 'CPU'
                }
                if (CPUSlots.includes('1') && CPUSlots.includes('5') && CPUSlots.includes('9')) {
                    console.log('CPU wins!');
                    winner = 'CPU'
                }
                if (CPUSlots.includes('3') && CPUSlots.includes('5') && CPUSlots.includes('7')) {
                    console.log('CPU wins!');
                    winner = 'CPU'
                }
                if (winner == '' && openSlots.length == 0) {
                    console.log('Its a draw!')
                }
            }
    }
return {
    isValidMove, 
    isValidMoveCPU
}
})()

function playerMove(move) {
    gameBoard.isValidMove(move)
}
