class Place {
    constructor(id, title, image, lat, lng, address) {
      this.id = id.toString();
      this.title = title;
      this.image = image;
      this.lat = lat;
      this.lng = lng;
      this.address = address;
    }
}
  
export default Place;