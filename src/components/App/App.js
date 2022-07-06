import React, { Component } from "react";
import Searchbar from "components/Searchbar/Searchbar";
import ImageGallery from "components/ImageGallery/ImageGallery";
import s from "./App.module.css"
import Button from "components/Button/Button";
import Modal from "components/Modal/Modal";



class App extends Component { 
  state = {
    query: "",
  }
  
  handleFormSubmit = query => {
    this.setState({query})
  }

  render() { 
    const { query } = this.state;
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        
        <ImageGallery query={query} />

        {/* <Button /> */}
        {/* <Modal /> */}
      </div>
    )
  }
}


export default App;