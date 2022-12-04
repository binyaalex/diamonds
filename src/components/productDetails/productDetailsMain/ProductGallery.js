import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";
import diamond from '../../../assets/images/diamond.png'

const images = [
    {
        original: diamond,
        thumbnail: diamond,
    },
    {
        original: diamond,
        thumbnail: diamond,
    },
    {
        original: diamond,
        thumbnail: diamond,
    },
];
  
class ProductGallery extends React.Component {
    render() {
      return <ImageGallery items={images} />;
    }
}

export default ProductGallery