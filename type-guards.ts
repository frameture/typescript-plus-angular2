class Bike {
  name = 'Bike';
  drive(): void { }
  parkOnKickstand(): void { }
}

class Car {
  name = 'Car';
  drive(): void { }
  autoPark(): void { }
}

function getSomeVehicle(): Bike | Car {
  if (Math.random() < .5) {
    return new Bike();
  } else {
    return new Car();
  }
}

function doINeedDrivingLicense(vehicle: Bike | Car): boolean {
  if (vehicle instanceof Bike) {
    return false;
  } else {
    return true;
  }
}

const vehicle = getSomeVehicle();
const doI = doINeedDrivingLicense(vehicle);
console.log(`vehicle: ${ vehicle.name } do I need my driving license? - ${ doI }`);

function isCar(car: Bike | Car): car is Car {
  return (<Car>car).autoPark !== undefined;
}

function parkCorrectly(vehicle: Bike | Car): void {
  if (isCar(vehicle)) {
    vehicle.autoPark();
  } else {
    vehicle.parkOnKickstand();
  }
}