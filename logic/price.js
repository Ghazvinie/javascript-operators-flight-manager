function Prices() {

    function calculateFinalPrice(basePrice, variationPassenger, variationFlight ){

    let finalPrice;

    finalPrice = basePrice + (basePrice/100 * variationPassenger);
    finalPrice += (finalPrice/100 * variationFlight);

     return finalPrice ;
}

  function calculateDefaultFinalPrice(basePrice, passengerType, flightType){
    passengerType = passengerType.toLowerCase();
    flightType = flightType.toLowerCase();

    let finalPrice;

    switch(true){
        case (passengerType == 'regular' && flightType == 'economy') : {
            finalPrice = basePrice + (basePrice/100 * - 5);
            finalPrice += (finalPrice/100 * - 3);
        }
        break;
        case (passengerType == 'regular' && flightType == 'business') : {
            finalPrice = basePrice + (basePrice/100 * - 5);
            finalPrice += (finalPrice/100 * 10);
        }
        break;
        case (passengerType == 'vip' && flightType == 'economy') : {
            finalPrice = basePrice + (basePrice/100 * 5);
            finalPrice += (finalPrice/100 * - 3);
        }
        break;
        case (passengerType == 'vip' && flightType == 'business') : {
            finalPrice = basePrice + (basePrice/100 * 5);
            finalPrice += (finalPrice/100 * 10);
        }
        break;
    }
     return finalPrice; 
  }

  function calculateTotalFinalPrice(numOfSeats, passengerType, flightType, basePrice){


    passengerType = passengerType.toLowerCase();
    flightType = flightType.toLowerCase();

    let finalPrice;

    switch(true){
        case (passengerType == 'regular' && flightType == 'economy') : {
            finalPrice = basePrice + (basePrice/100 * - 5);
            finalPrice += (finalPrice/100 * - 3);
        }
        break;
        case (passengerType == 'regular' && flightType == 'business') : {
            finalPrice = basePrice + (basePrice/100 * - 5);
            finalPrice += (finalPrice/100 * 10);
        }
        break;
        case (passengerType == 'vip' && flightType == 'economy') : {
            finalPrice = basePrice + (basePrice/100 * 5);
            finalPrice += (finalPrice/100 * - 3);
        }
        break;
        case (passengerType == 'vip' && flightType == 'business') : {
            finalPrice = basePrice + (basePrice/100 * 5);
            finalPrice += (finalPrice/100 * 10);
        }
        break;
    }
     return finalPrice * numOfSeats;
  }

    return {calculateFinalPrice, calculateDefaultFinalPrice, calculateTotalFinalPrice};
}

module.exports = Prices();
