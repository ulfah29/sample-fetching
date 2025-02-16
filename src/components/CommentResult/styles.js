/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const container = css({
    maxWidth: 700,
    margin: '0 auto',
    padding: 24,
    borderRadius: 12,

    h2: {
        fontsize: 32,
        marginTop: 0,
    }
})

export const productImageContainer = css({
    maxWidth: '40%',
    paddingRight: 24,
    boxSizing: 'border-box',

    img: {
        width: '100%',
    }
})

export const commentBoxStyle = css({
    display: 'flex',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#f8eccd',

    img: {
        borderRadius: '50%',
        maxWidth: 40,
        marginRight: 12,
    },

    '.userName': {
        fontWeight: 800,
        margin: '7px 0 12px 0',
    }
})