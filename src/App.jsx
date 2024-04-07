import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import PostItem from './components/PostItem';

function App() {  
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, [])

  const fetchPosts = async () => {
    const fetch = await axios.get('Data.json');
    setPosts(fetch.data);
  }

  return (
    <div className="app container">
      <h2>Pagination in React</h2>
      <div className="posts">
        {posts.length ? (posts.map(post => <PostItem key={post.id} post={post} />)) : 'No Posts'}
      </div>
    </div>
  )
}

export default App
