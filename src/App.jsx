import { useState } from "react";
import "./App.css";
import Accordation from "./Components/index";
import Color from "./Components/color";
import Rating from "./Components/Rating";
import ImageSlider from "./Components/image-slider";

function App() {
  return (
    <>
      {/* <Accordation/> */}
      {/* <Color/> */}
      {/* <Rating/> */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={10}
      />
    </>
  );
}

export default App;
