import React, { Component } from 'react';
import axios from 'axios';
import '../index.css';

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword:''
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { keyword } = this.state;

    const book = {
      keyword
    };

    axios
      .post('http://localhost:8080/', book)
      .then(() => console.log('Book Created'),   
      )
      .catch(err => {
        console.error(err);
      });
  };
 
  
  render() {
    return (
      <div>

          <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="keyword"
                id="search"
                placeholder="Search for something"
                onChange={this.handleInputChange}
              />
              {/* <form autoComplete="off" onSubmit={this.handleSubmit}>
      <input type="text" name="search" id="search" value={text}
      onChange={(e)=>setText(e.target.value)}
      placeholder="Search for something" /> */}
      {/* <button>Search</button> */}
     {/* </form> */}
            
           
              <button className="btn btn-success" type="submit">
                Create
              </button>
            
          </form>
      </div>
    );
  }
}

export default Create;