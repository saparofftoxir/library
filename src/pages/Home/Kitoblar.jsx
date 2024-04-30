import React from 'react'
import { books } from '../../data/books';
import BooksCard from '../../components/BooksCard';

function Kitoblar() {
  return (
    <div className='w-full min-h-screen grid xl:grid-cols-4 md:grid-cols-3 pb-12 gap-3'>
      { 
        books?.map(book=> <BooksCard key={book.id} book={book}/>)
      }
    </div>
  )
}

export default Kitoblar;