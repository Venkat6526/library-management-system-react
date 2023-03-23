import { useState,useEffect } from "react";
import '../Styles/bookList.css'
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
const BookList = () => {
    let [books, setBooks]=useState([])
    let location = useLocation()

    useEffect(()=>{
        let fetchData = async ()=>{
        let ADD = await fetch('http://localhost:4005/books')
        let data = await ADD.json()
        setBooks(data)
        }
        fetchData()
    },[books])

    // delete a book from server
    let handleDelete=(id,title)=>{
        fetch(`http://localhost:4005/books/${id}`,{
            method:'DELETE'
    });
    alert(`${title} will be deleted permanently`)
    }

    let navigate =useNavigate();
    let Read = (id) => {
       if (location.pathname == '/admin/bookList') {
        navigate(`/admin/booklist/${id}`)
       } else {
          navigate(`/user/bookList/${id}`)
       }
    }
    return ( 
        <div className="bookList">
            <div className="head">
            <h1>Book List:{books.length}</h1>
            </div>
            <div className="book_section">
                {books.map((data)=>(
                    <div className="book_card">
                        <div className="disp">
                        <div className="pic">
                            <img src={data.thumbnailUrl} alt="" />
                            </div>
                            <div className="hh">
                            <h1>{data.title}</h1>
                            <h5>Authors: {data.authors.toString()}</h5>  
                            <h5>Page Count: {data.pageCount}</h5> 
                            <h5>Categories: {data.categories.toString()}</h5>
                            <button className="read" onClick={()=> Read(data.id)}>Read more</button>
                            {location.pathname == '/admin/bookList' && <button className="delete" onClick={()=>handleDelete(data.id,data.title)}>Delete</button>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default BookList;