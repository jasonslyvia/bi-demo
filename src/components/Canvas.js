import React from 'react';
import './Canvas.css';
import { DropTarget } from 'react-dnd';

const canvasTarget = {
  canDrop(props, monitor) {
    return monitor.getItemType() === 'chartItem';
  },

  drop(props, monitor, component) {
    debugger;
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  };
}

@DropTarget(() => {
  return ['factItem', 'chartItem'];
}, canvasTarget, collect)
class Canvas extends React.Component {
  render() {
    const { x, y, connectDropTarget, isOver, canDrop } = this.props;
    let color;
    if (canDrop) {
      if (isOver) {
        color = '#BDF1AA';
      } else {
        color = 'transparent';
      }
    } else {
      color = '#F99494';
    }

    return connectDropTarget(
      <div className="canvas">
        <h2 className="title">画布</h2>
        <div className="canvas-content" style={isOver ? {
          background: color,
        } : {}}>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Canvas;
