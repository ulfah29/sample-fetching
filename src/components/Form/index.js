/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { PropTypes } from "prop-types";
import { inputReviewBox, submitButton, container, submitButtonDisabled, submitLoading } from './styles';

function Form({ action, isLoadingSubmitData, resetData }) {
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (resetData) {
            setMessage('')
        }
    }, [resetData]);

    const getButtonClass = () => {
        if (isLoadingSubmitData) return submitLoading;
        if (message) return submitButton;
        return submitButtonDisabled;
    }

    const handleOnChangeInput = (e) => {
        const inputValue = e.target.value;
        setMessage(inputValue);
    }

    const onClickSubmit = () => {
        action(message);
    }

    return (
        <div css={container}>
            <textarea css={inputReviewBox} type="text" placeholder="Message" value={message} onChange={(e) => handleOnChangeInput(e)} />
            <button css={getButtonClass()} onClick={onClickSubmit} disabled={!message}>Submit</button>
        </div>
    )
}

Form.propTypes = {
    action: PropTypes.func,
    isLoadingSubmitData: PropTypes.bool,
    resetData: PropTypes.bool,
}

Form.defaultProp = {
    action: () => {},
    isLoadingSubmitData: false,
    resetData: false,
};


export default Form;
