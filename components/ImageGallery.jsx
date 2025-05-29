import React from 'react';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div className="gallery">
      {images.map((img) => (
        <img
          key={img.id}
          src={img.urls.small}
          alt={img.alt_description}
          onClick={() => onImageClick(img)}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
