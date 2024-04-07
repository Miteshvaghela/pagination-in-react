import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import PostItem from './components/PostItem';
import Pagination from './components/Pagination';

function App() {  
  const [posts, setPosts] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordPerPage] = useState(3);
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



  return (
    <div className="app container">
      <h1 style={{textAlign:'center', margin:'40px auto'}}>Pagination in React</h1>
      
      <div className="posts">
        { loading && <span>Loading...</span>}
        {currentRecords.length ? (currentRecords.map(post => <PostItem key={post.id} post={post} />)) : 'No Posts'}
      </div>
      <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
    </div>
  )
}

export default App



// https://github.com/Miteshvaghela/pagination-in-react.git