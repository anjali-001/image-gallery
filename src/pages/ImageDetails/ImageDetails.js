import React, { useEffect, useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import { useImageDetailsContext } from '../../context/ImageDetailsProvider';
import { imageDetailPath } from '../../utils/utils';
import './ImageDetails.scss'
import LeftArrowIcon from '../../images/icons/arrow-left-circle.svg'
import RightArrowIcon from '../../images/icons/arrow-right-circle.svg'

const ImageDetails = () => {
  const {uuid} = useParams()
  const { imagesData } = useImageDetailsContext();
  const [imageData, setImageData] = useState({})
  const navigate = useNavigate();


  const handleLeftIconClick = () => {
    navigate(imageDetailPath(imageData?.index - 1))
  }

  const handleRightIconClick = () => {
    navigate(imageDetailPath(imageData?.index + 1))
  }

  useEffect(() => {
    const currentImageData = imagesData.find((item) => item.index === Number(uuid))
    setImageData(currentImageData)
  }, [uuid])

  return (
    <div className='image-details-wrapper'>
    {imageData?.index> 0 && <div className='icon'  onClick={handleLeftIconClick}><img  src={LeftArrowIcon}/></div>}
    <div className='container'>
      <img src={imageData?.url} />
      <div>
      <p>{imageData?.title}</p>
      <div>{imageData?.explanation}</div>
      </div>
    </div>
    {imageData?.index < imagesData.length-1 && <div className='icon'  onClick={handleRightIconClick}><img src={RightArrowIcon}/></div>}
    </div>
  );
};

export default ImageDetails;
