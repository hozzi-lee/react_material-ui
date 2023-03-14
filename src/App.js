import React from 'react';
import { Paper, List, Container } from '@material-ui/core';

import Todo from './Todo';
import AddTodo from './AddTodo';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //(1) item > items 배열로
      items: []
    };
  }

  add = (item) => {
    const thisItems = this.state.items;
    item.id = "ID-" + thisItems.length;
    item.done = false;
    thisItems.push(item);
    this.setState({ items: thisItems });
    console.log("items: ", this.state.items);
  }

  delete = (item) => {
    const thisItems = this.state.items;
    console.log("Before Update Items: ", this.state.items);
    const newItems = thisItems.filter(e => e.id !== item.id);
    this.setState({ items: newItems }, () => {
      console.log("Update Items: ", this.state.items);
    });
  }

  render() {
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{ magin: 16 }}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo item={item} key={item.id} delete={this.delete} />
          ))}
        </List>
      </Paper>
    );

    return (
      <div className="App">
        <Container maxWidth="md">
          <AddTodo add={this.add} />
          <div className="TodoList">
            <div className="TodoList">{todoItems}</div>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
