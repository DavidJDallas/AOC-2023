
const fs = require('fs');

const readData = () => {
    try{
        const dummyData = fs.readFileSync('./day1dummyinput.txt', {encoding: 'utf8'});
        const realData = fs.readFileSync('./Input.txt', {encoding: 'utf8'});
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


const covertWordsToNumbers = (words) => {
    const converter = {
        one: '1',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nine: '9',
   
    }
    if(converter[words]) return converter[words];

    return words
}


const findAndSumNumbers = (data, regExCriteria) => { 

   //Find values and return an array of values
   const getNumbers = data.map((line) => {
        //This checks each line of the input and matches everything based on the regEx provided. If part 1, it's just looking for digits. If part 2, its looking for digits and words that spell digits. Because of part 2, it checks each regEx match and essentialy hash maps them to convert them across. 
        const numberArray = line.match(regExCriteria).map(element => covertWordsToNumbers(element))
      
        const firstDigit = numberArray[0].slice(0,1);
        const lastDigit = numberArray[numberArray.length-1].slice(-1);   
      
        return Number(firstDigit + lastDigit)
   })
   //Sum up all the values
   return getNumbers.reduce((a,b) => a+b)
}  



const {realData, dummyData} = readData()
//part 1
console.log(findAndSumNumbers(realData, /\d+/g))
//part 2
const part2RegEx = /(?:\d+|one|two|three|four|five|six|seven|eight|nine|ten)/gi

console.log(findAndSumNumbers(realData, part2RegEx))
 

