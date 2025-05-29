import React from 'react';

const WidthFilter = ({ onFilter }) => {
  return <input type="number" placeholder="Min width (px)" onChange={onFilter} />;
};

export default WidthFilter;
