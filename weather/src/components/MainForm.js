import React from 'react';

class MainForm extends React.Component {
    state = {
        text: '',
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <form
                onSubmit={event => this.props.onSubmit(event, this.state.text)}
            >
                <input
                    type="text"
                    name="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                />
                <button>Click Me</button>
            </form>
        );
    }
}

export default MainForm;
