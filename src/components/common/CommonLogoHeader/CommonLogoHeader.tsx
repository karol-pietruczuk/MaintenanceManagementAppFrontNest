import React from 'react';
import logo from '../../../img/logo.svg';
import './CommonLogoHeader.css';

interface Props {
  imageSize?: number;
  menuMarginTop?: number;
  logoFontSize?: number;
  descriptionVisibility?: boolean;
}

export const CommonLogoHeader = (props: Props) => {
  return (
    <header
      className={"common_logo_header-header"}
      style = {{marginTop: props.menuMarginTop !== undefined ? props.menuMarginTop : 60}}
    >
      <img
        className={"common_logo_header-header--img"}
        src={logo}
        alt="plx logo"
        width={props.imageSize !== undefined ? props.imageSize : 100}
        height={props.imageSize !== undefined ? props.imageSize : 100

        }
      />
      <h1
        className={"common_logo_header-header--h1"}
        style={{fontSize: props.logoFontSize !== undefined ? props.logoFontSize : 24}}
      >
        <strong>plx</strong>
      </h1>
      <h2
        className={"common_logo_header-header--h2"}
        style={{
          fontSize: 14,
          display: !props.descriptionVisibility ? "non2e" : "block"
        }}
      >
        easier work, better work
      </h2>
    </header>
  )
}