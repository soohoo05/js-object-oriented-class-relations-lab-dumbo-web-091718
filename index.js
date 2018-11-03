store = {drivers: [], passengers: [], trips: []};

driverId = 0
class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this);
  }
  trips(){
    return store.trips.filter(function(trip) {
      return trip.driverId == this.id
    }.bind(this));
  }
  passengers(){
    return this.trips().map(function(trip){
      return trip.passenger();
    }.bind(this))
  }
}

passId = 0
class Passenger {
  constructor(name){
    this.id = ++passId;
    this.name = name;
    store.passengers.push(this);
  }
  trips(){
    return store.trips.filter(function(trip) {
      return trip.passengerId == this.id
    }.bind(this));
  }
  drivers(){
    return this.trips().map(function(trip){
      return trip.driver();
    }.bind(this))
  }
}

tripId = 0
class Trip {
  constructor(driver, passenger){
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }
  passenger(){
    return store.passengers.find((passenger) => passenger.id == this.passengerId);
  }
  driver(){
    return store.drivers.find((driver) => driver.id == this.driverId);
  }

}
