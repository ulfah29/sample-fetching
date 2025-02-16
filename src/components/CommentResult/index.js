/** @jsxImportSource @emotion/react */
import { PropTypes } from "prop-types";
import { container, commentBoxStyle } from './styles';

function CommentResult({ reviewData }) {
    console.log('reviewData', reviewData)
    const commentBox = () => {
        return (
            <div css={commentBoxStyle}>
                <div><img src="https://placehold.co/50x50" alt="profile" /></div>
                <div>
                    <div className="userName">{reviewData?.user?.username || ''}</div>
                    <div className="message">{reviewData.body || ''}</div>
                </div>
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

CommentResult.propTypes = {
    reviewData: PropTypes.object,
}

CommentResult.defaultProp = {
    reviewData: {},
};

export default CommentResult;
