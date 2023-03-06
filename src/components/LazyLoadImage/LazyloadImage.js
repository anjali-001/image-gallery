import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyloadImage = ({image={}, className="", wrapperClassName=""}) => 
<LazyLoadImage className={className}
alt={image.alt}
effect="blur"
src={image.src}
wrapperClassName={wrapperClassName}
/>

export default LazyloadImage