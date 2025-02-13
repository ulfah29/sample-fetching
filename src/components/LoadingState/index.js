/** @jsxImportSource @emotion/react */
import { loader } from './styles';

function LoadingState() {
    return (
        <div>
            <span css={loader}></span>
        </div>
    )
}

export default LoadingState;
