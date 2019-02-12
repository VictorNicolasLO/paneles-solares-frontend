import React from 'react';

function Table(props) {
  const { headers, data, options } = props;
  return <div />;
}

Table.defaultProps = {
  headers: {name:"Nombre"},
  data : [{nombre : ""}]
};

export default Table;
