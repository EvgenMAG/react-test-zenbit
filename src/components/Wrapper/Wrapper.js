import React from 'react';
import styled from 'styled-components';
import { device } from '../../device/device.js';
import imgDesctop from '../../images/bgDesctop.png';
import mobileYellow from '../../images/yellow_cartoon.png';
import mobileRed from '../../images/red_cartoon.png';
import mobileGreen from '../../images/green.png';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media ${device.mobileL} {
    width: 425px;
    height: 675px;
    background-image: url(${mobileYellow}), url(${mobileRed}),
      url(${mobileGreen});
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: left top, left bottom, right top;
  }

  @media ${device.desktop} {
    width: 1440px;
    height: 1128px;
    background-image: url(${imgDesctop});
  }
`;

export default Wrapper;
