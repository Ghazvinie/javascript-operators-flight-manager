const { distributeAllSeatsToAllPassengers } = require("./passengers");

function Util() {

 function calculateTotalDistributedPassengers(object){


    let totalPassengers = object.vipPassengersWithBusinessSeats + object.vipPassengersWithEconomySeats + object.regularPassengersWithBusinessSeats + object.regularPassengersWithEconomySeats;

    return totalPassengers;

 }

 function calculateTotalNumberOfPassengers(numbersArray){
    return numbersArray.reduce((acc,curr) => acc += curr,0);
 }
return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers};
}

module.exports = Util();
