function Passengers() {

    function checkFlightCapacity(flightCapacity, passengersArray){
        
        let totalPassengers = passengersArray.reduce((accumulator, current) => {
            return accumulator += current;
        });

        if (totalPassengers <= flightCapacity){
            return totalPassengers;
        }else if (totalPassengers > flightCapacity){
            throw Error();
        }

    }

   function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, numberOfFlights, businessSeats, economySeats){
       
    let object = {vipPassengers, regularPassengers, numberOfFlights, businessSeats, economySeats};

    businessSeats *= numberOfFlights;
    economySeats *= numberOfFlights;

    let busSeatsLeft = businessSeats - vipPassengers;
    console.log(busSeatsLeft);
    let econoSeatsLeft;
    

    switch(true){
        case (busSeatsLeft === 0) : {
            object.vipWithBusiness = vipPassengers;
            object.regWithBusiness = 0;
            object.vipWithEcono = 0;
            economySeats > regularPassengers ? object.regWithEcono = regularPassengers : object.regWithEcono = economySeats;
        }
        break;
        case (busSeatsLeft > 0) : {
            object.vipWithEcono = 0;    
            object.vipWithBusiness = vipPassengers;
            busSeatsLeft > regularPassengers ? object.regWithBusiness = regularPassengers : object.regWithBusiness = busSeatsLeft;
            busSeatsLeft > regularPassengers ? regularPassengers = 0 : regularPassengers -= busSeatsLeft;
            economySeats < regularPassengers ? object.regWithEcono = economySeats : object.regWithEcono = regularPassengers;
            
       }
       break;
       case (busSeatsLeft < 0) : {
           object.regWithBusiness = 0;
           object.vipWithBusiness = businessSeats;
           vipPassengers > economySeats ? object.vipWithEcono = economySeats : object.vipWithEcono = vipPassengers - businessSeats;
           vipPassengers > economySeats ? object.regWithEcono = 0 : econoSeatsLeft = economySeats - vipPassengers;
           econoSeatsLeft < regularPassengers ? object.regWithEcono = econoSeatsLeft : object.regWithEcono = regularPassengers;
       }
    }

 return object;

   }

return {distributeAllSeatsToAllPassengers, checkFlightCapacity};
}

module.exports = Passengers();

