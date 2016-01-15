import React from 'react';
import './FactContainer.css';

import FactItem from './FactItem';

const facts = [{
  text: '销售额',
  value: 'sales'
}, {
  text: '客户数',
  value: 'customer'
}, {
  text: '库存',
  value: 'stock',
}];


class FactContainer extends React.Component {
  render() {
    return (
      <div className="fact-container">
        <h2 className="title">事实</h2>
        {facts.map((f, index) => {
          return <FactItem {...f} key={index} />;
        })}
      </div>
    );
  }
}

export default FactContainer;
