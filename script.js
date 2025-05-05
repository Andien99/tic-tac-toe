const gameBoard = (function() {
    const openSlots = ['s1', 's2', 's3', 's4', 's5', 's6','s7', 's8', 's9'];
    const playerSlots = []
    const CPUSlots = []
    console.log('testing')
    let currentPlayer = 'CPU'

    function isValidMove(move) {
        let chosenMove = move
        if (openSlots.includes(chosenMove)) {
            changePlayer();
            moveSet(move);
            checkIfWinner();
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
                        console.log('Player chose ' + openSlots[i] + ' where i is = ' + i)
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
                if (playerSlots.includes('s1') && playerSlots.includes('s2') && playerSlots.includes('s3')) {
                    console.log('player wins!')
                }
                if (playerSlots.includes('s4') && playerSlots.includes('s5') && playerSlots.includes('s6')) {
                    console.log('player wins!')
                } 
                if (playerSlots.includes('s7') && playerSlots.includes('s8') && playerSlots.includes('s9')) {
                    console.log('player wins!')
                }
                if (playerSlots.includes('s1') && playerSlots.includes('s4') && playerSlots.includes('s7')) {
                    console.log('player wins!')
                }
                if (playerSlots.includes('s2') && playerSlots.includes('s5') && playerSlots.includes('s8')) {
                    console.log('player wins!')
                }
                if (playerSlots.includes('s3') && playerSlots.includes('s6') && playerSlots.includes('s9')) {
                    console.log('player wins!')
                }
                if (playerSlots.includes('s1') && playerSlots.includes('s5') && playerSlots.includes('s9')) {
                    console.log('player wins!')
                }
                if (playerSlots.includes('s3') && playerSlots.includes('s5') && playerSlots.includes('s7')) {
                    console.log('player wins!')
                }
            }
    }
return {isValidMove}
})()

function playerMove(move) {
    gameBoard.changePlayer(),
    gameBoard.moveSet(move)
    gameBoard.checkIfWinner()
}
