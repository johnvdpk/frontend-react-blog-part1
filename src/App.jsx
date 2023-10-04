import './App.css'
import logo from './assets/logo-white.png'
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/home/Home.jsx";
import Post from "./pages/post/Post.jsx";
import AllBlogs from "./pages/allBlogs/AllBlogs.jsx";
import Blog from "./pages/blog/Blog.jsx";
import NotFound from "./pages/notfound/NotFound.jsx";
import Navi from "./pages/Navi/Navi.jsx";
import axios from "axios";
import {useState} from "react";

function App() {

   const [data, setData] = useState([]);
   const [singleData, setSingleData] = useState({})

    async  function fetchData() {
        try {
            const response = await axios.get('http://localhost:3000/posts/')
            setData(response.data)
        } catch (e) {
            console.log(e)
        }

    }

    async  function fetchOneData() {
        try {
            const response = await axios.get('http://localhost:3000/posts/6')
            setSingleData(response.data)
        } catch (e) {
            console.log(e)
        }

    }

    async  function postData() {
       try {
           const postTitle = {

             title: "john is lekker bezig"
           };
           const response = await axios.post('http://localhost:3000/posts', postTitle)
           console.log(response.data)
       } catch (e) {
           console.log(e)
       }
    }

    async function deleteData() {
       try {
           // const deleteId = {
           //     id: 20
           // };
           const response = await axios.delete('http://localhost:3000/posts/21')
           console.log(response.data)
       } catch (e) {
           console.log(e)
       }
    }

    async function editData() {
       try{
           const editThisData = {
               "id": 15,
               "title": "Verkenning van de Amazone met John",
               "subtitle": "Een avontuurlijke reis door 's werelds grootste regenwoud",
               "content": "De Amazone, 's werelds grootste regenwoud, herbergt een schat aan biodiversiteit en avontuurlijke mogelijkheden. In deze blog nemen we je mee op een epische reis door de Amazone. Verken de weelderige jungle, vaar over de machtige rivieren en ontmoet inheemse gemeenschappen. Ontdek de wonderen van de Amazone en draag bij aan haar behoud.",
               "created": "2023-09-07T16:00:00Z",
               "author": "Diego Rodrigues",
               "readTime": 7,
               "comments": 18,
               "shares": 11

           }

           const response = await axios.put('http://localhost:3000/posts/15', editThisData)
           console.log(response.data)
       } catch(e) {
           console.log(e)
       }
    }


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
            <p>Data testen</p>
            <button className="button" onClick={fetchData}>Get All Data</button>
            <div className='data-container'>
                {data.map(post => (
                <div className='data' key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
                ))}
            </div>


            <button className="button" onClick={fetchOneData}>Blog 6 </button>
            <h2>{singleData.title}</h2>
            <p>{singleData.content}</p>

            <button className='button' onClick={postData}>Create new data</button>
            <button className='button' onClick={deleteData}>Delete</button>
            <button className='button' onClick={editData}>Edit</button>
         </div>





</>
    );
}

export default App
