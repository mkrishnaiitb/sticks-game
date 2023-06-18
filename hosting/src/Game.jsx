import React, { useRef, useEffect } from 'react';
 
function Game() {
  const canvas = useRef();
  let ctx = null;
 
  // initialize the canvas context
  useEffect(() => {
    // dynamically assign the width and height to canvas
    const canvasEle = canvas.current;
    canvasEle.width = canvasEle.clientWidth;
    canvasEle.height = canvasEle.clientHeight;
 
    // get context of the canvas
    ctx = canvasEle.getContext("2d");
  }, []);

  function rand() {
    return Math.random() * 600;
  }
  function generateLine() {
    return { x: rand(), y: rand(), x1: rand(), y1: rand() }
  }

  const colors = ['red', 'green','blue','black','pink','orange'];
 
  useEffect(() => {
    for (let i = 0; i< 20; i++) {
        let colorIndex = Math.floor(Math.random()*6);
        drawLine(generateLine(), {color: colors[colorIndex], width: 3});
    }
 
  }, []);
 
  // draw a line
  const drawLine = (info, style = {}) => {
    const { x, y, x1, y1 } = info;
    const { color = 'black', width = 1 } = style;
 
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
  }
 
  return (
    <div className="App">
      <h3> Remove lines one by one. </h3>
      <canvas ref={canvas} width={600} height={600}></canvas>
      <p className="read-the-docs">
        Clicking on lines is in progress. 
        <br/>
        Refresh page to generate new lines. 
      </p>
      <a href="/"> Home</a>
    </div>
  );
}

export default Game;