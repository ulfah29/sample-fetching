import { useState, useRef, useEffect, useCallback } from 'react';
import './App.css';
import CommentResult from './components/CommentResult';
import ProductDetail from './components/ProductDetail';
import LoadingState from './components/LoadingState';
import Form from './components/Form';

function App() {
  const [productDetail, setProductDetail] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isLoadingSubmitData, setIsLoadingSubmitData] = useState(false);
  const [resetData, setResetData] = useState(false);
  const [reviewData, setReviewData] = useState('');
  const refFetchData = useRef(false);

  const commentData = useCallback(() => {
    fetch('https://dummyjson.com/c/db8d-b622-4df4-bc74')
    .then(res => res.json())
    .then(res => {
      setProductDetail(res);
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

  const SubmitMessage = (massage) => {
    setIsLoadingSubmitData(true);
    fetch('https://dummyjson.com/comments/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        body: massage || '',
        postId: 3,
        userId: 5,
      })
    })
    .then(res => res.json())
    .then(res => {
      setReviewData(res);
      setIsLoadingSubmitData(false);
      setResetData(true);
    });
  }

  return (
    <div className='containerWrapper'>
      {isLoading ? <LoadingState /> : (
        <>
          <ProductDetail productDetail= {productDetail} />
          <div className="commentBox">
            <CommentResult reviewData={reviewData} />
            <Form action={prop => SubmitMessage(prop)} isLoadingSubmitData={isLoadingSubmitData} resetData={resetData} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
