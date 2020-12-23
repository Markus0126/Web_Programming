import React from 'react';
import './States.css';


class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      states: window.cs142models.statesModel().sort(), 
      searchString: ''
    };
    this.handleSearchBound = event => this.handleSearch(event);
  }
  handleSearch(event) {
    this.setState({ searchString: event.target.value });
  }

  filterStates(searchString) {
  
    const statesList = [];
    for(let i = 0; i < this.state.states.length; i++) {
      const stateItem = this.state.states[i];
      if(!searchString || stateItem.toLowerCase().search(searchString.toLowerCase()) >= 0) {
        statesList.push( 
          (<div className="state"> {stateItem} </div>)
        );
      }
    }
    if(statesList.length === 0) {
      statesList.push(
        (<div className="state"> There are no matching states! </div>)
      );
    }

    //return HTML for list 
    return statesList;
  }

  render() {
    return (
      <div>
        <p className="searchbar">
          <label htmlFor="idx1"> Search US States </label>
          <input id="idx1" type="text" value={this.state.searchString} onChange={this.handleSearchBound}/>
        </p>

        <div className="displayList">
          <p className="header"> 
            <span> US States </span>
            { this.state.searchString && (
                <span> {this.state.searchString}</span>
              )
            }
          </p>

          <div className="list">
            {this.filterStates(this.state.searchString)}
          </div>
        </div>
      </div>
    );
  }
}

export default States;