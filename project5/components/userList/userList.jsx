import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
}
from '@material-ui/core';
import './userList.css';

/**
 * Define UserList, a React componment of CS142 project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);

    //Track user selection
    this.state = {
      index: -1 //doesn't highlight selection [1:n] until clicked
    };

    //Bind event handler for user link
    this.handleUserItemClickBound = newIndex => this.handleUserItemClick.bind(this, newIndex);
  }

  handleUserItemClick(newIndex) {
    this.setState({ index: newIndex });
  }

  getFormattedUserList() {
    //Append all formatted users to list from model data
    const userList = [];
    const users = window.cs142models.userListModel();
    console.log(users[0]);
    for(let i = 0; i < users.length; i++) {
      userList.push((
        <ListItem
          button
          selected={this.index === i}
          onClick={(i) => handleUserItemClickBound(i)}
        >
          <ListItemText primary={`${users[i].first_name} ${users[i].last_name}`} />
        </ListItem>
      ));
      userList.push((<Divider />));
    }

    return userList;
  }

  render() {
    return (
      <div>
        <Typography variant="body1">
          Users
        </Typography>
        <List component="nav"> 
          { this.getFormattedUserList() } 
        </List>
      </div>
    );
  }
}

export default UserList;
