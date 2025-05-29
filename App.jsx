import React, { useState, useEffect } from 'react';
import { fetchImages } from './api/unsplash';
import SearchBar from './components/SearchBar';
import WidthFilter from './components/WidthFilter';
import ImageGallery from './components/ImageGallery';
import ImageModal from './components/ImageModal';
import './App.css'; // N'oublie pas d'importer les styles

const App = () => {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('JavaScript');
  const [widthFilter, setWidthFilter] = useState(0);
  const [modalImage, setModalImage] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getImages = async () => {
      try {
        const data = await fetchImages(searchTerm, page);
        const filtered = data.filter((img) => img.width >= widthFilter);
        if (page === 1) {
          setImages(filtered);
        } else {
          setImages((prev) => [...prev, ...filtered]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getImages();
  }, [searchTerm, widthFilter, page]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setPage(1);
  };

  const handleWidthFilter = (e) => {
    setWidthFilter(Number(e.target.value));
    setPage(1);
  };

  const openModal = (img) => setModalImage(img);
  const closeModal = () => setModalImage(null);

  return (
    <div className="App">
      <h1>Unsplash Gallery</h1>
      <div className="filters">
        <SearchBar onSearch={handleSearch} />
        <WidthFilter onFilter={handleWidthFilter} />
      </div>
      <ImageGallery images={images} onImageClick={openModal} />
      {images.length > 0 && (
        <button onClick={() => setPage((prev) => prev + 1)}>See more</button>
      )}
      {modalImage && <ImageModal image={modalImage} onClose={closeModal} />}
    </div>
  );
};

export default App;
