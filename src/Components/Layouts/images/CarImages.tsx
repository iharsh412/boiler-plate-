import './CarImages.css';
import { ReactNode } from 'react';
import ICONS from '../../../assets';

interface ImageProps {
  data: {
    price: ReactNode;
    images: string;
    id: number;
    name: string;
    imageUrl: string;
  };
}

// eslint-disable-next-line react/function-component-definition
const Images: React.FC<ImageProps> = ({ data }) => {
  return (
    <div className="carImages_wrapper">
      <div className="carImages">
        <img src={data.images[0]} alt="watch" className="carImages_image" />
        <img src={ICONS.heartIcon} alt="cart" className="carImage_cart" />
      </div>
      <div className="carImages_content">
        <span className="carImage_cost">{data.price}</span>
        <span className="carImage_distance">2014 -94,000 km</span>
        <span className="carImage_name">
          MAHINDRA XUV500 2014 DIESEL 940 HELLO
        </span>
        <span className="carImage_placeAndDate">
          <span className="carImage_place">SAMUNDRAPUR, MAHARASHTRA</span>
          <span className="carImage_date">MAR 07</span>
        </span>
      </div>
    </div>
  );
};
export default Images;
