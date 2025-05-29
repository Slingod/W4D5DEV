const ImageModal = ({ image, onClose }) => {
  return (
    <div className="modal" onClick={onClose}>
      <img src={image.urls.regular} alt={image.alt_description} />
    </div>
  );
};

export default ImageModal;
