import React from "react";
import { downloadImg } from "../utils/downloadimage";
import { random } from "../utils/random";

const Image = ({ img, imgData, setImg, setImgData }) => {
  const { backgrounds, ears, hair, neck, leg, eyes, nose, mouth, accessories } =
    img;

  return (
    <div className="child-1">
      <div className="image-container" id="image-container">
        <img
          src={require(`../assets/backgrounds/${backgrounds}.png`)}
          className="backgrounds"
          alt=""
        />

        <img
          src={require(`../assets/ears/${ears}.png`)}
          className="ears"
          alt=""
        />

        <img
          src={require(`../assets/neck/${neck}.png`)}
          className="neck"
          alt=""
        />
        <img
          src={require(`../assets/leg/${leg}.png`)}
          className="leg"
          alt=""
        />

        <img
          src={require(`../assets/nose/${nose}.png`)}
          className="nose"
          alt=""
        />
        <img
          src={require(`../assets/mouth/${mouth}.png`)}
          className="mouth"
          alt=""
        />

        <img
          src={
            require(`../assets/accessories/${accessories}.png`)
              
          }
          className="accessories"
          alt=""
        />
        <img
          src={require(`../assets/hair/${hair}.png`)}
          className="hair"
          alt=""
        />
        <img
          src={require(`../assets/eyes/${eyes}.png`)}
          className="eyes"
          alt=""
        />
      </div>

      <div className="action-container">
        <button
          className="action-btn"
          onClick={() => random(imgData, setImgData, setImg)}
        >
          Random
        </button>
        <button className="action-btn" onClick={() => downloadImg()}>
          Download
        </button>
      </div>
    </div>
  );
};

export default Image;