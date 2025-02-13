import { useState, useRef, useEffect, useCallback } from 'react';
import './App.css';
import CommentResult from './components/CommentResult';

function App() {
  const [listComments, setListComment] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const refFetchData = useRef(false);

  const commentData = useCallback(() => {
    fetch('https://dummyjson.com/c/c543-1d0a-4be3-aa32')
    .then(res => res.json())
    .then(res => {
      setListComment(res);
      setLoading(false);
    });
  },[]);

  useEffect(() => {
    if (!refFetchData.current) {
      setLoading(true);
      commentData();
      refFetchData.current = true;
    }
  }, [refFetchData, commentData]);

  console.log('listComments', listComments);
  console.log('isLoading', isLoading)

  return (
    <div>
      <CommentResult isLoading={isLoading} listComments={listComments} />
    </div>
  );
}

export default App;
