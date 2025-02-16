/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const loader = css({
  border: '16px solid #f3f3f3',
  borderTop: '16px solid #FDC021',
  borderRadius: '50%',
  width: 50,
  height: 50,
  margin: 25,
  animation: 'spin 2s linear infinite',
  display: 'inline-block',

  '@keyframes spin': {
    '0%': {transform: 'rotate(0deg)'},
    '100%': {transform: 'rotate(360deg)'}
  }
})

export const loaderContainer = css({
  width: 130,
  margin: '50px auto',
})