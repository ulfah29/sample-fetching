/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const inputReviewBox = css({
    padding: 16,
    borderRadius: 12,
    width: '100%',
    border: '1px solid #E0E0E0',
    boxSizing: 'border-box',
})

export const submitButton = css({
    padding: 16,
    backgroundColor: '#FDC021',
    border: 'none',
    fontWeight: 800,
    color: '#FFF',
    cursor: 'pointer',
    borderRadius: 12,
    width: 140,
    marginTop: 16,

    '&:hover': {
        opacity: .7,
    }
})

export const submitButtonDisabled = css({
    padding: 16,
    backgroundColor: '#EEE',
    border: 'none',
    fontWeight: 800,
    cursor: 'pointer',
    borderRadius: 12,
    width: 100,
    marginTop: 16,
})

export const container = css({
    maxWidth: 700,
    margin: 'auto',
    boxSizing: 'border-box',
    padding: 16,
})

export const submitLoading = css({
    position: 'relative',
    padding: 16,
    background: '#FDC021',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    fontWeight: 800,
    color: '#FFF',
    borderRadius: 12,
    width: 140,
    marginTop: 16,

    '&::after' : {
        content: '""',
        position: 'absolute',
        width: 16,
        height: 16,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 12,
        border: '4px solid transparent',
        borderTopColor: '#ffffff',
        borderRadius: '50%',
        animation: 'button-loading-spinner 1s ease infinite',
    },

    '@keyframes button-loading-spinner': {
        'from': {
          transform: 'rotate(0turn)',
        },
      
        'to': {
          transform: 'rotate(1turn)',
        }
    }
})