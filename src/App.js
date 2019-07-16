import React , {Component} from 'react';
import {CardList} from './components/card-list/card-list.component.jsx';
import {SearchBox} from './components/search-box/search-box.component.jsx';
import './App.css';

//Inheriting the properties of React.Component
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  //componentLifeCycle method
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users})).catch(rejectValue => console.log("Error fetching metadata"))
  }
  handleChange = (e) => {
    //arror functions stricts the usage to lexical scoping
    this.setState({searchField:e.target.value});
  }

  //gets updated (rerendered) when state is updated
  //You can't do this.state.name = "Something", as React is unidirectional, it is suposed to interact
  //with the DOM itself. So when, setState is used, React interacts with the DOm, you cant.
  render(){
    const {monsters, searchField } = this.state;
    //ARRAY METHOD -- FILTER()
    //The filter method takes an array and iterates over it, and passes each item as an argument to the function provided
    //the function must return a true or a False statement, depending on which they are filtered.
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (

      <div className="App">
         <h1>Monster Rolodex</h1>
        {/* the callback passed will be executed in here, not where it's called */}
         <SearchBox placeholder='search monsters' handleChange={this.handleChange} />

        {/* Props are items that are passed at declaration, and children are items passed between tags */}
        <CardList monsters={filteredMonsters} />
        {/* <header className="App-header">
            {
              //ARRAY METHOD -- MAP()
              //The map method iterates through an array and return each item as an argument to
              //function passed to the map method. See it like a for loop. Besides map doesnt change the original array
              this.state.monsters.map(monster => <h3 key={monster.id}>{monster.name}</h3>)
              //Why key(Unique ID): If an element has to be updated, React prefers not to re-rerend
              //every element, and thats why, it needs an unique key to that certain element.
            }
        </header> */}
      </div>
    )
  }

}

export default App;
