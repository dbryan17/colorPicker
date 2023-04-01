import logo from "./logo.svg";
import "./App.css";
import { SliderPicker } from "react-color";
import { useState } from "react";
import ColorPicker from "./test";

function App() {
  const [color, setColor] = useState({ hex: "#FFFFFF" });
  const handleChange = (color, evt) => {
    console.log(color, evt);
    setColor(color.hex);
    console.log(color.hex);
  };

  console.log(color);
  return (
    <ColorPicker />
    // <div>
    //   <SliderPicker
    //     color={color}
    //     onChangeComplete={(color, evt) => handleChange(color, evt)}
    //   />
    // </div>
  );
}

export default App;
