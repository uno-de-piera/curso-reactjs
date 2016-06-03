import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions'

let AddItem = ({dispatch}) => {
    let input;

    return (
        <div className="col-md-6 col-md-offset-3">
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if(!input.value.trim()) return;
                    dispatch(addItem(input.value));
                    input.value = '';
                }}
            >

                <input
                    type="text"
                    style={{marginBottom: '5px'}}
                    className="form-control"
                    ref={node => {
                        input = node
                    }}
                />

                <button type="submit" className="btn btn-success btn-block">
                    Add Item
               </button>

            </form>
        </div>
    )
}

AddItem = connect()(AddItem);
export default AddItem;