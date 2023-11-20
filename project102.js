class Vehicle {
    constructor(name, manufacturer, id) {
        this.name = name;
        this.manufacturer = manufacturer;
        this.id = id;
    }
}

class Car extends Vehicle {
    constructor(name, manufacturer, id, type) {
        super(name, manufacturer, id);
        this.type = type;
    }
}

class Plane extends Vehicle {
    constructor(name, manufacturer, id, type) {
        super(name, manufacturer, id);
        this.type = type;
    }
}

class Employee {
    constructor(name, id, dob) {
        this.name = name;
        this.id = id;
        this.dob = dob;
    }
}

class Driver extends Employee {
    constructor(name, id, dob, licenseID) {
        super(name, id, dob);
        this.licenseID = licenseID;
    }
}

class Pilot extends Employee {
    constructor(name, id, dob, licenseID) {
        super(name, id, dob);
        this.licenseID = licenseID;
    }
}

class Reservation {
    constructor(reservationDate, employeeId, vehiclesId, reservationID) {
        this.reservationDate = reservationDate;
        this.employeeId = employeeId;
        this.vehiclesId = vehiclesId;
        this.reservationID = reservationID;
    }
}

let vehicles = [];
let employees = [];
let reservations = [];


vehicles.push(new Car('Car1', 'Manufacturer1', '1', 'gas'));
vehicles.push(new Car('Car2', 'Manufacturer2', '2', 'electric'));
vehicles.push(new Car('Car3', 'Manufacturer3', '3', 'gas'));
vehicles.push(new Plane('Plane1', 'Manufacturer4', '4', 'jet'));
vehicles.push(new Plane('Plane2', 'Manufacturer5', '5', 'propeller'));


employees.push(new Driver('Driver1', '1', '1990-01-01', 'D1'));
employees.push(new Driver('Driver2', '2', '1992-02-02', 'D2'));
employees.push(new Driver('Driver3', '3', '1994-03-03', 'D3'));
employees.push(new Pilot('Pilot1', '4', '1996-04-04', 'P1'));
employees.push(new Pilot('Pilot2', '5', '1998-05-05', 'P2'));

function assignVehicle(employeeId, vehicleId) {
    let employee = employees.find(e => e.id === employeeId);
    let vehicle = vehicles.find(v => v.id === vehicleId);

    if (employee instanceof Driver && vehicle instanceof Car) {
        reservations.push(new Reservation(new Date(), employeeId, vehicleId, reservations.length + 1));
        console.log('تم الحجز بنجاح');
    } else if (employee instanceof Pilot && vehicle instanceof Plane) {
        reservations.push(new Reservation(new Date(), employeeId, vehicleId, reservations.length + 1));
        console.log('تم الحجز بنجاح');
    } else {
        console.log('لا يمكن الحجز، الرجاء التأكد من توافق الموظف والمركبة');
    }
}

assignVehicle('1', '1');
assignVehicle('4', '4');

console.log(reservations);