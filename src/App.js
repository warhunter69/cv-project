import './App.css';
import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {firstName: '',lastName:'',email: ''};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    //this.setState({firstName: event.target.value});
    this.setState({
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name] : event.target.value
   })
   console.log(this.state)
    
  }
  handleSubmit(event){
    this.setState({[event.target.name] : event.target.value});
    event.preventDefault();
  }

  render(){
  return (
    <div className="App">
      <div>
        <label className="panel">panel</label>
      </div>
      <form onSubmit={this.handleSubmit}>
        <div>
        <label>first name:
        <input type="text" name="firstName" value = {this.state.firstName} onChange={this.handleChange}/>
        </label>
        <label>last name: 
        <input type="text" name="lastName" value = {this.state.lastName} onChange={this.handleChange}/>
        </label>
        <label>email:
          <input type="email" name="email" value = {this.state.email} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}}

export default App;
