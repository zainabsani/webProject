import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import TodoItems from "./TodoItems";
import TodoList from "./TodoList";
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import CustomerDetails from "./CustomerDetails";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            username: '' ,
            students: [
                { id: 1, name: 'Adam', address: '2109 drive', email: 'adam@email.com', phone:'12345', journal:''},
                { id: 2, name: 'Anna', address: 'Ember way 99', email: 'anna@email.com', phone:'6789', journal:''},
                { id: 3, name: 'Becky', address: '54 Abba street', email: 'becky@email.com', phone:'9742', journal:''},
                { id: 4, name: 'Charlie', address: '1 W lane', email: 'charlie@email.com', phone:'0864', journal:''},
                { id: 5, name: 'Donna', address: '98 Trumpet drive', email: 'donna@email.com', phone:'54321', journal:''},
                { id: 6, name: 'Emma', address: '109 Myway lane', email: 'emma@email.com', phone:'0987', journal:'' },
                { id: 7, name: 'Fred', address: 'Sempe 32', email: 'fred@email.com', phone:'1928', journal:''},
                { id: 8, name: 'Greg', address: '942 Leftown street', email: 'greg@email.com', phone:'7436', journal:''},
                { id: 9, name: 'Holly', address: '6 Fab drive', email: 'holly@email.com', phone:'0293', journal:''},
                { id: 10, name: 'Ian', address: 'Downtown 109', email: 'ian@email.com', phone:'8733', journal:''}
            ]
        }
        this.addItem = this.addItem.bind(this);
    }

    handleChange = event => {
        this.setState({ username: event.target.value });
    };

    //data() {
      //  alert("Great Shot");
    //}

    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";
        }

        console.log(this.state.items);

        e.preventDefault();
    }

    renderTableHeader() {
        let header = Object.keys(this.state.students[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData() {
        return this.state.students.map((student, index) => {
            const { id, name, address, email, phone, journal } = student //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{address}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>
                        <button>Add to Journal</button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <h1 id='title'>Welcome to IFA</h1>
                <table id='students'>
                    <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                    </tbody>
                </table>
                <br/><center><h3>Journal</h3></center>
                <p>{this.rendertoDo()}</p>
                {/*<form>
                    <label htmlFor="username">username</label>
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                </form>
                <h3>Your username is: {this.state.username}</h3> */}
            </div>
        )
    }

    rendertoDo() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                    <center><input ref={(a) => this._inputElement = a} placeholder="enter time of catch"></input></center>
{/*
                    <center><input ref={(a) => this._inputElement = a} placeholder="enter lake"></input><br/></center>
                    <center><input ref={(a) => this._inputElement = a} placeholder="enter coordinate"></input></center>
                    <center><input ref={(a) => this._inputElement = a} placeholder="enter picture"></input><br/></center>
                    <center><input ref={(a) => this._inputElement = a} placeholder="enter weight"></input></center>
                    <center><input ref={(a) => this._inputElement = a} placeholder="enter species"></input><br/></center>
*/}
                    <br/><center><button type="submit">add</button></center>
                    </form>
                </div>
                <TodoItems entries={this.state.items}/>
            </div>
        );
    }
}

ReactDOM.render(<App />,document.getElementById('root'));

export default App;
