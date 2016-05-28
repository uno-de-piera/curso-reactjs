import React from 'react';

class Search extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      search: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e)
  {
    e.preventDefault();
    this.props.executeSearchOnSubmit(this.state.search);
  }

  onInputChange(e)
  {
    this.setState({
      search: e.target.value
    });
  }

  render()
  {
    return (
        <form className="form-inline" role="search" onSubmit={this.submitForm}>

          <div className="input-group col-md-12 col-sm-12 col-xs-12">
            <input
              onChange={this.onInputChange}
              value={this.state.search}
              className="form-control"
              placeholder="Escribe tu búsqueda"
            />

            <span className="input-group-btn">
              <button className="btn btn-danger" type="submit">
                <span className="glyphicon glyphicon-search"></span>
              </button>
            </span>
          </div>

        </form>
    );
  }
}

export default Search;
