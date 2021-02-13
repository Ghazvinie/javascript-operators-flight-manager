function Passengers() {

    function checkFlightCapacity(flightCapacity, passengersArray){
        
        let totalPassengers = passengersArray.reduce((accumulator, current) => {
            return accumulator += current;
        },0);

        if (totalPassengers <= flightCapacity){
            return totalPassengers;
        }else if (totalPassengers > flightCapacity){
            throw new Error(`Flight capacity ${flightCapacity} has been exceeded.`);
        }

    }

   function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, numberOfFlights, businessSeats, economySeats){
       
    let object = {vipPassengers, regularPassengers, numberOfFlights, businessSeats, economySeats};

    businessSeats *= numberOfFlights;
    economySeats *= numberOfFlights;

    let busSeatsLeft = businessSeats - vipPassengers;
    let econoSeatsLeft;
    

    switch(true){
        case (busSeatsLeft === 0) : {
            object.vipPassengersWithBusinessSeats = vipPassengers;
            object.regularPassengersWithBusinessSeats = 0;
            object.vipPassengersWithEconomySeats = 0;
            economySeats > regularPassengers ? object.regularPassengersWithEconomySeats = regularPassengers : object.regularPassengersWithEconomySeats = economySeats;
        }
        break;
        case (busSeatsLeft > 0) : {
            object.vipPassengersWithEconomySeats = 0;    
            object.vipPassengersWithBusinessSeats = vipPassengers;
            busSeatsLeft > regularPassengers ? object.regularPassengersWithBusinessSeats = regularPassengers : object.regularPassengersWithBusinessSeats = busSeatsLeft;
            busSeatsLeft > regularPassengers ? regularPassengers = 0 : regularPassengers -= busSeatsLeft;
            economySeats < regularPassengers ? object.regularPassengersWithEconomySeats = economySeats : object.regularPassengersWithEconomySeats = regularPassengers;
            
       }
       break;
       case (busSeatsLeft < 0) : {
           object.regularPassengersWithBusinessSeats = 0;
           object.vipPassengersWithBusinessSeats = businessSeats;
           businessSeats > economySeats ? object.vipPassengersWithEconomySeats = economySeats : object.vipPassengersWithEconomySeats = vipPassengers - businessSeats;
           businessSeats > economySeats ? object.regularPassengersWithEconomySeats = 0 : econoSeatsLeft = economySeats - object.vipPassengersWithEconomySeats;
           econoSeatsLeft < regularPassengers ? object.regularPassengersWithEconomySeats = econoSeatsLeft : object.regularPassengersWithEconomySeats = regularPassengers;
       }
    }

 return object;

   }

return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
}

module.exports = Passengers();

