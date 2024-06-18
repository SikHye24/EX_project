import React, { createContext, useState, useContext } from 'react';

const ImageContext = createContext();

export const useImageContext = () => useContext(ImageContext);

export const ImageProvider = ({ children }) => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');

  return (
    <ImageContext.Provider value={{ image, setImage, error, setError }}>
      {children}
    </ImageContext.Provider>
  );
};

export default ImageContext;
