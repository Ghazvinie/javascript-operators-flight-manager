function Flights() {
 
    function calculateNumberOfFlights(passengerNum, flightCapacity){
       let flights;
        if (passengerNum < 0 || (!Number.isInteger(Number(passengerNum)))){
           throw new Error("The number of passengers must be a positive integer value");
        } 

        if (flightCapacity < 0 || (!Number.isInteger(Number(flightCapacity)))){
            throw new Error ("The capacity of the flight must be a positive integer value");
        }

        passengerNum % flightCapacity === 0 ? flights = passengerNum / flightCapacity : flights = Math.floor(passengerNum / flightCapacity) + 1;

        return flights;

    }

    function checkAircraftRevision(distanceLimit, distancesArray){

        let totalDistance = distancesArray.reduce((accumulator, current) => {

            return accumulator += current;

        }, 0);

    let string = '';

    switch(true){
            case  (totalDistance <= (distanceLimit / 2)) : 
             string = "The revision needs to be done within the next 3 months";
              break;
            case (totalDistance > (distanceLimit / 2) && totalDistance <= (distanceLimit * 0.75)) :
                string = "The revision needs to be done within the next 2 months";
              break;
              case (totalDistance > (distanceLimit * 0.75) && totalDistance <= distanceLimit) :
              string = "The revision needs to be done within the next month";
              break;
              case (totalDistance > distanceLimit) :
                  throw new Error(`Flight maximum allowed distance ${distanceLimit} exceeded.`);
       }
       return string;
    }

    return {calculateNumberOfFlights, checkAircraftRevision};
}



module.exports = Flights();