import './App.css'
import logo from './assets/logo-white.png'
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/home/Home.jsx";
import Post from "./pages/post/Post.jsx";
import AllBlogs from "./pages/allBlogs/AllBlogs.jsx";
import Blog from "./pages/blog/Blog.jsx";
import React from "react";
import NotFound from "./pages/notfound/NotFound.jsx";
import Navi from "./pages/Navi/Navi.jsx";

function App() {
    return (
<>

        <Navi />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/post" element={<Post/>} />
            <Route path="/all-blogs" element={<AllBlogs/>} />
            <Route path="/post/:articleNumber" element={<Blog/>} />
            <Route path="*" element={<NotFound/>} />
            </Routes>

        <div className="page-container">
            <img src={logo} alt="Company logo"/>
         </div>

</>
    );
}

export default App
