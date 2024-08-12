import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import PostItem from './components/PostItem';
import Pagination from './components/Pagination';
import Button from 'react-bootstrap/Button';
import AddPostForm from './components/AddPostForm';

function App() {  
  const [posts, setPosts] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordPerPage] = useState(1);
  const [showForm, setShowForm] = useState(false);

  
    const indexOfLastRecord = currentPage * recordPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordPerPage;
    const currentRecords = posts.slice(indexOfFirstRecord, 
      indexOfLastRecord);
    const nPages = Math.ceil(posts.length / recordPerPage)
  
    
  
  useEffect(() => { 
    fetchPosts();
  }, [])

  const fetchPosts = async () => {
    await fetch('http://localhost:8080/posts', {
        method : 'GET',
        headers : {
          'Content-Type':'application/json'
        }
      })
      .then(data => {
        return data.json()
      })
      .then((response) => {
        setPosts(response)  
      })
    setLoading(true)
    // await axios.get('Data.json')
    //     .then(data => {
    //       setPosts(data.data);
    //       setLoading(false)
    //     })
    //     .catch(error => {
    //       alert(error);
    //       setLoading(false)
    //     })
  }

  const addPost = () => {
    setShowForm(!showForm);
  }

  const savePostData = async (obj) => {
    // post data 
    obj.id = Math.floor((Math.random()+1) * 10000).toString(); 
    await fetch('http://localhost:8080/posts', {
        method : 'POST',
        headers : {
          'Content-Type':'application/json'
        },
        body : JSON.stringify(obj)
      })
      .then(data => {
        setShowForm(false);
        setPosts([...posts, obj]);
      })
      .catch((err) => {
        console.error(err)
      })
      
    
  }

  const deletePostItem = async (id) => {
    console.log('Delete post : ', id);
    if(id === null || id === undefined) return false;

    await fetch(`http://localhost:8080/posts/${id}`, {
      method : 'DELETE'
    })
    .then(data => {
      setPosts(posts.filter(post => post.id != id))
    })
    .catch((err) => {
      console.error(err)
    })
  }


  return (
    <div className="app container">
      <h1 style={{textAlign:'center', margin:'40px auto', color:'white'}}>Pagination in React</h1>
      <div className="block">
        <Button variant="primary" onClick={addPost}>Add Post</Button>
      </div>
      {posts.length && <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />}
      {
        posts.length && <div className="posts">
        { loading && <span>Loading...</span>}
        {currentRecords.length ? (currentRecords.map(post => <PostItem key={post.id} post={post} deletePostItem={deletePostItem} />)) : 'No Posts'}
      </div>
      }
     {showForm && <AddPostForm setShowForm={setShowForm} savePostData={savePostData}/>}
    </div>
  )
}

export default App



// https://github.com/Miteshvaghela/pagination-in-react.git