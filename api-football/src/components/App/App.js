import React, {Component} from 'react';
import axios from 'axios';

export default class App extends Component
{
    constructor(props, context)
    {
        super();
        this.state = {
            seasons: []
        };
    }

    _fetchData()
    {
        var instance = axios.create({
            baseURL: 'http://api.football-data.org/v1',
            headers: {'X-Auth-Token': '8fe828ba71eb4e068c4767c02ff70fd1'}
        });

        instance.get('/soccerseasons?season=2015').then((seasons) => {
            this.setState({
                seasons: seasons.data
            },
            (error) => {
                console.log(error);
            })
        })
    }

    componentDidMount()
    {
        this._fetchData();
    }

    render()
    {
        return(
            <ul>
                {this.state.seasons.map(function(season){
                    return <li key={season.id + season.caption}>
                        {season.caption}
                    </li>
                })}
            </ul>
        )
    }
}