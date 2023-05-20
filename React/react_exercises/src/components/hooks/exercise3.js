import React, { useState } from 'react';

import { HorizontalBarrier } from './sharedComponents';

const ChangeColor = ({ item }) => {
  return (
    <div style={{ backgroundColor: item, width: '200px', height: '200px', marginLeft: 350 }}></div>
  );
};

export default function Exercise3() {
  const [colorOptions, setColorOptions] = useState(["black", "white", "red", "purple", "orange"]);
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorPicked = (item) => {
    setSelectedColor(item);
  };

  return (
    <div>
      <h1>Third exercise</h1>
      <h1 style={{ fontSize: '10px' }}>
        Create a React component called "ColorPicker". This component should render a set of color squares,
        each representing a different color. When a color square is clicked,
        its corresponding color should be displayed in a text box below. Additionally,
        provide an option to clear the selected color, which will remove the color from the text box.
      </h1>
      <HorizontalBarrier />

      {colorOptions.map((item, index) => (
        <React.Fragment key={index}>
          <p>{item}</p>
          <input
            type="checkbox"
            onChange={() => handleColorPicked(item)}
          />
        </React.Fragment>
      ))}

      {selectedColor && <ChangeColor item={selectedColor} />}
    </div>
  );
}
