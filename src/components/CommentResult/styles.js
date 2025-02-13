/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const container = css({
    maxWidth: 700,
    margin: '100px auto',
    padding: 24,
    border: '1px solid #E0E0E0',
    borderRadius: 12,
    display: 'flex',
})

export const productImageContainer = css({
    maxWidth: '40%',
    paddingRight: 24,
    boxSizing: 'border-box',

    img: {
        width: '100%',
    }
})

export const commentBoxContainer = css({
    width: '60%',
})

export const commentBoxStyle = css({
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    width: '100%',
    boxSizing: 'border-box',

    '&:nth-child(odd)': {
        backgroundColor: '#729071',
        color: '#FFF',
    },

    '&:nth-child(even)': {
        backgroundColor: '#D9D9D9',
        color: '#000',
    }
})