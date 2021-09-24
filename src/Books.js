import { Component } from 'react';
import './App.css';
import SearchArea from './SearchArea';
import request from 'superagent';
import BookList from './BookList';

class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: ''
        }
    }

    searchBook = (e) => {
        e.preventDefault();
        request
                .get("https://www.googleapis.com/books/v1/volumes")
                .query({q: this.state.searchField})
                .then((data) => {
                    this.setState({books: [...data.body.items]})
                })
    }

    handleSearch = (e) =>{
        this.setState({searchField: e.target.value})
    }

    render(){
        return (
            <div>
                <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} />
                <BookList books={this.state.books}/>
            </div>
        );
  }
}


export default Books;
