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
        <div className='image'>
        <img src="https://samachar4u.com/wp-content/uploads/2022/02/Samachar4u-logo-final-white.png"
        width="30%"/>
        </div>
      <div className='search-bar'>
          <form onSubmit={this.handleSubmit} id="form1">
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
                <img src="https://cdn4.iconfinder.com/data/icons/materia-tools-vol-1/24/023_042_023_zoom_search_lense_tool-512.png"
                width="50px"
                height="50px"
                />
              </button>
             <br/>
            
          </form>
      </div>
      <div className="narticle">
          <form onSubmit={this.handleSubmit} >
              <input
                type="number"
                name="keyword"
                placeholder="Number of articles"
                onChange={this.handleInputChange}
                width="1px"
              />
              </form>
              </div>
      </div>
    );
  }
}

export default Create;