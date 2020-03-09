import React, {Component} from 'react';
import Scroll from "../Components/Scroll";
import CardList from '../Components/CardList';
import Seacrh from "../Components/Search";
import robots from "../Components/robots";
import "./App.css";


class App extends Component {

  constructor(){
    super();
    this.state = {
      robots : robots,
      seacrhfield : ""
    }
  }  

 onSearch = (event) =>
 {
  this.setState({seacrhfield :event.target.value});
 } 

render(){
  const {robots, seacrhfield} = this.state;
  const filterList = robots.filter(function(robots){
    return robots.name.toLowerCase().includes(seacrhfield.toLowerCase())
  }) 
  
return !robots.length ? <h1>Loading</h1> : (
  <div className ="tc">
    <h1 className="hudson f1">
      Welcome to robofriends
    </h1>
 
    <Seacrh seacrhChange =  { this.onSearch }/>
    <hr/>

    <Scroll>  
        <CardList robots = { filterList}/>
    </Scroll>
  </div>
);
}
}
export default App;
