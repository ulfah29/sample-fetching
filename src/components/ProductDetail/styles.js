/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const container = css({
    maxWidth: 700,
    margin: '40px auto',
    padding: 24,
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

export const contentBox = css({
    h2: {
        marginTop: 0,
    }
})