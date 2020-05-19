import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import logo from './logo.svg';
import './App.css';
import Customers from './Customers'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

class TodoList extends React.Component {
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <center><input placeholder="enter time of catch"></input></center>
                    <center><input placeholder="enter lake"></input><br/></center>
                    <center><input placeholder="enter coordinate"></input></center>
                    <center><input placeholder="enter picture"></input><br/></center>
                    <center><input placeholder="enter weight"></input></center>
                    <center><input placeholder="enter species"></input><br/></center>
                    <br/><center><button type="submit">add</button></center>
                </div>
            </div>
        );
    }
}
export default TodoList;