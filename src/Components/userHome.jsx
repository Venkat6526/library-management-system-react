import { Routes,Route } from "react-router-dom";
import PageNotFound from "./404";
import BookList from "./bookList";
import ReadBook from "./readbook";
import UserDashboard from "./userDashboard";
import UserNavbar from "./userNavbar";
const UserHome = () => {
    return ( 
        <div className="userHome">
          <UserNavbar/>
          
          <Routes>
            <Route path="/" element={<UserDashboard/>}/>
            <Route path="/bookList" element={<BookList/>}/>
            <Route path="/bookList/:id" element={<ReadBook/>} />
            <Route path="*" element={<PageNotFound/>}/>
          </Routes>
        </div>
     );
}
 
export default UserHome;
