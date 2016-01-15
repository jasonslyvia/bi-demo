import React from 'react';


import FactContainer from './components/FactContainer';
import ChartContainer from './components/ChartContainer';
import Canvas from './components/Canvas';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


@DragDropContext(HTML5Backend)
class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <ChartContainer />
        <FactContainer />
        <Canvas />
      </div>
    );
  }
}

export default Container;
