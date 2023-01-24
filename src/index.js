import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Color = (props) => {
  const color = props.color;
  const selectColor = props.selectColor;
  const selectedColor = props.selectedColor;
  const isSelected = selectedColor === color ? 'selected' : '';

  return (
    <div className={`${color} ${isSelected}`} onClick={() => props.selectColor(color)} />
  )
}


const Picker = () => {
  const [selectedColor, setSelectedColor] = useState(''); 
  const selectColor = (colorName) => {
    setSelectedColor(colorName);
  }
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color  color="red" selectColor={selectColor} selectedColor={selectedColor} />
        <Color color="green" selectColor={selectColor} selectedColor={selectedColor}/>
        <Color color="blue" selectColor={selectColor} selectedColor={selectedColor}/>
      </div>
    </div>
  );
}

ReactDOM.render(
  <Picker />,
  document.getElementById('app')
);