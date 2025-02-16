/** @jsxImportSource @emotion/react */
import { PropTypes, types } from "prop-types";
import { container, productImageContainer, contentBox } from './styles';

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

ProductDetail.propTypes = {
    productDetail: PropTypes.oneOfType([types])
}

ProductDetail.defaultProp = {
    productDetail: [],
};

export default ProductDetail;
