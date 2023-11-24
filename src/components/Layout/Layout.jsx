import React from 'react';
import { Outlet } from 'react-router-dom';

import myBgVideo from '../../assets/background_video/earth.mp4'
import BackgroundVideo from '../BackgroundVideo/BackgroundVideo';

const Layout = () => {
  return (
    <>
      <BackgroundVideo src={myBgVideo} />
      <Outlet />
    </>
  );
};

export default Layout;