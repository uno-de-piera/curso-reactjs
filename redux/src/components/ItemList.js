import React, { PropTypes } from 'react';
import Item from './Item';

const ItemList = ({items, onItemClick}) => {
  return (
      <ul className="list-group col-md-6 col-md-offset-3">
        {items.map(item =>
            <Item
                key={item.id}
                onClick={() => onItemClick(item.id)}
                {...item}
            />
        )}
    </ul>
  )
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onItemClick: PropTypes.func.isRequired
};

export default ItemList;
