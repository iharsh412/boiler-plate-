import { useEffect, useState } from 'react';
import './navbar.css';
import { onAuthStateChanged, User } from 'firebase/auth';
// eslint-disable-next-line import/order
import { Link, useNavigate } from 'react-router-dom';
import ICONS from '../../../../assets';
import { auth } from '../../../../firebase';

export default function Navbar() {
  const navigate = useNavigate();
  const [area, setArea] = useState<string>('India');
  const [objects, setObjects] = useState<string>('tyty');
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for existing logged-in user on mount
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, [auth]);
  function onClickSell() {
    if (user) {
      navigate('/post');
    } else {
      navigate('./login');
    }
  }

  return (
    <div className="home_nav_wrapper">
      <div className="home_nav">
        <span className="home_nav_logo">
          <img src={ICONS.Olx} alt="" />
        </span>
        <span className="home_nav_input_area">
          <img
            src={ICONS.searchIcon}
            alt="search"
            className="home_nav_input_area_search"
          />
          <input
            type="text"
            className="home_nav_input_area_field"
            placeholder="Search city, area or loacalit "
            value={area}
            onChange={(e) => {
              setArea(e.target.value);
            }}
          />
          <img
            src={ICONS.upDown}
            alt="upDown"
            className="home_nav_input_area_upDown"
          />
        </span>

        <span className="home_nav_input_objects">
          <input
            type="text"
            className="home_nav_input_objects_field"
            placeholder="Find Cars, Mobile Phones and more"
            value={objects}
            onChange={(e) => {
              setObjects(e.target.value);
            }}
          />
          <img
            className="home_nav_input_objects_icon"
            src={ICONS.searchIconWhite}
            alt="search"
          />
        </span>
        <span className="home_nav_language_Dropdown_Parent">
          <span className="home_nav_language">ENGLISH</span>
          <span className="home_nav_language_dropdown">
            <img
              src={ICONS.upDown}
              alt="upDown"
              className="home_nav_language_dropdown_img"
            />
          </span>
        </span>

        <span className="home_nav_cart_login_sell">
          <span className="home_nav_cart">
            <img
              src={ICONS.heartIcon}
              alt="cart"
              className="home_nav_cart_icon"
            />
          </span>

          <Link to="/login" className="home_nav_login">
            {user ? 'Logout' : 'Login'}
          </Link>
          <button type="button" className="home_nav_sell" onClick={onClickSell}>
            <img
              src={ICONS.sellImage}
              alt="sell"
              className="home_nav_sell_icon"
            />
            <span className="home_nav_sell_inner">
              <img
                src={ICONS.addIcon}
                alt="addIcon"
                className="home_nav_sell_add"
              />
              <span className="home_nav_sell_text">SELL</span>
            </span>
          </button>
        </span>
      </div>
    </div>
  );
}
