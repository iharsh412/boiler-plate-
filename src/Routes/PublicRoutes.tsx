import { Navigate } from 'react-router-dom';
import { ROUTES_CONFIG, WILDCARD_ROUTES } from '../Shared/Constants';
// import Dashboard from '../Views/Dashboard/Dashboard';
import { CustomRouter } from './RootRoutes';
eslint-disable-next-line import/extensions
import Home from '../Views/HomeImage/HomeImageSection.tsx';
eslint-disable-next-line import/extensions
import CarSection from '../Views/CarSection/CarSection.tsx';
import MotorcycleSection from '../Views/MotorcycleSection/Motorcycle.tsx';
import MobilePhoneSection from '../Views/MobileSection/MobileSection.tsx';
import Login from '../Views/Login/LoginLayout.tsx';
import ContinueWithPhone from '../Views/Login/LoginContinueWithPhone.tsx';
import LoginSms from '../Views/Login/OtpSection/LoginOtp.tsx';
import SellSection from '../Views/SellSection/SellSection.tsx';
import Home from '../Views/Home';

// eslint-disable-next-line import/prefer-default-export
export const PUBLIC_ROUTES: Array<CustomRouter> = [
  // eslint-disable-next-line no-irregular-whitespace
  // { ̰
  //   path: ROUTES_CONFIG.HOMEPAGE.path,
  //   element: <Dashboard />,
  //   title: ROUTES_CONFIG.HOMEPAGE.title,
  // },
  {
    path: '/',
    element: <Home />,
    title: ROUTES_CONFIG.HOMEPAGE.title,
    children: [
      { index: true, element: <Home /> },
      { path: 'cars', element: <CarSection /> },
      { path: 'motorcycles', element: <MotorcycleSection /> },
      { path: 'mobilephone', element: <MobilePhoneSection /> },
      {
        path: 'login',
        element: <Login />,
      },
      { path: 'loginphone', element: <ContinueWithPhone /> },
      { path: 'loginphonesms', element: <LoginSms /> },
    ],
  },

  // {
  //   path: '/post',
  //   element: <SellSection />,
  //   title: 'Sell Section',
  // },

  {
    path: '*',
    element: <Navigate to={WILDCARD_ROUTES.PUBLIC} />,
    title: 'Rendering wildcard',
  },
];
