import React from 'react';
import ReactDOM from 'react-dom';

import Example from './components/example/Example';
import States from './components/states/States';
import Header from './components/header/Header';

class ViewSwitcher extends React.Component {
    constructor(props) {
        super(props);

        //create state tuple 
        this.state = {
            buttonWasClicked: false
        };

        //Create bounded handlers
        this.handleButtonClickBound = event => this.handleButtonClick(event);
    }

    handleButtonClick(event) {
        this.setState({ buttonWasClicked: !this.state.buttonWasClicked });
    }

    render() {
        return (
            <div>
                <Header/>
                <button type="button" onClick={event => this.handleButtonClick(event)}>
                    {this.state.buttonWasClicked ? "Switch to States" : "Switch to Example"}
                </button>
                {this.state.buttonWasClicked ? <Example/> : <States/>}
            </div>
        );
    }
}

ReactDOM.render(
  <ViewSwitcher/>,
  document.getElementById('reactapp'),
);