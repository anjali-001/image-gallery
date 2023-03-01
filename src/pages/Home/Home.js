import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.scss';
import { getUuid, imageDetailPath } from '../../utils/utils';
import { useImageDetailsContext } from '../../context/ImageDetailsProvider';

const Home = () => {
  const { imagesData, fetchAllImagesData } = useImageDetailsContext();
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllImagesData();
  }, []);

  return (
    <div className="home-image-container">
      {imagesData.map((item, index) => {
        const uuid = getUuid(item.title, index);
        return (
          <div
            className="each-image"
            onClick={() => {
              navigate(imageDetailPath(index));
            }}
          >
            <img src={item.url} />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
