/** @jsxImportSource @emotion/react */
import { container, commentBoxStyle } from './styles';

function CommentResult({ reviewData }) {
    const commentBox = () => {
        return (
            <div css={commentBoxStyle}>
                {/* <div>{reviewData?.user?.username || ''}</div> */}
                <div>{reviewData.body || ''}</div>
            </div>
        )
    }

    return(
        <div css={container}>
            <h2>Review</h2>
            {!reviewData ? <div>no review yet</div> : commentBox()}
        </div>
    )
}

export default CommentResult;
