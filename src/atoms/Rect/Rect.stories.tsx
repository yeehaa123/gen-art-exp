import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva';
import { storiesOf } from "@storybook/react";
import Konva from 'konva';

import Square from ".";

storiesOf("Atoms|Avatar", module)
  .add("different error states", () => {
    const margin = 20
    const size = 500 - margin * 2;
    const length = size/2;
    return (
      <Stage width={size} height={size}>
        <Layer>
          <Square
            x={margin}
            y={margin}
            length={length}
          />
        </Layer>
      </Stage>
    );
  })
