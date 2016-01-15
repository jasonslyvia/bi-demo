import React, { PropTypes } from 'react';
import './FactItem.css';


import { DragSource } from 'react-dnd';

const factItem = {
  beginDrag(props) {
    return {
      type: 'fact',
      value: props.value,
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

@DragSource('factItem', factItem, collect)
class FactItem extends React.Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    text: PropTypes.string,
    value: PropTypes.string,
  };

  render() {
    const { connectDragSource, isDragging } = this.props;

    return connectDragSource(
      <div className="fact-item" style={{
        opacity: isDragging ? 0.5 : 1,
      }}>
        {this.props.text}
      </div>
    );
  }
}

export default FactItem;
