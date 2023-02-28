import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { GET_ALL_IMAGES_DATA } from '../constants/ApiUrls';
import { data } from '../constants/data';
import { getUuid, noop } from '../utils/utils';

const ImageDetailsContext = createContext({
  imagesData: [],
  setImagesData: noop,
  fetchAllImagesData: noop,
});

export const useImageDetailsContext = () => useContext(ImageDetailsContext);

const ImageDetailsProvider = ({ children }) => {
  const [imagesData, setImagesData] = useState([]);

  const client = axios.create({
    baseURL: GET_ALL_IMAGES_DATA,
  });

  const fetchAllImagesData = () => {
    // client
    //   .get()
    //   .then((res) => {
    //     setImagesData(res.data);
    //   })
    //   .catch((e) => console.log(e));

    const formattedData = data.map((item, index) => ({
      uuid: getUuid(item.title, index),
      ...item,
    }));

    setImagesData(formattedData);
  };

  const contextValue = {
    imagesData,
    setImagesData,
    fetchAllImagesData,
  };
  return (
    <ImageDetailsContext.Provider value={contextValue}>
      {children}
    </ImageDetailsContext.Provider>
  );
};

export default ImageDetailsProvider;
