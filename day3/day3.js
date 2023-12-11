const fs = require('fs');

const readData = () => {
    try{
        const dummyData = fs.readFileSync('./day3dummyinput.txt', {encoding: 'utf8'});
        const realData = fs.readFileSync('./day3input.txt', {encoding: 'utf8'});
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

const findPartNumbers = (data, regEx) => {

    //create a 2d array

    const grid = data.map((row) => row.split(''));
    //console.log(grid);
   
}

const noDot = /[^.]/
const {dummyData, realData} = readData();

console.log(findPartNumbers(dummyData, noDot));


//Any number adjacent to a symbol, even diagonally, is a "part number" and should be included in your sum. 
