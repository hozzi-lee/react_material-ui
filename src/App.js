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
      items: [
        {id: "0", title: "Hello World 01", done: true}
        , {id: "1", title: "Hello World 02", done: false}
      ]
    };
  }

  render() {
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{ magin: 16 }}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo item={item} key={item.id} />
          ))}
        </List>
      </Paper>
    );

    return (
      <div className="App">
        <Container maxWidth="md">
          <AddTodo />
          <div className="TodoList">
            {todoItems}
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
