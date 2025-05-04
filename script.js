const openSlots = ['s1', 's2', 's3', 's4', 's5', 's6','s7', 's8', 's9'];

// function gameBoard (name) {
//     let currentLength = openSlots.length;
//     function moveSet (move) {
//         for (let i = 0; i < 9 ; i++) {
//             if (move == openSlots[i]) {
//                 console.log(name + openSlots[i] + ' where i is = ' + i)
//                 openSlots.splice(i,1);   
//                 console.log(openSlots)
//             }
//         }
//         if (currentLength == openSlots.length) {
//             console.log('this space is already taken!')
//         }
//     }
//     return moveSet()
// }
const tester = ['s1', 's2', 's3', 's4', 's5', 's6','s7', 's8', 's9']

const gameBoard = (function(name) {
    const currentLength = openSlots.length;
    const moveSet = (move) => {
        for (let i = 0; i < 9 ; i++) {
            if (move == openSlots[i]) {
                console.log( `${name}` + openSlots[i] + ' where i is = ' + i)
                openSlots.splice(i,1);   
                console.log(openSlots)
            }
        }
        if (currentLength == openSlots.length) {
            console.log('this space is already taken!')
        }
    };
return moveSet
})();

const player = gameBoard('Andy')