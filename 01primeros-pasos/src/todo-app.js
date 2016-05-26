const TodoApp = React.createClass({
    createItem(text, index)
    {
        return (
            <li key={index}>{text}</li>
        );
    },
    render()
    {
        return (
            <ul>
                {this.props.items.map(this.createItem)}
            </ul>
        );
    }
});

const FormApp = React.createClass({
    getInitialState()
    {
        return {
            text: '',
            items: []
        };
    },
    onAddTodo(e)
    {
        this.setState({
            text: e.target.value
        })
    },
    onUserSubmit(e)
    {
        e.preventDefault();
        const items = this.state.items.concat([this.state.text]);
        const text = '';
        this.setState({
            text, items
        });
    },
    render()
    {
        return (
            <div>
                <h3>React todo list</h3>
                <TodoApp items={this.state.items} />
                <form onSubmit={this.onUserSubmit}>
                    <input type="text" onChange={this.onAddTodo} value={this.state.text} />
                    <button type="submit">Add todo</button>
                </form>
            </div>
        )
    }
});

ReactDOM.render(<FormApp />, document.getElementById('todo-app'));