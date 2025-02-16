import { useState, useRef, useEffect, useCallback } from 'react';
import './App.css';
import CommentResult from './components/CommentResult';
import ProductDetail from './components/ProductDetail';
import LoadingState from './components/LoadingState';
import Form from './components/Form';

function App() {
  const [productDetail, setProductDetail] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isLoadingSubmitData, setIsLoadingSubmitData] = useState(false);
  const [resetData, setResetData] = useState(false);
  const [reviewData, setReviewData] = useState('');
  const [failedToLoadProduct, setFailedToLoadProduct] = useState(false);
  const refFetchData = useRef(false);

  const fetchCommentData = useCallback(() => {
    setLoading(true);
    try {
      fetch('https://dummyjson.com/c/db8d-b622-4df4-bc74')
        .then(res => res.json())
        .then(res => {
          setProductDetail(res);
          setLoading(false);
        });
    } catch(error) {
      console.error('Fetch commentData error', error);
      setFailedToLoadProduct(true);
    }
  },[]);

  useEffect(() => {
    if (!refFetchData.current) {
      setLoading(true);
      fetchCommentData();
      refFetchData.current = true;
    }
  }, [refFetchData, fetchCommentData]);

  const SubmitMessage = (massage) => {
    setIsLoadingSubmitData(true);

    try {
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
    } catch(error) {
      console.error('SubmitMessage Error', error);
      alert('Failed to submit data. Please try again!')
    }
  }

  const handleClickTryAgain = () => {
    setFailedToLoadProduct(false);
    fetchCommentData();
  }

  if (failedToLoadProduct) {
    return (
      <div className="failedToLoadSection">
        <p>Failed to load data</p>
        <button onClick={() => handleClickTryAgain()}>Try Again</button>
      </div>
    )
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
