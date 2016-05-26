const ServerInfo = React.createClass({
    loadData()
    {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: (data) => {
                this.setState({data});
            }
        })
    },
    getInitialState()
    {
        return {
            data: []
        };
    },
    componentDidMount()
    {
        this.loadData();
    },
    render()
    {
        return (
            <ol>
                {this.state.data.map((res) => {
                    return <li key={res.id}>{res.name}</li>
                })}
            </ol>
        )
    }
});

const DisplayData = React.createClass({
    render()
    {
        return (
            <ServerInfo url="./data/users.json" />
        )
    }
});

ReactDOM.render(<DisplayData />, document.getElementById('ajax-app'));

