
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





const findAndSumNumbers = (data) => {
   const numbersRegEx = /^\d+$/

   //Find values and return an array of values
   const getNumbers = data.map((line) => {
        const numberArray = line.match(/\d+/g);
        const firstDigit = numberArray[0].slice(0,1);
        const lastDigit = numberArray[numberArray.length-1].slice(-1);

        return Number(firstDigit + lastDigit)
   })
   //Sum up all the values
   return getNumbers.reduce((a,b) => a+b)
}  


//readData()

const {realData, dummyData} = readData()
 console.log(findAndSumNumbers(realData))
 

