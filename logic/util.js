const { distributeAllSeatsToAllPassengers } = require("./passengers");

function Util() {

 function calculateTotalDistributedPassengers(object){


    let totalDistributedPassengers = object.vipPassengersWithBusinessSeats + object.vipPassengersWithEconomySeats + object.regularPassengersWithBusinessSeats + object.regularPassengersWithEconomySeats;

    return totalDistributedPassengers;

 }

 function calculateTotalNumberOfPassengers(numbersArray){
    return numbersArray.reduce((acc,curr) => acc += curr,0);
 }
return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers};
}

module.exports = Util();
