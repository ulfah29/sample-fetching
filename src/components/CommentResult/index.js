/** @jsxImportSource @emotion/react */
import { container, productImageContainer } from './styles';
import ProductImage from '../../assets/product-image.jpg';
import LoadingState from '../LoadingState';
import { commentBoxStyle, commentBoxContainer } from './styles';

function CommentResult({ isLoading, listComments }) {
    const commentBox = () => {
        if (listComments.length === 0 && !isLoading) {
            return <div>No comment yet</div>
        }

        return listComments.map((data, idx) => {
            return (
                <div css={commentBoxStyle} key={idx}>
                    <div>{data.name || ''}</div>
                    <div>{data.email || ''}</div>
                    <div>{data.message || ''}</div>
                </div>
            )
        })
    }

    return(
        <div css={container}>
            <div css={productImageContainer}>
                <img src={ProductImage} alt="product" />
            </div>
            <div css={commentBoxContainer}>
                {isLoading ? <LoadingState /> : commentBox()}
            </div>
        </div>
    )
}

export default CommentResult;
