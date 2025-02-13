/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const loader = css({
    width: 320,
    height: 150,
    display: 'block',
    margin: 'auto',
    position: 'relative',
    background: '#FFF',
    boxSizing: 'border-box',

    '&::after': {
        content: '""', 
        width: 'calc(100% - 30px)',
        height: 'calc(100% - 30px)',
        top: 15,
        left: 15,
        position: 'absolute',
        backgroundImage: 'linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.5) 50%, transparent 80%), radial-gradient(circle 28px at 28px 28px, #DDD 99%, transparent 0), linear-gradient(#DDD 24px, transparent 0), linear-gradient(#DDD 18px, transparent 0), linear-gradient(#DDD 66px, transparent 0)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '75px 130px, 55px 56px, 160px 30px, 260px 20px, 290px 56px',
        backgroundPosition: '0% 0, 0 0, 70px 5px, 70px 38px, 0px 66px',
        boxSizing: 'border-box',
        animation: 'animloader 1s linear infinite',
      },
      
      '@keyframes animloader': {
        '0%': {
          backgroundPosition: '0% 0, 0 0, 70px 5px, 70px 38px, 0px 66px',
        },
        '100%': {
          backgroundPosition: '150% 0, 0 0, 70px 5px, 70px 38px, 0px 66px',
        }
    }
})