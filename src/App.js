import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './constants/paths';
import Home from './pages/Home';
import ImageDetails from './pages/ImageDetails';
import ImageDetailsProvider from './context/ImageDetailsProvider';

const App = () => {
  return (
    <ImageDetailsProvider>
      <div className="image-gallery-wrapper">
        <div className="image-gallery-inner-container">
          <BrowserRouter>
            <Routes>
              <Route exact path={routes.homePagePath} element={<Home />} />
              <Route
                exact
                path={routes.imageDetailsPath}
                element={<ImageDetails />}
              />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </ImageDetailsProvider>
  );
};

export default App;
