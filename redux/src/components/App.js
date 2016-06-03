import React from 'react';
import AddItem from '../containers/AddItem';
import ItemsList from '../containers/ItemsList';

const App = () => {
    return (
        <div className="row">
            <h2 className="text-center text-muted">
                Todo Item App
            </h2>
            <AddItem />
            <hr />
            <ItemsList />
        </div>
    )
}

export default App;