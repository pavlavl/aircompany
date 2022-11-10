const PassengerPlane = require('./Planes/PassengerPlane');
const MilitaryPlane = require('./Planes/MilitaryPlane');
const MilitaryType = require('./models/militaryType');
const ExperimentalPlane = require('./Planes/experimentalPlane');


class Airport {

     getPassengerPlane() {
        var passengerPlanes = [];
        for (let passenger of this.planes) {
            if (passenger instanceof PassengerPlane) {passengerPlanes.push(p);}
        }
        return passengerPlanes;
    }

    getMilitaryPlanes() {
        let militaryPlanes = [];
        this.planes.forEach(plane => {
            if (plane instanceof MilitaryPlane) {
                militaryPlanes.push(plane);
            }
            else{}
        });
        
        return militaryPlanes;
    }

    getPassengerPlaneWithMaxPassengersCapacity() {
        let passengerPlanes = this.getPassengerPlane();
        let planeWithMaxCapacity = passengerPlanes[0];
        for (let i = 0; i < passengerPlanes.length; i++) {
            if (passengerPlanes[i].getPassengersCapacity() > planeWithMaxCapacity.getPassengersCapacity()) {
                planeWithMaxCapacity = passengerPlanes[i];
            }
        }
        return planeWithMaxCapacity;
    }


    getTransportMilitaryPlanes(){
        let transportMilitaryPlanes = [];
        let militaryPlanes = this.getMilitaryPlanes();
        for (let i = 0; i < militaryPlanes.length; i++) {
            if (militaryPlanes[i].getMilitaryType() === MilitaryType.TYPE_TRANSPORT) {
                transportMilitaryPlanes.push(militaryPlanes[i]);
            }
        }
        return transportMilitaryPlanes;
    }


    getBomberMilitaryPlanes()
    {
        let bomberMilitaryPlanes = [];
        let militaryPlanes = this.getMilitaryPlanes();
        for (let i = 0; i < militaryPlanes.length; i++) {
            if (militaryPlanes[i].getMilitaryType() === MilitaryType.BOMBER) {
                bomberMilitaryPlanes.push(militaryPlanes[i]);
            }
        }
        return bomberMilitaryPlanes;
    }

    constructor(planes) {
        this.planes = planes;
    }


    getExperimentalPlanes() {
        let experimentalPlanes  = [];
        this.planes.forEach(plane => {
            if (plane instanceof ExperimentalPlane) {
                experimentalPlanes.push(plane);
            }
        });
        
        return experimentalPlanes;
    }



    sortByMaxDistance() {
        this.planes.sort((a, b) => (a.GetMaxFlightDistance() > b.GetMaxFlightDistance()) ? 1 : -1);
        return this;
    }

    /**
     * Sorts by max speed
     * @return Airport
     */
    sortByMaxSpeed() {
        this.planes.sort((a, b) => (a.getMaxSpeed() > b.getMaxSpeed()) ? 1 : -1);
        return this;
    }

    sortByMaxLoadCapacity() {
        this.planes.sort((a, b) => (a.getMinLoadCapacity() > b.getMinLoadCapacity()) ? 1 : -1);
        return this;
    }

    getPlanes() {
        return this.planes;
    }


    static print(planes) {
        return JSON.stringify(planes);
    }
}

module.exports = Airport;
