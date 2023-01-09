import React, { Component } from 'react';
import axios from 'axios';
import '../index.css';

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword:'',
      n:''
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { keyword,n} = this.state;

    const book = {
      keyword,
      n
    };

    axios
      .post('http://localhost:8080/', book)
      .then(() => console.log('Article Search Created'),   
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
                placeholder="Enter keyword"
                onChange={this.handleInputChange}
              />
              <input
                type="number"
                name="n"
                placeholder="Number of articles"
                onChange={this.handleInputChange}
                width="1px"
              />
        
              <button className="btn btn-success" type="submit">
                <img src="https://cdn4.iconfinder.com/data/icons/materia-tools-vol-1/24/023_042_023_zoom_search_lense_tool-512.png"
                width="50px"
                height="50px"
                />
              </button>
             <br/>
            
          </form>
      </div>
      </div>
    );
  }
}

export default Create;