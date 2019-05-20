import React, { Component } from 'react';
import {Rect} from 'react-konva';

type SquareProps = {
  x: number;
  y: number
  length: number
}

const Square: (props: SquareProps) => any = ({x, y, length}) => {
  return <Rect
            x={x}
            y={y}
            width={length}
            height={length}
            fill="black"
            shadowBlur={5}
          />
}

export default Square;
