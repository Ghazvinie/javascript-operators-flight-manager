const { distributeAllSeatsToAllPassengers } = require("./passengers");

function Util() {

 function calculateTotalDistributedPassengers(object){


    let totalDistributedPassengers = object.vipPassengersWithBusinessSeats + object.vipPassengersWithEconomySeats + object.regularPassengersWithBusinessSeats + object.regularPassengersWithEconomySeats;

    return totalDistributedPassengers;

 }

 function calculateTotalNumberOfPassengers(numbersArray){
    return numbersArray.reduce((acc,curr) => acc += curr,0);
 }

 function checkInput(input){
    if (input == false || isNaN(input)){
       throw new Error ('Falsy Value');
    }
 }

 function calculateTotalDistance(distancesArray){
   return distancesArray.filter(element => element > 0)
                        .reduce((acc, curr) => acc += curr,0);
 }

 function calculateBonusPoints(distancesByVip, distancesByEco, businessBonus, ecoBonus){

   let totalBusDistance = distancesByVip.filter(element => element > 0).reduce((acc, curr) => acc += curr,0);
   let totalEcoDistance = distancesByEco.filter(element => element > 0).reduce((acc, curr) => acc += curr,0);

   let businessPoints = (totalBusDistance / 100) * businessBonus;
   let ecoPoints = (totalEcoDistance / 100) * ecoBonus;

   return businessPoints + ecoPoints;
 }

return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance, calculateBonusPoints};
}

module.exports = Util();
