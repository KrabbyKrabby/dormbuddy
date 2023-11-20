import React, { Component } from 'react';
import { Pannellum } from "pannellum-react";
import myImage from "../images/room360.jpg"

const ImageViewer360 = (props) => (
  <div className='imageviewer360'>
    <h1>360 View of the Room</h1>
    <Pannellum
        width="100%"
        height="500px"
        image={myImage}
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        onLoad={() => {
            console.log("panorama loaded");
        }}
    >
      <Pannellum.Hotspot
        type="info"
        pitch={11}
        yaw={-167}
        text="Info Hotspot Text 3"
        URL="https://github.com/farminf"
      />

      <Pannellum.Hotspot
        type="info"
        pitch={31}
        yaw={-107}
        text="Info Hotspot Text 4"
        URL="https://github.com/farminf"
      />
    </Pannellum>
    </div>
);

export default ImageViewer360;