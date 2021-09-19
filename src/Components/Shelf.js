import React from 'react';
import Books from './Books';

class Shelf extends React.Component{

    render(){
      const allBooks = this.props.allBooks;
      const currentlyReading =allBooks.filter(book => book.shelf === "currentlyReading");
      const wantToRead =allBooks.filter(book => book.shelf === "wantToRead");
      const read =allBooks.filter(book => book.shelf === "read");
     
      return (
          <div className="list-books-content">
              <div>
               <Books books={currentlyReading} title={"Currently Reading"} changeShelf={this.props.changeShelf} /> {/* currently reading */}
               <Books books={wantToRead} title={"Want to Read"} changeShelf={this.props.changeShelf} /> {/* want to read */}
               <Books books={read} title={"Read"} changeShelf={this.props.changeShelf} /> {/* read */}
              </div>
            </div>
       );  
   }
}
export default Shelf;