import React, { Component } from 'react';
import axios from 'axios';
import Search from '../Search/Search';
import ListWay from '../ListWay/ListWay';

export default class App extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
          instructions: []
        };
    }

    searchMap(search)
    {
      if(search == '') return;
      const searchArray = search.split(',');
      const from = searchArray[0].trim();
      const to = searchArray[1].trim();

      const API_KEY = 'TU_API_KEY';
      const URL = 'https://maps.googleapis.com/maps/api/directions/json?';

      axios.get(`${URL}origin=${from},ES&destination=${to},ES&key=${API_KEY}`).then(
        (success) => {
            const instructions = [];
            success.data.routes.map((route) => {
              route.legs.map((leg) => {
                leg.steps.map((step) => {
                  instructions.push(step);
                })
              })
            });

            this.setState({
              instructions: instructions
            });
        },
        (error) => {
            console.log(error);
        }
      )
    }

    render()
    {
        return(
            <div>
              <Search executeSearchOnSubmit={search => this.searchMap(search)} />
              <ListWay instructions={this.state.instructions} />
            </div>
        );
    }
}
