
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

const convertData = (data) => {
    const convertedData = data.flatMap((game, i) => {
        const includesId = new Set();
        const games = game.split(';');
        const nestedArrayOfColoursAndFrequency = games.flatMap((line, j) => {
            const matched = line.match(/(\d+)\s*(game|blue|red|green)/gi) || [];

            return matched.map((match) => {
                const [frequency, colour] = match.split(' ');
                

                if ((frequency > 12 && colour === 'red') || (frequency > 13 && colour === 'green') || (frequency > 14 && colour === 'blue')) {
                        const currentId = i+1;
                        if(!includesId.has(currentId)){
                            includesId.add(currentId)                         
                        }
                   
                }
                console.log(includesId)


            });
         
        });
        if(!includesId.has(i)){
            return{
                id: i+1,
              
            }
        }
        console.log(includesId.has(4))
        return nestedArrayOfColoursAndFrequency.filter(element => element)
    });

    return convertedData;
};

const sumIds = (data) => {
    console.log(data)
    return data.reduce((a,b) => a + b.id, 0)
}



    





const {dummyData, realData} = readData();

console.log(convertData(dummyData))
console.log(sumIds(convertData(dummyData)))
//console.log(dummyData)