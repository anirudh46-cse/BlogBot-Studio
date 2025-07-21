import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from './pages/Blog'
import Home from './pages/Home'
import Layout from './pages/Admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import AddBlog from './pages/admin/AddBlog'
import ListBlog from './pages/admin/ListBlog'
import Comments from './pages/admin/Comments'
import Login from './components/admin/Login'
import 'quill/dist/quill.snow.css'
import {Toaster} from 'react-hot-toast'
import { useAppContext } from './context/AppContext'
import ErrorBoundary from './components/ErrorBoundary';
import AdminComment from './pages/admin/AdminComment'; 
import BlogPost from './pages/BlogPost';


const App = () => {


   const {token} = useAppContext();
   <ErrorBoundary>
    <App/>
   </ErrorBoundary>

   const toggleDarkMode = ()=> {
    document.documentElement.classList.toggle('dark');
   };
  return (
    <div>
      <Toaster/>
       <div className='fixed top-4 right-4 z-50'>
        <button onClick={toggleDarkMode} className='p-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-full shadow-md hover:scale-105 transition-transform duration-300'>
           
        </button>

       </div>
       

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blog/:id' element={<Blog/>} />
        <Route path='/admin'element={token ? <Layout/> :<Login/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='addBlog' element={<AddBlog/>}/>
        <Route path='ListBlog' element={<ListBlog/>}/>
        <Route path='comments' element={<Comments/>}/>
        <Route path="/admin/comment" element={<AdminComment/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
