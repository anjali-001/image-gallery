import React, { useEffect, useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import { useImageDetailsContext } from '../../context/ImageDetailsProvider';
import { imageDetailPath } from '../../utils/utils';
import './ImageDetails.scss'
import LeftArrowIcon from '../../images/icons/arrow-left-circle.svg'
import RightArrowIcon from '../../images/icons/arrow-right-circle.svg'
import { routes } from '../../constants/paths';

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
    <>
    <div className='back-button' onClick={() => navigate(routes.homePagePath)}>Back to Home</div>
    <div className='image-details-wrapper'>
      <img src={imageData?.url} className="image-detail-img" alt="day" />
      <p className='title'>{imageData?.title}</p>
      <div className='description'>{imageData?.explanation}</div>
    {imageData?.index> 0 && <div className='arrow left-arrow'  onClick={handleLeftIconClick}><img  src={LeftArrowIcon}/></div>}
    {imageData?.index < imagesData.length-1 && <div className='arrow right-arrow'  onClick={handleRightIconClick}><img src={RightArrowIcon}/></div>}
    </div>
    </>
  );
};

export default ImageDetails;
