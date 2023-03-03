import React, { useEffect, useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import { useImageDetailsContext } from '../../context/ImageDetailsProvider';
import { imageDetailPath } from '../../utils/utils';
import './ImageDetails.scss'
import LeftArrowIcon from '../../images/icons/arrow-left-circle.svg'
import RightArrowIcon from '../../images/icons/arrow-right-circle.svg'
import BackButtonIcon from '../../images/icons/arrow-left.svg'
import { routes } from '../../constants/paths';

const ImageDetails = () => {
  const {uuid} = useParams()
  const { imagesData, fetchAllImagesData } = useImageDetailsContext();
  const [imageData, setImageData] = useState({})
  const navigate = useNavigate();


  const handleLeftIconClick = () => {
    navigate(imageDetailPath(imageData?.index - 1))
  }

  const handleRightIconClick = () => {
    navigate(imageDetailPath(imageData?.index + 1))
  }


  useEffect(() => {
    if(!imagesData.length)
    {
      fetchAllImagesData()
    }
  }, [])


  useEffect(() => {
    const currentImageData = imagesData.find((item) => item.index === Number(uuid))
    setImageData(currentImageData)
  }, [uuid, imagesData])

  
  

  return (
    <>
    <div className='back-button-container' onClick={() => navigate(routes.homePagePath)}><img src={BackButtonIcon} alt="back button"/><span>Home</span></div>
    <div className='image-details-wrapper'>
      <img src={imageData?.url} className="image-detail-img" alt="day" />
      <div className='title-header-wrapper'>{imageData?.title}<div className='date'>{imageData?.date}</div></div>
      <div className='description'>{imageData?.explanation}</div>
    {imageData?.index> 0 && <div className='arrow left-arrow'  onClick={handleLeftIconClick}><img  src={LeftArrowIcon} alt="left arrow"/></div>}
    {imageData?.index < imagesData.length-1 && <div className='arrow right-arrow'  onClick={handleRightIconClick}><img src={RightArrowIcon} alt="right-arrow"/></div>}
    </div>
    </>
  );
};

export default ImageDetails;
