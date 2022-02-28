import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Posts from "./pages/Posts";
import Comments from "./pages/Comments";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <h1>My Posts</h1>
          <NavLink to='/'>Posts</NavLink>
          <NavLink to='/comments'>Comments</NavLink>
        </nav>

        <Routes>
          <Route path='/' element={<Posts />} />
          <Route path='/post/:id' element={<Comments />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
