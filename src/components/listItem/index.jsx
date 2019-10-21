import React from 'react';
import './style.css'

export class ListItem extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            checked:false,
        }

        this.changeChecked = this.changeChecked.bind(this);

    }

    changeChecked() {
        this.setState({checked: !this.state.checked});
    }

    render() {
        return <div className = {this.state.checked ? 'list-item-checked' : 'list-item'}>

            <div onClick = {this.changeChecked}>
                {`${this.props.title} is ${this.props.priority} priority`}
            </div>

            <div onClick = {this.props.onRemove}>
                Remove
            </div>

            </div>;
    }
}