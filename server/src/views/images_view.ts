import Image from '../models/Image';

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `http://localhost:3030/uploads/${image.url}`,
    };
  },
  
  renderMany(images: Image[]) {
    return images.map(image => this.render(image));
  }
};