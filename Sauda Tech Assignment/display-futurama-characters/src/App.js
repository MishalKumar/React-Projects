/*Task 6: API
Display a list of Futurama characters on a web page from the following API: https://api.sampleapis.com/futurama/characters*/ 


import React from 'react';

import './App.css';


export default class App extends React.Component {

  constructor() {

    super();
    this.state={
      data:false
    }
  }

  componentDidMount() {

    let url = "https://api.sampleapis.com/futurama/characters";

    fetch(url, {
      method: 'GET',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      }
    }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp);
        this.setState({data:resp})
      })
    })
  }


  render() {
    const data = this.state.data;
    console.warn(data);

    return (
      <div>
        
        <h1 >Futurama Characters</h1>
        {
          data ?
          <div>
            <p>Name: {data.name}</p>
            {/* <img src= {data.images}/> */}
          </div>
          :<p>Please wait.....</p>
        }
      </div>
    )
  }
}
