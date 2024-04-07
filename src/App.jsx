import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import PostItem from './components/PostItem';
import Pagination from './components/Pagination';

function App() {  
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordPerPage, setRecordPerPage] = useState(1);
  const indexOfLastRecord = currentPage * recordPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordPerPage;
  const currentRecords = posts.slice(indexOfFirstRecord, 
    indexOfLastRecord);

  useEffect(() => {
    setLoading(true);
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

    await axios.get('Data.json')
        .then(data => {
          setPosts(data.data);
        })
        .catch(error => {
          console.error(error);
        })
  }


  const nPages = Math.ceil(posts.length / recordPerPage)

  return (
    <div className="app container">
      <h1 style={{textAlign:'center', margin:'40px auto'}}>Pagination in React</h1>
      <div className="posts">
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