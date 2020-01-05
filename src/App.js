import React from 'react';
//import logo from './logo.svg';
import './App.css';


//function App() {
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
        {
          this.state.monsters.map(monster => <p key={monster.id}>{monster.name}</p>)
        }
      </div>
    );
  }
}  


export default App;
