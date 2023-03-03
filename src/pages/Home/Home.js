import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.scss';
import { imageDetailPath } from '../../utils/utils';
import { useImageDetailsContext } from '../../context/ImageDetailsProvider';

const Home = () => {
  const { imagesData, fetchAllImagesData } = useImageDetailsContext();
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllImagesData();
  }, []);

  return (
    <div className="home-image-container">
      {imagesData.sort((a,b) =>  new Date(b.date) - new Date(a.date)).map((item, index) => // sorting the data for getting the latest images first
          <div
            className="each-image"
            onClick={() => {
              navigate(imageDetailPath(index));
            }}
          >
            <img src={item.url} alt="grid"/>
            <p className='overlay-title'>{item.title}</p>
          </div>
        )}
    </div>
  );
};

export default Home;
