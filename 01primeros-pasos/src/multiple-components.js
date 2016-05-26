const Avatar = React.createClass({
    render()
    {
        return(
            <div>
                <ProfilePicture uuid={this.props.uuid} />
                <ProfileLink uuid={this.props.uuid} />
            </div>
        )
    }
});

const ProfilePicture = React.createClass({
    render()
    {
        let img = `https://graph.facebook.com/${this.props.uuid}/picture`;
        return (
            <img src={img} />
        )
    }
});

const ProfileLink = React.createClass({
    render()
    {
        let link = `https://www.facebook.com/${this.props.uuid}`;
        return (
            <a href={link}>{this.props.uuid}</a>
        )
    }
});

ReactDOM.render(<Avatar uuid="1173886908" />, document.getElementById('multiple-components'));