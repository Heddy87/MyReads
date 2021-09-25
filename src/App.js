import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './Components/Shelf';
import Search from './Components/Search';
import button from './Components/button';
import title from './Components/title';
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  };
  
  updateSearchPageState = state =>{
    this.setState({showSearchPage:state})
  };
  
  componentDidMount() {
    BooksAPI.getAll().then(resp => this.setState({ books: resp }));
  }
  
  changeBookShelf = (book, shelf) => {
    this.setState({
      books: this.state.books.map(b => {
        b.id === book.id ? (b.shelf = shelf) : b;
        return b;
      })
    });
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search showSearchPage={this.updateSearchPageState} />
        ) : (
          <div className="list-books">
            <title /> 
            <Shelf allBooks={this.state.books} changeShelf={this.changeBookShelf} />     
            <button showSearchPage={this.updateSearchPageState} />
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
