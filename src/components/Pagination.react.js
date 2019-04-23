import React, { useState } from 'react';
import { Radio } from 'antd';
import _ from 'lodash/array';

const generateNButtons = (N, onClick) =>
  [...Array(N).keys()].map(i => (
    <Radio.Button
      key={`Button_${i}`}
      value={i}
      onClick={e => onClick(e.target.value)}
    >
      {i + 1}
    </Radio.Button>
  ));

function Pagination({ pageSize, children }) {
  const [currentPage, setCurrentPage] = useState(0);

  const totalChildren = React.Children.count(children);
  const totalPages = Math.ceil(totalChildren / pageSize);

  const childrenArray = _.chunk(React.Children.toArray(children), pageSize);

  return (
    <>
      {childrenArray[currentPage]}
      <Radio.Group defaultValue={0} size={totalPages}>
        {generateNButtons(totalPages, setCurrentPage)}
      </Radio.Group>
    </>
  );
}

export default Pagination;
