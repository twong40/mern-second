import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class CreateBook extends Component {
    constructor(){
        super();
        this.state = {
          title: '',
          isbn: '',
          author: '',
          description: '',
          published_date: '',
          publisher: ''  
        };
    }

    onChange = e => {
        this.setState({ [e.target.name ]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        
    };
    render() { 
        return (  );
    }
}
 
export default CreateBook;