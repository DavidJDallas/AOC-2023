
const fs = require('fs');

const readData = () => {
    try{
        const dummyData = fs.readFileSync('./day2dummyinput.txt', {encoding: 'utf8'});
        const realData = fs.readFileSync('./day2input.txt', {encoding: 'utf8'});
        let splitData = realData.split('\n')
        let splitDummyData = dummyData.split('\n')
     
        return {
            realData: splitData,
            dummyData: splitDummyData
        }
    } catch(err){
        console.log(err)
    }
}

//part 1

const meetsCondition = (frequency, colour) => {
    return (frequency > 12 && colour === 'red') ||
            (frequency > 13 && colour === 'green') ||
            (frequency > 14 && colour === 'blue');
}

const processMatch = (match, gameId, includesId) => {
    const [frequency, colour ] = match.split(' ');

    if(meetsCondition(frequency, colour)){
        const currentId = gameId+1;
        includesId.add(currentId)
    }
}

const convertData = (data) => { 

    const includesId = new Set();

    const convertedData = data.flatMap((game, gameId) => {
        const gameParts = game.split(';');

        const coloursAndFrequency = gameParts.flatMap((line) => {
            const matches = line.match(/(\d+)\s*(game|blue|red|green)/gi) || [];

            matches.forEach((match) => {
                processMatch(match, gameId, includesId);
            });
        })
        return coloursAndFrequency.filter(Boolean);
    })
    return includesId
};

const sumIds = (data, set) => {
    return Array.from({ length: data.length }, (_, i) => i + 1)
        .filter((id) => !set.has(id))
        .reduce((total, id) => total + id, 0);
};




//part 2

//What's the fewest number of cubes of each colour that could have been in the bag to make the game possible?

//Power of a set of cubes = numbers of red, green and blue cubes multipled together.


const convertDataToArrOfObjects = (data) => {
    const includesId = new Set();

    const convertedData = data.flatMap((game, gameId) => {
        const gameParts = game.split(',:;');
    
     

        return gameParts.flatMap((line) => {
            const matches = line.match(/(\d+)\s*(game|blue|red|green)/gi) || [];
      
            return {
                gameId: gameId+1,
                values: matches
            }
            // return {
            //     gameId: gameId+1,
            //     colour: colour,
            //     frequency: frequency
            // }
        
            
        })
  
    })
    return convertedData
}


const {dummyData, realData} = readData();
console.log(convertDataToArrOfObjects(dummyData))
// console.log(convertData(dummyData))
// console.log(sumIds(realData, convertData(realData)))
//console.log(dummyData)