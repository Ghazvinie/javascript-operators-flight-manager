function Util() {

 function calculateTotalDistributedPassengers(){

    let obj = distributeAllSeatsToPassengers();

    let totalPassengers = obj.vipWithBusiness + obj.vipWithEcono + obj.regWithBusiness + obj.regWithEcono;

    return totalPassengers;

 }

 function calculateTotalNumberOfPassengers(numbersArray){
    return numbersArray.reduce((acc,curr) => acc += curr,0);
 }
return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers};
}

module.exports = Util();
