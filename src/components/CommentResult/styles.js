/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const container = css({
    maxWidth: 700,
    margin: '40px auto',
    padding: 24,
    borderRadius: 12,
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
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#729071',
    color: '#FFF',
})