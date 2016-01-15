import React, { PropTypes } from 'react';
import './ChartItem.css';


import { DragSource } from 'react-dnd';

const chartItem = {
  beginDrag(props) {
    return {
      type: 'chart',
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

@DragSource('chartItem', chartItem, collect)
class ChartItem extends React.Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    text: PropTypes.string,
    value: PropTypes.string,
  };

  render() {
    const { connectDragSource, isDragging, text, code } = this.props;

    return connectDragSource(
      <div className="chart-item" style={{
        opacity: isDragging ? 0.5 : 1,
      }}>
        <i className="chart-icon" dangerouslySetInnerHTML={{ __html: code }} />
        {text}
      </div>
    );
  }
}

export default ChartItem;
