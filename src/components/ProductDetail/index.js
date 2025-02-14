/** @jsxImportSource @emotion/react */
import { container, productImageContainer } from './styles';
import { contentBox } from './styles';

function ProductDetail({ productDetail }) {
    return(
        <div css={container}>
            <div css={productImageContainer}>
                <img src={productDetail?.images || ''} alt="product" />
            </div>
            <div css={contentBox}>
                <h2>{productDetail?.title || ''}</h2>
                <p>{productDetail?.description || ''}</p>
            </div>
        </div>
    )
}

export default ProductDetail;
