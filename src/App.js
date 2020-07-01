import React, { Component } from 'react';// importing the react compnent to this page  
import './App.css';// importing the App.css data to App.js
import foods from './foods.json';// adding food.json to App.js
import FoodBox from './components/Foodbox'; // adding Foodbox to App.js

class App extends Component {//adding an extention to the class app thats a state (property values)
  state = {
    foodList: foods,
    showForm: false,
    name: '',
    calories: 0,
    image: '',
  };

  displayFood = () => {// creating an array and added a return foodbox with the name calories and image of the food
    let arr = this.state.foodList.map((food) => {
     
     return <FoodBox name= {food.name}
     calories= {food.calories}
     image = {food.image}
     />
    });
    return arr;
  };

  toggleForm = () => {// switches from first function to the second one. 
   
    this.setState({
      showForm: !this.state.showForm,
      animal: "dog"
    });
  };

  addFood = (event) => {//if an event happeneds then let newfoodjob run which is the name calories image and quantity of the chosen word(food)
    event.preventDefault();
    let newFoodObj = {
      name: this.state.name,//turkey
      calories: this.state.calories,
      image: this.state.image,
      quantity: 0,
    };
console.log(newFoodObj)
    let foodListCopy = [...this.state.foodList];//all previous food like pizza and hot dogs 
    foodListCopy.unshift(newFoodObj);//add turkey to previous food 

    this.setState({
      foodList: foodListCopy,//switch old list with new list 
      showForm: false,
    });
  };

  handleChange = (event) => {//when an event happends or a change it changes the state by setState 
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  

  render() {
    
    return (
      <div className="App">
        
        <button onClick={this.toggleForm}>Add Food</button>
        {this.state.showForm ? (
          <form onSubmit={this.addFood}>
            <label>Food name:</label>
            <input onChange={this.handleChange} type="text" name="name" />
            <br />
            <label>Calories:</label>
            <input onChange={this.handleChange} type="number" name="calories" />
            <br />
            <label>Image URL:</label>
            <input onChange={this.handleChange} type="text" name="image" />
            <br />
            <input type="submit" />
          </form>
        ) : (
          ''
        )}
        {this.displayFood()}
      </div>
    );
  }
}
export default App;
