import Placeholder from "react-bootstrap/Placeholder";

function ColorDisplayer({ colors, width, height }) {
  let wStr;
  let hStr;
  if (width) {
    wStr = Math.floor(width / colors.length).toString() + "px";
  }
  if (height) {
    hStr = Math.floor(height * 3).toString() + "px";
  }
  console.log(wStr);

  //console.log(colors);
  if (colors && width) {
    console.log("returning");
    return (
      <div id="colors-cont">
        {colors.map((color) => {
          let str = "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")";
          return (
            <div
              className="color"
              key={color}
              style={{ backgroundColor: str, width: wStr, height: hStr }}
            />
          );
        })}
      </div>
    );
    // return colors.map((color) => {
    //   return <Placeholder xs={12} style={{ backgroundColor: color }} />;
    // });
  } else {
    return;
  }
}

export default ColorDisplayer;
