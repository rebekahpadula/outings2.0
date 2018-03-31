import React from 'react';
import styled from 'styled-components';

import SrOnlyHeading from './SrOnlyHeading';

import facebookIcon from '../assets/icon-fb.svg';
import instagramIcon from '../assets/icon-ig.svg';
import youtubeIcon from '../assets/icon-yt.svg';

const Social = styled.section`
    text-align: center;
    padding: 0 5px;
    background-color: #45a8d2;
    /* because of white space around icons, we only need 5px here */
    /* background-color: #ffac5a; */

    @media screen and (min-width: 700px) {
        text-align: right;
    }
`;

const SocialHeading = styled.h1``;

const SocialSubheading = styled.h2``;

const SocialIconsList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const SocialIconsItem = styled.li`
    display: inline-block;
`;

const SocialIconsLink = styled.a``;

const SocialIconsImage = styled.img`
    height: 50px;
`;



export default (props) => {
    return (
        <Social id="contact">
            <SrOnlyHeading>Social media links</SrOnlyHeading>
            <SocialIconsList>
                <SocialIconsItem><SocialIconsLink href="https://www.facebook.com/BandUnderTheSun/"><SocialIconsImage src={facebookIcon}/></SocialIconsLink></SocialIconsItem>
                <SocialIconsItem><SocialIconsLink href=""><SocialIconsImage src={instagramIcon}/></SocialIconsLink></SocialIconsItem>
                <SocialIconsItem><SocialIconsLink href="https://www.youtube.com/channel/UCxvOJnlOa_gegYWQFUpmeUw"><SocialIconsImage src={youtubeIcon}/></SocialIconsLink></SocialIconsItem>
            </SocialIconsList>
        </Social>
    )
}