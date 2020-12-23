import './p5.css'

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, Router, Switch, NavLink } from "react-router-dom";

import Example from './components/example/Example';
import States from './components/states/States';
import Header from './components/header/Header';

class MenuBar extends React.Component {
    constructor(props) {
        super(props);

        //create state tuple as if it was from db
        this.state = {
            routes: [
                {
                    name: "Home",
                    path: "/",
                    exact: true,
                    main: () => <div> Welcome to P5! </div>
                },
                {
                    name: "Example",
                    path: "./Example",
                    exact: true,
                    main: () => <Example/>
                },
                {
                    name: "States",
                    path: "/States",
                    exact: true,
                    main: () => <States/>
                }
            ]
        };
    }

    render() {
        let linkStyle = {
            textDecoration: 'none', 
            color: "orange"
        };

        return (
            <div>
                <Header/>
                <HashRouter>
                    <div> 
                        {<ul className="menu-bar-items">
                            {this.state.routes.map((route, index) => (
                                <li key={index}> <Link to={route.path} style={linkStyle}> {route.name} </Link> </li>
                            ))}
                        </ul>}
                    </div>
                    <Switch>
                        {this.state.routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    children={<route.main/>}
                                />
                            ))
                        }
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}

ReactDOM.render(
  <MenuBar/>,
  document.getElementById('reactapp'),
);