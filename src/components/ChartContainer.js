import React from 'react';
import './ChartContainer.css';
import ChartItem from './ChartItem';

const charts = [{
  text: '折线图',
  value: 'line',
  code: '&#xe603;',
}, {
  text: '柱形图',
  value: 'bar',
  code: '&#xe600;',
}, {
  text: '面积图',
  value: 'area',
  code: '&#xe601;',
}, {
  text: '饼图',
  value: 'pie',
  code: '&#xe602;',
}];

class ChartContainer extends React.Component {
  render() {
    return (
      <div className="chart-container">
        <h2 className="title">图表</h2>
        {charts.map(c => {
          return <ChartItem text={c.text} value={c.value} code={c.code} key={c.value} />;
        })}
      </div>
    );
  }
}

export default ChartContainer;
