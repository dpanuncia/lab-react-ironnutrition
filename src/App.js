import React, { Component } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/Foodbox';

class App extends Component {
  state = {
    foodList: foods,
    showForm: false,
    name: '',
    calories: 0,
    image: '',
  };

  displayFood = () => {
    let arr = this.state.foodList.map((food) => {
      return (
        <FoodBox
          key={food.name}
          name={food.name}
          calories={food.calories}
          image={food.image}
        />
      );
    });
    return arr;
  };

  toggleForm = () => {
    // if (this.state.showForm === false) {
    //   this.setState({
    //     showForm: true,
    //   });
    // } else if (this.state.showForm === true) {
    //   this.setState({
    //     showForm: false,
    //   });
    // }
    this.setState({
      showForm: !this.state.showForm,
    });
  };

  addFood = (event) => {
    event.preventDefault();
    let newFoodObj = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
      quantity: 0,
    };

    let foodListCopy = [...this.state.foodList];
    foodListCopy.unshift(newFoodObj);

    this.setState({
      foodList: foodListCopy,
      showForm: false,
    });
  };

  handleChange = (event) => {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  // handleChange2 = (event) => {
  //   console.log(event.target.value);
  //   this.setState({
  //     calories: event.target.value,
  //   });
  // };
  // handleChange3 = (event) => {
  //   console.log(event.target.value);
  //   this.setState({
  //     image: event.target.value,
  //   });
  // };

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

// create a state for the array and boolean
// create button
// when you press a form shows

// create the new food object
// push it to the array
// setstate

export default App;
