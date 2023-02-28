import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useImageDetailsContext } from '../../context/ImageDetailsProvider';

const ImageDetails = ({
  title = 'Title',
  description = 'Image description',
  url = '',
}) => {
  const location = useLocation();
  const { imagesData } = useImageDetailsContext();
  const [imageData, setImageData] = useState(location?.state ?? {});

  console.log({ imagesData });

  return (
    <div>
      <img src={imageData.url} />
      <p>{imageData.title}</p>
      <div>{imageData.explanation}</div>
    </div>
  );
};

export default ImageDetails;
