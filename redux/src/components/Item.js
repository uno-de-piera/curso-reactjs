import React, {PropTypes} from 'react';

const Item = ({text, onClick}) => {
  return (
      <li
        className="list-group-item"
        onClick={onClick}
        style={{
          textDecoration: 'underline',
          cursor: 'pointer'
        }}
      >
        {text}
      </li>
  )
}

Item.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Item;
