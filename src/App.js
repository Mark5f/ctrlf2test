// src/App.js
import React from "react";
import HorizontalRectangle from "./components/TopMenu";
import VerticalRectangle from "./components/RightVerticalRectangle";
import OutlineRectangle from "./components/OutlineRectangle";
import InsideBox from "./components/InsideBox";

const App = () => {
  return (
    <div>
      <HorizontalRectangle />
      <VerticalRectangle />
      <OutlineRectangle />
      <InsideBox />
      {/* Other components or content */}
    </div>
  );
};

export default App;
