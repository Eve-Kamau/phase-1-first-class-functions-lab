
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
console.log(drivers);

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}
console.log(returnFirstTwoDrivers(drivers));
//Declare variable returnFirstTwoDrivers with const & assign an anonymous function to it
//Expect Array of Drivers as an argument, return FIRST two drivers to.eql(['Antonia', 'Nuru'])


const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2);
}
console.log(returnLastTwoDrivers(drivers));
//Declare variable returnLastTwoDrivers with const & assign an anonymous function to it
//Expect Array of Drivers as an argument, return LAST two drivers to.eql(['Amari', 'Mo']);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers);
//selectingDrivers — An array containing two elements-functions previously defined(returnFirstTwoDrivers()& returnLastTwoDrivers()

const createFareMultiplier = function(fareX) {
    return function(x) {
       return fareX * x;
    }}
        const fareDoubler = createFareMultiplier(2);
        const fareTripler = createFareMultiplier(3);
        const fareQuadripler = createFareMultiplier(4);
        const fareQuintupler = createFareMultiplier(5);
    
console.log(fareDoubler(2));
console.log(fareTripler(3));
/*createFareMultiplier() — This is a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly.
 For example, if createFareMultiplier() receives an argument of 4, it will return a function that takes in a fare as an argument and quadruples the fare.
fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. 
Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.
fareTripler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it.
Invoke createFareMultiplier() in such a way that the new fareTripler() function accepts a fare as its lone argument and triples it.*/

    
function selectDifferentDrivers(drivers,funct){
    return funct(drivers);
}
console.log(selectDifferentDrivers);
//selectingDrivers — An array containing two elements-functions previously defined(returnFirstTwoDrivers()& returnLastTwoDrivers()











/*function selectingDrivers(ret1,ret2){
const ret1 = returnFirstTwoDrivers;
const ret2 = returnLastTwoDrivers;
const selectingDrivers = ret1.concat(ret2);
return selectingDrivers;
}
console.log(selectingDrivers);*/