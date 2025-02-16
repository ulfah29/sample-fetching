/** @jsxImportSource @emotion/react */
import { loader, loaderContainer } from './styles';

function LoadingState() {
    return (
        <div css={loaderContainer}>
            <span css={loader}></span>
        </div>
    )
}

export default LoadingState;
