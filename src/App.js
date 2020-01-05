import React from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';


class App extends React.Component {
  constructor()
  {
    super();

    this.state = {
      monsters: [
        {id: "01", name: "Dracula"},
        {id: "02", name: "Frank"},
        {id: "03", name: "Zombi"}
      ]
    };
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data =>this.setState({monsters: data}))
  }

  render(){
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}>
          
        </CardList>
       
      </div>
    );
  }
}  


export default App;
