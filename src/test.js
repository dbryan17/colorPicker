import React, { useState, useRef } from "react";
import { SliderPicker, HuePicker } from "react-color";
import chroma from "chroma-js";
import Placeholder from "react-bootstrap/Placeholder";
import ColorDisplayer from "./colors";

function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState("#ff0000");
  const [colors, setColors] = useState(null);
  const [width, setWidth] = useState(null);
  const pickerRef = useRef(null);
  const wrapperRef = useRef(null);

  // setWidth(wrapperRef.current.clientWidth);

  const handle = (color) => {
    setSelectedColor(color.hex);
    console.log(color.hex);
    color = color.hsl;
    let cs = [];
    let amt = 5;
    for (let i = 0; i < amt; i++) {
      let l = 0.1 + (0.8 / (amt - 1)) * i;
      let newColor = { h: color.h, s: 1, l: l };

      let rgb = chroma(newColor).rgb();
      cs.push(rgb);
    }

    setColors(cs);
  };

  if (wrapperRef.current) {
    console.log(wrapperRef.current.clientWidth);
  }

  // l of 10 to 90

  return (
    <div id="container">
      <div ref={wrapperRef}>
        <HuePicker
          id="picker"
          ref={pickerRef}
          color={selectedColor}
          onChange={(color) => handle(color)}
          width="1" // setting width lets it take max of container
        />
      </div>

      {wrapperRef.current ? (
        <ColorDisplayer
          id="colors"
          colors={colors}
          width={wrapperRef.current.clientWidth}
          height={wrapperRef.current.clientHeight}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default ColorPicker;
