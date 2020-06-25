import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./component/Todos";
import Header from "./layout/Header";
import AddTodo from "./component/AddTodo";
import "./App.css";
import About from "./page/About";
import Axios from "axios";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos:res.data}))
  }

  markCompiliate = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.complated = !todo.complated;
        }
        return todo;
      }),
    });
  };

  delTodo = (id) => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res =>this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    }) )
  };

  addTodo = (title) => {
   Axios.post('https://jsonplaceholder.typicode.com/todos',{
     title,
     complated:false
   })
   .then(res =>this.setState({ todos: [...this.state.todos,res.data] }))
    
  };
  render() {
    return (
      <Router>
        <div>
          <div className="container">
            <Header />
            <Route
            exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markCompiliate={this.markCompiliate}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />

            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
