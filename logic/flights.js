function Flights() {
 
    function calculateNumberOfFlights(passengerNum, flightCapacity){

        if (passengerNum <= 0){
           throw new Error("The number of passengers must be a positive integer value");
        } 

        if (flightCapacity <= 0){
            throw new Error ("The capacity of the flight must be a positive integer value");
        }

        return passengerNum % flightCapacity === 0 
        ? passengerNum / flightCapacity 
        : Math.floor((passengerNum / flightCapacity + 1));

    }

    function checkAircraftRevision(distanceLimit, distancesArray){

        let totalDistance = distancesArray.reduce((accumulator, current) => {

            return accumulator += current;

        }, 0);

    let string = '';
        console.log(totalDistance > (distanceLimit / 2) && totalDistance <= (distanceLimit * 0.75));
    
    switch(true){
            case  (totalDistance <= (distanceLimit / 2)) : 
             string = "The revision needs to be done within the next 3 month\'s";
              break;
            case (totalDistance > (distanceLimit / 2) && totalDistance <= (distanceLimit * 0.75)) :
                string = "The revision needs to be done within the next 2 month\'s";
              break;
              case (totalDistance > (distanceLimit * 0.75) && totalDistance <= distanceLimit) :
              string = "The revision needs to be done within the next month";
              break;
              case (totalDistance > distanceLimit) :
                  throw Error();
       }
       return string;
    }

 
    return {calculateNumberOfFlights, checkAircraftRevision};
}



module.exports = Flights();