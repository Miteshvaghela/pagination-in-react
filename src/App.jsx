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
  const [recordPerPage] = useState(3);
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
    // await fetch('Data.json', {
    //     method : 'GET',
    //     headers : {
    //       'Content-Type':'application/json'
    //     }
    //   })
    //   .then(data => {
    //     return data.json()
    //   })
    //   .then((response) => {
    //     setPosts(response) 
    //   })
    setLoading(true)
    await axios.get('Data.json')
        .then(data => {
          setPosts(data.data);
          setLoading(false)
        })
        .catch(error => {
          alert(error);
          setLoading(false)
        })
  }

  const addPost = () => {
    setShowForm(!showForm);
  }


  return (
    <div className="app container">
      <h1 style={{textAlign:'center', margin:'40px auto', color:'white'}}>Pagination in React</h1>
      <div className="block">
        <Button variant="primary" onClick={addPost}>Add Post</Button>
      </div>
      <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
      <div className="posts">
        { loading && <span>Loading...</span>}
        {currentRecords.length ? (currentRecords.map(post => <PostItem key={post.id} post={post} />)) : 'No Posts'}
      </div>
     {showForm && <AddPostForm setShowForm={setShowForm}/>}
    </div>
  )
}

export default App



// https://github.com/Miteshvaghela/pagination-in-react.git