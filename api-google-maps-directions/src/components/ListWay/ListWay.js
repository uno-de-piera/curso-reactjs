import React from 'react';

class ListWay extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  printInstructions()
  {
    return this.props.instructions.map((instruction) => {
      return (
        <li key={Math.random()*0xffffffff|0}>{instruction.html_instructions}</li>
      )
    })
  }

  render()
  {
    if(!this.props.instructions.length)
    {
      return (
        <h3 className="text-muted text-center">Esperando a una búsqueda</h3>
      )
    }

    return (
        <ul>
          {this.printInstructions()}
        </ul>
    );
  }
}

export default ListWay;
