import React from 'react';
import styled, { keyframes } from 'styled-components';
import { bounceInUp } from 'react-animations';

const slideUp = keyframes`${bounceInUp}`;

const FooterContainer = styled.div`
    position: fixed;
    bottom: 18px;
    width: 100%;
    display: flex;
    justify-content: center;
    opacity: 0;
    animation: 1.5s ease-in ${slideUp} forwards;
    animation-delay: 2s;
`;

const LinkSvg = styled.svg`
    transition: .2s;
    margin-left: 16px;
    margin-right: 16px;

    &:hover {
        fill: #3A6EA5;
        transition: .2s;  
    }
`;

const FooterSocial = () => (
  <FooterContainer>
    <a href="https://www.github.com/maisonm" target="_blank" rel="noopener norefferer">
      <LinkSvg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          className="st0"
          d="M12,0C5.4,0,0,5.4,0,12c0,5.3,3.4,9.8,8.2,11.4C8.8,23.5,9,23.1,9,22.8v-2.2c-3.3,0.7-4-1.4-4-1.4	c-0.5-1.4-1.3-1.8-1.3-1.8c-1.1-0.7,0.1-0.7,0.1-0.7c1.2,0.1,1.8,1.2,1.8,1.2c1.1,1.8,2.8,1.3,3.5,1c0.1-0.8,0.4-1.3,0.8-1.6	C7.1,17,4.3,16,4.3,11.4c0-1.3,0.5-2.4,1.2-3.2C5.5,7.9,5,6.6,5.7,5c0,0,1-0.3,3.3,1.2c1-0.3,2-0.4,3-0.4c1,0,2,0.1,3,0.4	C17.3,4.7,18.3,5,18.3,5c0.7,1.7,0.2,2.9,0.1,3.2c0.8,0.8,1.2,1.9,1.2,3.2c0,4.6-2.8,5.6-5.5,5.9c0.4,0.4,0.8,1.1,0.8,2.2v3.3	c0,0.3,0.2,0.7,0.8,0.6C20.6,21.8,24,17.3,24,12C24,5.4,18.6,0,12,0z"
        />
      </LinkSvg>
    </a>
    <a href="https://www.linkedin.com/in/maisonmoa" target="_blank" rel="noopener norefferer">
      <LinkSvg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </LinkSvg>
    </a>
    <a href="https://www.twitter.com/maison_moa" target="_blank" rel="noopener norefferer">
      <LinkSvg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      </LinkSvg>
    </a>
    <a href="https://www.instagram.com/maison_m" target="_blank" rel="noopener norefferer">
      <LinkSvg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          className="st0"
          d="M12,2.2c3.2,0,3.6,0,4.9,0.1c3.3,0.1,4.8,1.7,4.9,4.9c0.1,1.3,0.1,1.6,0.1,4.8s0,3.6-0.1,4.8	c-0.1,3.2-1.7,4.8-4.9,4.9c-1.3,0.1-1.6,0.1-4.9,0.1c-3.2,0-3.6,0-4.8-0.1c-3.3-0.1-4.8-1.7-4.9-4.9c-0.1-1.3-0.1-1.6-0.1-4.8	s0-3.6,0.1-4.8C2.4,4,4,2.4,7.2,2.3C8.4,2.2,8.8,2.2,12,2.2z M12,0C8.7,0,8.3,0,7.1,0.1c-4.4,0.2-6.8,2.6-7,7C0,8.3,0,8.7,0,12	s0,3.7,0.1,4.9c0.2,4.4,2.6,6.8,7,7C8.3,24,8.7,24,12,24s3.7,0,4.9-0.1c4.4-0.2,6.8-2.6,7-7C24,15.7,24,15.3,24,12s0-3.7-0.1-4.9	c-0.2-4.4-2.6-6.8-7-7C15.7,0,15.3,0,12,0z M12,5.8c-3.4,0-6.2,2.8-6.2,6.2s2.8,6.2,6.2,6.2s6.2-2.8,6.2-6.2S15.4,5.8,12,5.8z M12,16c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S14.2,16,12,16z M18.4,4.2c-0.8,0-1.4,0.6-1.4,1.4S17.6,7,18.4,7s1.4-0.6,1.4-1.4	S19.2,4.2,18.4,4.2z"
        />
      </LinkSvg>
    </a>
  </FooterContainer>
);

export default FooterSocial;
