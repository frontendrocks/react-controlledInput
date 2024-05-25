
import './App.css'
// import Users from './Users';
// import ControlledInput from './ControlledInput';
import AddListUsers from './AddListUsers'
// import {books} from './data.js';
// import Counter from './Counter'


function App() {

  // filter the book
  // const getBook = (id) => {
  //   const book = books.find((book) => book.id === id);
  //   console.log(book)
  // }

  return (
    <>
      {/* <ControlledInput /> */}
      <AddListUsers />
      {/* <Users /> */}
      {/* <Counter /> */}
      {/* <h2>React App</h2>
      {books.map((book) => {
        // const { author, img, title, id } = book;
        // return <Book author={author} img={img} title={title} key={id} /> // One way
        return <Book {...book} key={book.id} getBook={getBook} />  // Other way
      })} */}
    </>
  )
}

// const Book = (props) => {
//   const { author, img, title, getBook, id } = props
//   return (<>
//     <section>
//     <img src={img} />
//     <h2>{title}</h2>
//       <h3>{author}</h3>
//       <button type='button' onClick={()=> getBook(id)}>Click</button>
//     </section>

//   </>)
// }

export default App
