import { connect } from 'react-redux';
import ItemList from '../components/ItemList'

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onItemClick: (id) => {
            console.log(id);
        }
    }
};

const ItemsList = connect(mapStateToProps, mapDispatchToProps)(ItemList);

export default ItemsList;