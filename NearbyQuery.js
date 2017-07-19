const loadNearbyTravelCenter = require('./TravelCenterGeoQuery');

class NearbyQuery {
  constructor(latitude, longitude, radius, nearbyStationService, parkingspaceService, flinksterService) {
    this.radius = radius;
    this.nearbyStationService = nearbyStationService;
    this.parkingspaceService = parkingspaceService;
    this.flinksterService = flinksterService;
    this.latitude = latitude;
    this.longitude = longitude;
  }

  get parkingSpaces() {
    return this.parkingspaceService.nearbyParkingspaces(this.latitude, this.longitude);
  }

  get travelCenter() {
    return loadNearbyTravelCenter(this.latitude, this.longitude);
  }

  flinksterCars(args) {
    return this.flinksterService.nearbyFlinksterCars(this.latitude, this.longitude, args.radius, args.count, args.offset);
  }

  stations(args) {
  	return this.nearbyStationService.stationNearby(this.latitude, this.longitude, args.radius, args.count, args.offset);
  }

  bikes(args) {
    return this.flinksterService.nearbyFlinksterBikes(this.latitude, this.longitude, args.radius, args.count, args.offset);
  }
}

module.exports = NearbyQuery;
