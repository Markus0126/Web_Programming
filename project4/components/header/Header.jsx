import React from 'react';
import './Header.css';

/**
 * Define Header, a React componment of CS142 project #4 problem #3.
 */

 class Header extends React.Component {
    constructor(props) {
        super(props);

        //create state tuple 
        this.state = {
            buttonWasClicked: false,
            imageGraphic: 'images/Sun.svg'
        };

        //Create bounded handlers
        this.handleButtonClickBound = event => this.handleButtonClick(event);
    }

    handleButtonClick(event) {
        event.preventDefault();
        
        this.setState({ buttonWasClicked: !this.state.buttonWasClicked });
        this.setState({  imageGraphic: (this.state.buttonWasClicked ? 'images/Sun.svg' : 'images/Ice.svg') });
    }

    render() {
        return (
            <div className="Container">
                <p className="title"> 
                    <input 
                        type="image" 
                        src={this.state.imageGraphic}
                        alt={this.state.buttonWasClicked ? "Ice" : "Sun"}
                        width={this.state.buttonWasClicked ? "100vw" : "400vw"} 
                        height={this.state.buttonWasClicked ? "100vw" : "150vw"} 
                    ></input>
                </p>
                <p className="title">WEB PROGRAMMING HEADER </p>
                <span>
                    <button type="button" onClick={event => this.handleButtonClick(event)}>
                        {this.state.buttonWasClicked ? "Ice" : "Sun"}
                    </button>
                </span>
            </div>
        );
    }
 }

 export default Header;