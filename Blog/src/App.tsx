import NavList from './components/NavList';
import { Routes, Route } from "react-router-dom";
import Home from './components/home'
import BlogCards  from './components/blogCards';
import BlogArticles from './components/blogArticle';


function App() {

  return (
    <div className='App'>
     
       <NavList />
      <Routes>
          <Route path="/" 
           element={<Home /> }
          />
          <Route  path="blog/" 
           element={<BlogCards />}
           />
         
          <Route  path="/blog/:id" 
           element={<BlogArticles />} 
          />
      </Routes>
      </div>
  )

}

export default App


